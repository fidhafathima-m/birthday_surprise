document.getElementById("clickMeButton").addEventListener("click", function() {
    // Using SweetAlert2 for the pop-up
    Swal.fire({
        title: 'Congratulations on Your Journey!',
        html: `
             <img src="News_report.jpg" alt="News Report Photo" class="rounded-circle" style="max-width: 400px; height: auto;">
            <h4>You’re doing amazing, and I believe in you every step of the way.</h4>
            <p>Keep reaching for the stars! The best is yet to come.</p>
        `,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Friend\'s Photo',
        confirmButtonText: 'Thanks!',
        background: '#f8e8d5', // Light cream background for modal
        customClass: {
            popup: 'custom-swal-popup'
        },
        willOpen: () => {
            // Trigger confetti effect before the modal opens
            confetti({
                particleCount: 500,
                spread: 80,
                origin: { x: 0.5, y: 0.1 }, // Confetti will burst from the top of the screen
                startVelocity: 50, // Make it start faster
                angle: 90, // Make it shoot straight down
                zIndex: 9999
            });
        }
    });
});
