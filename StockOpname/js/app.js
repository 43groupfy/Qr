// Data aset
let assets = [];

// Fungsi untuk menyimpan ke localStorage
function saveToLocal() {
    localStorage.setItem('fixedAssets', JSON.stringify(assets));
}

// Fungsi untuk memuat dari localStorage
function loadFromLocal() {
    const saved = localStorage.getItem('fixedAssets');
    if (saved) {
        assets = JSON.parse(saved);
    }
}

// Fungsi untuk membuka tab
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
    
    if (tabName === 'opname-tab') {
        renderOpnameAssets();
    }
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
    document.getElementById('opname-modal').style.display = 'none';
}

// Fungsi untuk mengurutkan aset
function sortAssets(by, isOpname = false) {
    if (by === 'name') {
        assets.sort((a, b) => a.name.localeCompare(b.name));
    } else if (by === 'time') {
        assets.sort((a, b) => b.time - a.time);
    }
    
    saveToLocal();
    
    if (isOpname) {
        renderOpnameAssets();
    } else {
        renderAssets();
    }
}

// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocal();
    renderAssets();
});
