document.addEventListener('DOMContentLoaded', function () {
    const kaBtn = document.getElementById('ka-btn');
    const golomBtn = document.getElementById('golom-btn');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const alertOkBtn = document.getElementById('alert-ok-btn');

    // Function to show custom alert
    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.classList.remove('hidden');
    }

    // Close alert when clicking OK button
    alertOkBtn.addEventListener('click', function () {
        customAlert.classList.add('hidden');
    });

    // Button actions
    if (kaBtn) {
        kaBtn.addEventListener('click', function () {
            showAlert('🎉 Bereh, Lanjot ngoding ju lom!');
        });
    }

    if (golomBtn) {
        golomBtn.addEventListener('click', function () {
            showAlert('😧 Oman, Boeh Jak Pajoeh Bu Keudeh!');
        });
    }
});
