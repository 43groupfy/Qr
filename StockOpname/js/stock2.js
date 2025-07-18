let scannerActive = false;
let videoStream = null;

// Fungsi untuk membuka tab di stock opname
function openOpnameTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('opname-tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    const tabs = document.getElementsByClassName('opname-tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Fungsi untuk menampilkan aset di tab opname
function renderOpnameAssets() {
    renderUncheckedAssets();
    renderCheckedAssets();
}

// Fungsi untuk menampilkan aset belum dicek
function renderUncheckedAssets() {
    const uncheckedList = document.getElementById('unchecked-list');
    uncheckedList.innerHTML = '';
    
    const uncheckedAssets = assets.filter(asset => !asset.checked);
    
    if (uncheckedAssets.length === 0) {
        uncheckedList.innerHTML = '<p>Tidak ada aset yang belum dicek.</p>';
        return;
    }
    
    uncheckedAssets.forEach((asset, index) => {
        const originalIndex = assets.findIndex(a => a.id === asset.id);
        const assetCard = createAssetCard(asset, originalIndex);
        uncheckedList.appendChild(assetCard);
    });
}

// Fungsi untuk menampilkan aset sudah dicek
function renderCheckedAssets() {
    const checkedList = document.getElementById('checked-list');
    checkedList.innerHTML = '';
    
    const checkedAssets = assets.filter(asset => asset.checked);
    
    if (checkedAssets.length === 0) {
        checkedList.innerHTML = '<p>Tidak ada aset yang sudah dicek.</p>';
        return;
    }
    
    checkedAssets.forEach((asset, index) => {
        const originalIndex = assets.findIndex(a => a.id === asset.id);
        const assetCard = createAssetCard(asset, originalIndex);
        checkedList.appendChild(assetCard);
    });
}

// Fungsi untuk membuat card aset
function createAssetCard(asset, index) {
    const assetCard = document.createElement('div');
    assetCard.className = 'asset-card';
    assetCard.innerHTML = `
        <h3>${asset.name}</h3>
        <p>${asset.category} • ${asset.status}</p>
        <p>Lokasi: ${asset.location}</p>
        <p>Kondisi: ${asset.condition}</p>
        <p class="time">${new Date(asset.time).toLocaleString()}</p>
        <i class="fas fa-check-circle check-icon ${asset.checked ? (asset.condition === 'Baik' ? 'checked-good' : 'checked-warning') : ''}" 
           onclick="toggleAssetCheck(${index}, event)"></i>
    `;
    
    assetCard.addEventListener('click', function() {
        showOpnameModal(index);
    });
    
    return assetCard;
}

// Fungsi untuk toggle check/uncheck (DIMODIFIKASI)
function toggleAssetCheck(index, event) {
    if (event) event.stopPropagation();
    
    const asset = assets[index];
    asset.checked = !asset.checked;
    asset.time = new Date().getTime();
    
    saveToLocal();
    
    // Pindah tab otomatis berdasarkan status terbaru
    if (asset.checked) {
        // Jika di-check, pindah ke tab Sudah Dicek
        document.querySelector('.opname-tab[onclick*="checked-tab"]').click();
    } else {
        // Jika di-uncheck, pindah ke tab Belum Dicek
        document.querySelector('.opname-tab[onclick*="unchecked-tab"]').click();
    }
    
    // Render ulang list yang sesuai
    renderOpnameAssets();
}

// Fungsi untuk mengurutkan aset belum dicek
function sortUncheckedAssets(by) {
    const uncheckedAssets = assets.filter(asset => !asset.checked);
    
    if (by === 'name') {
        uncheckedAssets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (by === 'time') {
        uncheckedAssets.sort((a, b) => b.time - a.time);
    }
    
    // Update array utama dengan urutan baru
    let newAssets = assets.filter(asset => asset.checked);
    newAssets = [...uncheckedAssets, ...newAssets];
    assets = newAssets;
    
    saveToLocal();
    renderUncheckedAssets();
}

// Fungsi untuk mengurutkan aset sudah dicek
function sortCheckedAssets(by) {
    const checkedAssets = assets.filter(asset => asset.checked);
    
    if (by === 'name') {
        checkedAssets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (by === 'time') {
        checkedAssets.sort((a, b) => b.time - a.time);
    }
    
    // Update array utama dengan urutan baru
    let newAssets = assets.filter(asset => !asset.checked);
    newAssets = [...newAssets, ...checkedAssets];
    assets = newAssets;
    
    saveToLocal();
    renderCheckedAssets();
}

// Fungsi untuk menampilkan modal opname
function showOpnameModal(index) {
    const asset = assets[index];
    document.getElementById('opname-index').value = index;
    document.getElementById('opname-id').value = asset.id;
    document.getElementById('opname-name').value = asset.name;
    document.getElementById('opname-location').value = asset.location;
    document.getElementById('opname-category').value = asset.category;
    document.getElementById('opname-condition').value = asset.condition;
    document.getElementById('opname-status').value = asset.status;
    
    // Update tombol check/uncheck
    const toggleBtn = document.getElementById('toggle-check-btn');
    if (asset.checked) {
        toggleBtn.innerHTML = '<i class="fas fa-check-circle"></i> Tandai Belum Dicek';
        toggleBtn.className = 'btn-warning';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-check-circle"></i> Tandai Sudah Dicek';
        toggleBtn.className = 'btn-success';
    }
    
    document.getElementById('opname-modal').style.display = 'block';
}

// Fungsi untuk toggle check di modal opname (DIMODIFIKASI)
function toggleOpnameCheck() {
    const index = document.getElementById('opname-index').value;
    const asset = assets[index];
    asset.checked = !asset.checked;
    asset.time = new Date().getTime();
    
    saveToLocal();
    
    // Update tombol
    const toggleBtn = document.getElementById('toggle-check-btn');
    if (asset.checked) {
        toggleBtn.innerHTML = '<i class="fas fa-check-circle"></i> Tandai Belum Dicek';
        toggleBtn.className = 'btn-warning';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-check-circle"></i> Tandai Sudah Dicek';
        toggleBtn.className = 'btn-success';
    }
    
    // Tutup modal
    closeModal();
    
    // Pindah tab otomatis setelah modal tertutup
    setTimeout(() => {
        if (asset.checked) {
            document.querySelector('.opname-tab[onclick*="checked-tab"]').click();
        } else {
            document.querySelector('.opname-tab[onclick*="unchecked-tab"]').click();
        }
    }, 300);
    
    // Perbarui tampilan
    renderOpnameAssets();
}

// Fungsi untuk menyimpan edit di opname
function saveOpnameEdit() {
    const index = document.getElementById('opname-index').value;
    const asset = assets[index];
    
    asset.location = document.getElementById('opname-location').value.trim();
    asset.condition = document.getElementById('opname-condition').value;
    asset.status = document.getElementById('opname-status').value;
    asset.time = new Date().getTime();
    
    saveToLocal();
    renderOpnameAssets();
    closeModal();
}

// Fungsi untuk menangani scan manual
function handleManualScan() {
    const scanInput = document.getElementById('scan-input');
    const id = scanInput.value.trim();
    
    if (!id) return;
    
    const index = assets.findIndex(asset => asset.id === id);
    if (index !== -1) {
        // Tandai sebagai checked dan update waktu
        assets[index].checked = true;
        assets[index].time = new Date().getTime();
        saveToLocal();
        
        // Tampilkan modal edit
        showOpnameModal(index);
        
        // Reset input
        scanInput.value = '';
        
        // Pindah ke tab Sudah Dicek
        setTimeout(() => {
            document.querySelector('.opname-tab[onclick*="checked-tab"]').click();
        }, 300);
        
        // Render ulang
        renderOpnameAssets();
    } else {
        alert('Aset dengan ID tersebut tidak ditemukan!');
    }
}

// Fungsi untuk memulai scanner
function startScanner() {
    const video = document.getElementById('scanner');
    const canvas = document.getElementById('scan-canvas');
    const scannerControls = document.getElementById('scanner-controls');
    const scannerBtn = document.getElementById('scanner-btn');
    
    scannerBtn.style.display = 'none';
    scannerControls.style.display = 'flex';
    video.style.display = 'block';
    scannerActive = true;
    
    // Meminta akses kamera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(function(stream) {
            videoStream = stream;
            video.srcObject = stream;
            video.play();
            
            // Memulai proses scanning
            scanQRCode(video, canvas);
        })
        .catch(function(err) {
            console.error("Error accessing camera: ", err);
            alert('Tidak dapat mengakses kamera. Pastikan Anda memberikan izin.');
            stopScanner();
        });
}

// Fungsi untuk menghentikan scanner
function stopScanner() {
    const video = document.getElementById('scanner');
    const scannerControls = document.getElementById('scanner-controls');
    const scannerBtn = document.getElementById('scanner-btn');
    
    scannerActive = false;
    scannerBtn.style.display = 'inline-block';
    scannerControls.style.display = 'none';
    video.style.display = 'none';
    
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        videoStream = null;
    }
}

// Fungsi untuk memindai QR code
function scanQRCode(video, canvas) {
    const ctx = canvas.getContext('2d');
    
    function tick() {
        if (!scannerActive) return;
        
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
            });
            
            if (code) {
                // QR code ditemukan
                stopScanner();
                document.getElementById('scan-input').value = code.data;
                handleManualScan();
                return;
            }
        }
        
        requestAnimationFrame(tick);
    }
    
    tick();
}

// Event listener untuk input scan di tab opname
document.getElementById('scan-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleManualScan();
    }
});
