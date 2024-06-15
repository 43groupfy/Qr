document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let target = 33; // ganti null jika ingin menghilangkan value 33

    const counterElement = document.getElementById('counter');
    const minusButton = document.getElementById('minus-button');
    const plusButton = document.getElementById('plus-button');
    const restartButton = document.getElementById('restart-button');
    const enableMinusCheckbox = document.getElementById('enable-minus');
    const enableTargetCheckbox = document.getElementById('enable-target');
    const targetValueInput = document.getElementById('target-value');
    const buttonsContainer = document.querySelector('.buttons');
    const restartOverlay = document.getElementById('restart-overlay');

    const updateCounter = () => {
        counterElement.textContent = count;
        if (target !== null && count >= target) {
            navigator.vibrate(200);
            disableButtons();
            showRestartOverlay();
        }
    };

    const disableButtons = () => {
        plusButton.disabled = true;
        minusButton.disabled = true;
    };

    const enableButtons = () => {
        plusButton.disabled = false;
        minusButton.disabled = !enableMinusCheckbox.checked;
        minusButton.style.display = enableMinusCheckbox.checked ? 'inline-block' : 'none';
        buttonsContainer.classList.toggle('single-button', !enableMinusCheckbox.checked);
    };

    const showRestartOverlay = () => {
        restartOverlay.style.display = 'flex';
    };

    const hideRestartOverlay = () => {
        restartOverlay.style.display = 'none';
    };

    plusButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    minusButton.addEventListener('click', () => {
        count--;
        updateCounter();
    });

    restartButton.addEventListener('click', () => {
        count = 0;
        updateCounter();
        enableButtons();
        hideRestartOverlay();
    });

    enableMinusCheckbox.addEventListener('change', (event) => {
        enableButtons();
    });

    enableTargetCheckbox.addEventListener('change', (event) => {
        targetValueInput.disabled = !event.target.checked;
        if (!event.target.checked) {
            target = null;
        } else {
            target = parseInt(targetValueInput.value, 10);
        }
    });

    targetValueInput.addEventListener('input', (event) => {
        target = parseInt(event.target.value, 10);
    });

    // Set enableMinusCheckbox menjadi tidak tercentang saat halaman dimuat
    enableMinusCheckbox.checked = false;
    // Panggil enableButtons() untuk memastikan status tombol minus sesuai
    enableButtons();

    // Initial UI setup
    updateCounter();
    targetValueInput.disabled = !enableTargetCheckbox.checked;
    buttonsContainer.classList.toggle('single-button', !enableMinusCheckbox.checked);
});