// Fungsi untuk menambahkan aset baru
function addAsset() {
    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const location = document.getElementById('location').value.trim();
    const category = document.getElementById('category').value.trim();
    const condition = document.getElementById('condition').value;
    const status = document.getElementById('status').value;
    
    // Cek apakah ID sudah ada
    if (assets.some(asset => asset.id === id)) {
        alert('ID aset sudah ada!');
        return;
    }
    
    const newAsset = {
        id,
        name,
        location,
        category,
        condition,
        status,
        time: new Date().getTime(),
        checked: false
    };
    
    assets.push(newAsset);
    saveToLocal();
    renderAssets();
    
    // Reset form
    document.getElementById('asset-form').reset();
}

// Fungsi untuk menampilkan aset dalam bentuk card
function renderAssets() {
    const assetsList = document.getElementById('assets-list');
    assetsList.innerHTML = '';
    
    if (assets.length === 0) {
        assetsList.innerHTML = '<p>Tidak ada aset yang tersedia.</p>';
        return;
    }
    
    assets.forEach((asset, index) => {
        const assetCard = document.createElement('div');
        assetCard.className = 'asset-card';
        assetCard.innerHTML = `
            <h3>${asset.name}</h3>
            <p>${asset.category} • ${asset.condition} • ${asset.status}  • ${asset.location}</p>
            <p class="time">${new Date(asset.time).toLocaleString()}</p>
            <i class="fas fa-check-circle check-icon ${asset.checked ? (asset.condition === 'Baik' ? 'checked-good' : 'checked-warning') : ''}" 
               onclick="toggleAssetCheck(${index}, event)"></i>
        `;
        
        assetCard.addEventListener('click', function() {
            showEditModal(index);
        });
        
        assetsList.appendChild(assetCard);
    });
}

// Fungsi untuk menampilkan modal edit
function showEditModal(index) {
    const asset = assets[index];
    document.getElementById('edit-index').value = index;
    document.getElementById('edit-id').value = asset.id;
    document.getElementById('edit-name').value = asset.name;
    document.getElementById('edit-location').value = asset.location;
    document.getElementById('edit-category').value = asset.category;
    document.getElementById('edit-condition').value = asset.condition;
    document.getElementById('edit-status').value = asset.status;
    
    // Generate QR Code
    const qrContainer = document.getElementById('qr-container');
    qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(asset.id)}" alt="QR Code">`;
    
    document.getElementById('edit-modal').style.display = 'block';
}

// Fungsi untuk menyimpan edit
function saveEdit() {
    const index = document.getElementById('edit-index').value;
    const asset = assets[index];
    
    asset.name = document.getElementById('edit-name').value.trim();
    asset.location = document.getElementById('edit-location').value.trim();
    asset.category = document.getElementById('edit-category').value.trim();
    asset.condition = document.getElementById('edit-condition').value;
    asset.status = document.getElementById('edit-status').value;
    asset.time = new Date().getTime();
    
    saveToLocal();
    renderAssets();
    closeModal();
}

// Fungsi untuk menghapus aset
function deleteAsset() {
    const index = document.getElementById('edit-index').value;
    if (confirm('Apakah Anda yakin ingin menghapus aset ini?')) {
        assets.splice(index, 1);
        saveToLocal();
        renderAssets();
        closeModal();
    }
}

// Fungsi untuk download barcode (DIMODIFIKASI)
function downloadBarcode() {
    const index = document.getElementById('edit-index').value;
    const asset = assets[index];
    
    // Buat container untuk QR Code + Nama Barang
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.padding = '20px';
    container.style.backgroundColor = 'white';
    
    // Tambahkan QR Code
    const qrImg = document.createElement('img');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(asset.id)}`;
    qrImg.style.marginBottom = '10px';
    container.appendChild(qrImg);
    
    // Tambahkan Nama Barang
    const nameText = document.createElement('div');
    nameText.textContent = asset.name;
    nameText.style.fontWeight = 'bold';
    nameText.style.fontSize = '16px';
    nameText.style.marginTop = '10px';
    container.appendChild(nameText);
    
    // Tambahkan ID Barang
    const idText = document.createElement('div');
    idText.textContent = `ID: ${asset.id}`;
    idText.style.fontSize = '14px';
    idText.style.marginTop = '5px';
    container.appendChild(idText);
    
    // Sembunyikan sementara di dokumen
    container.style.position = 'fixed';
    container.style.left = '-9999px';
    document.body.appendChild(container);
    
    // Gunakan html2canvas untuk menangkap sebagai gambar
    html2canvas(container).then(canvas => {
        // Konversi canvas ke URL gambar
        const image = canvas.toDataURL('image/png');
        
        // Buat link download
        const link = document.createElement('a');
        link.href = image;
        link.download = `barcode-${asset.id}.png`;
        link.click();
        
        // Hapus container sementara
        document.body.removeChild(container);
    });
}
// Fungsi untuk menangani upload CSV
function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        const lines = contents.split('\n');
        let addedCount = 0;
        
        for (let i = 1; i < lines.length; i++) { // Skip header
            const line = lines[i].trim();
            if (!line) continue;
            
            const [id, name, location, category, condition, status] = line.split(',');
            
            if (!id || !name || !location || !category || !condition || !status) {
                console.warn(`Baris ${i} tidak valid: ${line}`);
                continue;
            }
            
            // Cek apakah ID sudah ada
            if (assets.some(asset => asset.id === id.trim())) {
                console.warn(`ID ${id} sudah ada, dilewati`);
                continue;
            }
            
            const newAsset = {
                id: id.trim(),
                name: name.trim(),
                location: location.trim(),
                category: category.trim(),
                condition: condition.trim(),
                status: status.trim(),
                time: new Date().getTime(),
                checked: false
            };
            
            assets.push(newAsset);
            addedCount++;
        }
        
        saveToLocal();
        renderAssets();
        alert(`Berhasil menambahkan ${addedCount} aset dari CSV`);
        
        // Reset input file
        event.target.value = '';
    };
    
    reader.readAsText(file);
}

// Event listener untuk form input aset
document.getElementById('asset-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addAsset();
});

// Event listener untuk upload CSV
document.getElementById('csv-upload').addEventListener('change', handleCSVUpload);
