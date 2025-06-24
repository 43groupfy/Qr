let currentPageCount = 0;

/**
 * Parse custom range string like "1-3,5,7-10"
 * Returns array of unique page numbers, sorted ascending
 */
function parseRange(rangeStr) {
  const pages = new Set();
  const parts = rangeStr.split(',');
  for (const part of parts) {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      for (let i = start; i <= end; i++) pages.add(i);
    } else if (part.trim() !== '') {
      pages.add(Number(part));
    }
  }
  return Array.from(pages).sort((a, b) => a - b);
}

/**
 * Show page count when user selects PDF
 */
async function loadPageCount() {
  const fileInput = document.getElementById('split-pdf-file');
  const info = document.getElementById('page-count');
  const warning = document.getElementById('split-warning');

  warning.innerText = '';
  if (!fileInput.files[0]) {
    info.innerText = '';
    currentPageCount = 0;
    return;
  }

  try {
    const arrayBuffer = await fileInput.files[0].arrayBuffer();
    const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);
    currentPageCount = pdfDoc.getPageCount();
    info.innerText = `Total pages: ${currentPageCount}`;
  } catch (e) {
    info.innerText = 'Failed to read PDF.';
    currentPageCount = 0;
  }
}

/**
 * Validate custom range input:
 * - Only digits, comma, hyphen allowed
 * - All page numbers <= total pages
 * - Show warning if error
 */
function validateCustomRange() {
  const input = document.getElementById('custom-range').value.trim();
  const warning = document.getElementById('split-warning');

  // Allow digits, comma, hyphen only
  const validPattern = /^[0-9,\-\s]*$/;
  if (!validPattern.test(input)) {
    warning.innerText = 'Invalid input: use numbers, comma, hyphen only.';
    return false;
  }

  if (input === '') {
    warning.innerText = '';
    return true;
  }

  // If valid, check for out-of-range numbers
  const numbers = parseRange(input);
  const outOfRange = numbers.filter(n => n > currentPageCount);

  if (outOfRange.length > 0) {
    warning.innerText = `Warning: page(s) ${outOfRange.join(', ')} exceed total ${currentPageCount} pages.`;
    return false;
  }

  warning.innerText = '';
  return true;
}

/**
 * Split PDF: custom range OR fixed range
 */
async function splitPDF() {
  const fileInput = document.getElementById('split-pdf-file');
  if (!fileInput.files[0]) {
    alert('Please select a PDF file.');
    return;
  }

  const splitMode = document.querySelector('input[name="split-mode"]:checked').value;

  // Validate custom range first
  if (splitMode === 'custom' && !validateCustomRange()) {
    alert('Please fix range input first.');
    return;
  }

  const arrayBuffer = await fileInput.files[0].arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

  const baseName = document.getElementById('split-filename-base').value || 'split';
  const tokenMode = document.getElementById('split-token').value;

  let order = 1;

  if (splitMode === 'custom') {
    const ranges = parseRange(document.getElementById('custom-range').value);
    for (const pageNum of ranges) {
      if (pageNum > pdfDoc.getPageCount()) continue; // safety check
      const newPdf = await PDFLib.PDFDocument.create();
      const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageNum - 1]);
      newPdf.addPage(copiedPage);
      const blob = await newPdf.save();
      const token = tokenMode === 'range' ? pageNum : order;
      download(blob, `${baseName}_${token}.pdf`);
      order++;
    }
  } else {
    const fixedRange = parseInt(document.getElementById('fixed-range').value);
    const totalPages = pdfDoc.getPageCount();
    for (let i = 0; i < totalPages; i += fixedRange) {
      const newPdf = await PDFLib.PDFDocument.create();
      const end = Math.min(i + fixedRange, totalPages);
      const copiedPages = await newPdf.copyPages(pdfDoc, Array.from({ length: end - i }, (_, idx) => i + idx));
      copiedPages.forEach(p => newPdf.addPage(p));
      const blob = await newPdf.save();
      const token = tokenMode === 'range' ? `${i + 1}-${end}` : order;
      download(blob, `${baseName}_${token}.pdf`);
      order++;
    }
  }
}

/**
 * Merge PDF files
 */
async function mergePDF() {
  const files = document.getElementById('merge-pdf-files').files;
  if (!files.length) {
    alert('Please select PDF files.');
    return;
  }

  const mergedPdf = await PDFLib.PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFLib.PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach(p => mergedPdf.addPage(p));
  }

  const blob = await mergedPdf.save();
  const filename = document.getElementById('merge-filename').value || 'merged';
  download(blob, filename + '.pdf');
}

/**
 * Download helper
 */
function download(blob, filename) {
  const url = URL.createObjectURL(new Blob([blob]));
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
