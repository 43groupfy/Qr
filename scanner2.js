const scannerDiv = document.querySelector(".scanner");

const camera = scannerDiv.querySelector("h1 .fa-camera");
const stopCam = scannerDiv.querySelector("h1 .fa-circle-stop");
const switchCameraBtn = scannerDiv.querySelector(".switch-camera"); // Tombol untuk mengganti kamera

const form = scannerDiv.querySelector(".scanner-form");
const fileInput = form.querySelector("input");
const p = form.querySelector("p");
const img = form.querySelector("img");
const video = form.querySelector("video");
const content = scannerDiv.querySelector(".content");

const textarea = scannerDiv.querySelector(".scanner-details textarea");
const copyBtn = scannerDiv.querySelector(".scanner-details .copy");
const closeBtn = scannerDiv.querySelector(".scanner-details .close");

let scanner;
let selectedCamera = 0; // Indeks kamera yang sedang digunakan (0 untuk kamera depan, 1 untuk kamera belakang)

// Input File
form.addEventListener("click", () => fileInput.click());

// Scan QR Code Image
fileInput.addEventListener("change", e => {
  let file = e.target.files[0];
  if (!file) return;
  fetchRequest(file);
});

function fetchRequest(file) {
  let formData = new FormData();
  formData.append("file", file);

  p.innerText = "Scanning QR Code...";

  fetch(`https://api.qrserver.com/v1/read-qr-code/`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(result => {
      let text = result[0].symbol[0].data;

      if (!text) return (p.innerText = "Couldn't Scan QR Code");

      scannerDiv.classList.add("active");
      form.classList.add("active-img");

      img.src = URL.createObjectURL(file);
      textarea.innerText = text;
    });
}

// Scan QR Code Camera
camera.addEventListener("click", () => {
  camera.style.display = "none";
  form.classList.add("pointerEvents");
  p.innerText = "Scanning QR Code...";

  scanner = new Instascan.Scanner({ video: video });

  Instascan.Camera.getCameras()
    .then(cameras => {
      if (cameras.length > 0) {
        selectedCamera = 0; // Awalnya gunakan kamera depan (indeks 0)
        switchCameraBtn.style.display = "inline-block"; // Tampilkan tombol untuk mengganti kamera
        startScannerWithCamera(cameras[selectedCamera]);
      } else {
        console.log("No Cameras Found");
      }
    })
    .catch(err => console.error(err));

  // addListener not addEventListener
  scanner.addListener("scan", c => {
    scannerDiv.classList.add("active");
    textarea.innerText = c;
  });
});

// Switch Camera
switchCameraBtn.addEventListener("click", () => {
  if (scanner) {
    scanner.stop();
    selectedCamera = (selectedCamera + 1) % 2; // Ganti antara 0 (depan) dan 1 (belakang)
    startScannerWithCamera(cameras[selectedCamera]);
  }
});

// Fungsi untuk memulai pemindaian dengan kamera yang dipilih
function startScannerWithCamera(cameraInfo) {
  scanner.start(cameraInfo).then(() => {
    form.classList.add("active-video");
    stopCam.style.display = "inline-block";
  });
}

// Copy
copyBtn.addEventListener("click", () => {
  let text = textarea.textContent;
  navigator.clipboard.writeText(text);
});

// Close
closeBtn.addEventListener("click", () => stopScan());
stopCam.addEventListener("click", () => stopScan());

// Stop Scan
function stopScan() {
  p.innerText = "Upload QR Code to Scan";

  camera.style.display = "inline-block";
  stopCam.style.display = "none";

  form.classList.remove("active-video", "active-img", "pointerEvents");
  scannerDiv.classList.remove("active");

  if (scanner) scanner.stop();
}
