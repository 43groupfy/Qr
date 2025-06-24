const fileInput = document.getElementById('fileInput');
const tabSingle = document.getElementById('tabSingle');
const tabCustom = document.getElementById('tabCustom');
const singleContent = document.getElementById('singlePatternContent');
const customContent = document.getElementById('customPatternContent');

const prefixInput = document.getElementById('prefix');
const suffixInput = document.getElementById('suffix');
const enableSuffixSingle = document.getElementById('enableSuffixSingle');
const autoTrimSingle = document.getElementById('autoTrim');

const rangeList = document.getElementById('rangeList');
const addRangeBtn = document.getElementById('addRangeBtn');
const enableSuffixCustom = document.getElementById('enableSuffixCustom');
const autoTrimCustom = document.getElementById('autoTrimCustom');

const downloadBtn = document.getElementById('downloadBtn');
const previewList = document.getElementById('previewList');

let files = [];
let renamedFiles = [];

// Default: 1 pattern-group untuk Custom
addRange();

// Tab switch
tabSingle.onclick = () => switchTab('single');
tabCustom.onclick = () => switchTab('custom');

function switchTab(tab) {
  if (tab === 'single') {
    tabSingle.classList.add('active');
    tabCustom.classList.remove('active');
    singleContent.style.display = '';
    customContent.style.display = 'none';
  } else {
    tabSingle.classList.remove('active');
    tabCustom.classList.add('active');
    singleContent.style.display = 'none';
    customContent.style.display = '';
  }
  showPreview();
}

// Toggle suffix visibility
enableSuffixSingle.onchange = () => {
  suffixInput.style.display = enableSuffixSingle.checked ? '' : 'none';
  showPreview();
};
enableSuffixCustom.onchange = () => {
  document.querySelectorAll('.range-item .suffix').forEach(s => {
    s.style.display = enableSuffixCustom.checked ? '' : 'none';
  });
  showPreview();
};

addRangeBtn.onclick = addRange;
fileInput.onchange = showPreview;
prefixInput.oninput = showPreview;
suffixInput.oninput = showPreview;
autoTrimSingle.onchange = showPreview;
autoTrimCustom.onchange = showPreview;

// Tambahkan event delegation agar tombol Remove berfungsi
rangeList.addEventListener('click', function(e) {
  if (e.target.classList.contains('remove')) {
    e.target.closest('.range-item').remove();
    showPreview();
  }
});

// Tambah satu group Custom
function addRange() {
  const div = document.createElement('div');
  div.className = 'range-item';
  div.innerHTML = `
    <div class="pattern-group">
      <input type="text" class="range" placeholder="Range (1-10)">
      <input type="text" class="prefix" placeholder="Front">
      <span>{{num}}</span>
      <input type="text" class="suffix" placeholder="Back" style="${enableSuffixCustom.checked ? '' : 'display:none;'}">
      <button type="button" class="remove">x</button>
    </div>
  `;
  rangeList.appendChild(div);
  showPreview();
}

// Event input: selalu refresh preview jika ada perubahan di input Custom
document.addEventListener('input', e => {
  if (e.target.matches('#rangeList input')) showPreview();
});

// Preview auto update:
function showPreview() {
  files = fileInput.files;
  if (!files.length) {
    previewList.innerHTML = '<tr><td colspan="3">No files uploaded.</td></tr>';
    downloadBtn.disabled = true;
    return;
  }

  renamedFiles = [];
  previewList.innerHTML = '';

  Array.from(files).forEach((file, idx) => {
    const num = idx + 1;
    let newName = '';

    if (tabSingle.classList.contains('active')) {
      let prefix = prefixInput.value;
      let suffix = suffixInput.value;
      if (autoTrimSingle.checked) {
        prefix = prefix.trim();
        suffix = suffix.trim();
      }
      newName = `${prefix}${num}${enableSuffixSingle.checked ? suffix : ''}.${getExt(file.name)}`;
    } else {
      newName = null;
      document.querySelectorAll('#rangeList .range-item').forEach(item => {
        const rangeInput = item.querySelector('.range');
        const prefixInput = item.querySelector('.prefix');
        const suffixInput = item.querySelector('.suffix');

        const rangeVal = rangeInput.value.trim();
        let prefix = prefixInput.value;
        let suffix = suffixInput?.value || '';

        if (autoTrimCustom.checked) {
          prefix = prefix.trim();
          suffix = suffix.trim();
        }

        const ranges = parseRange(rangeVal);
        if (ranges.includes(num)) {
          newName = `${prefix}${num}${enableSuffixCustom.checked ? suffix : ''}.${getExt(file.name)}`;
        }
      });
      if (!newName) newName = file.name;
    }

    renamedFiles.push({ newName, file });
    const row = document.createElement('tr');
    row.innerHTML = `<td>${num}</td><td>${file.name}</td><td>${newName}</td>`;
    previewList.appendChild(row);
  });

  downloadBtn.disabled = false;
}

function parseRange(input) {
  const result = [];
  input.split(',').forEach(part => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(n => parseInt(n));
      for (let i = start; i <= end; i++) result.push(i);
    } else {
      const num = parseInt(part);
      if (!isNaN(num)) result.push(num);
    }
  });
  return result;
}

function getExt(filename) {
  return filename.split('.').pop();
}

downloadBtn.onclick = async () => {
  if (!renamedFiles.length) return;
  const zip = new JSZip();
  renamedFiles.forEach(item => zip.file(item.newName, item.file));
  const blob = await zip.generateAsync({ type: 'blob' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'renamed_files.zip';
  link.click();
};
