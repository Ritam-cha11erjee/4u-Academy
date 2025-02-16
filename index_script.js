document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    function checkVideoVisibility() {
        const rect = video.getBoundingClientRect();
        const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (inViewport) {
            if (video.paused) {
                video.play();
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }

        requestAnimationFrame(checkVideoVisibility);
    }

    requestAnimationFrame(checkVideoVisibility);
});


document.querySelectorAll('.enroll-Btn').forEach(element => element.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex'; // Show the popup
  }));

    // Close the popup when the button is clicked
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
      });