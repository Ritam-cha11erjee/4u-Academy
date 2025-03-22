document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");
    let highlightVideos = document.querySelectorAll(".highlightVideos_video");
    let play_video = document.querySelector("#play_video");

    play_video.addEventListener("click", () => {

        if (video.paused) {
            video.play();
            play_video.style.display = "none";
        }
    });

    video.addEventListener("click", () => {

        if (!video.paused) {
            video.pause();
            play_video.style.display = "block";
        }
    });

    //function checkVideoVisibility() {
    //     const rect = video.getBoundingClientRect();
    //     const inViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    //     if (inViewport) {
    //         if (video.paused) {
    //             video.play();
    //             play_video.style.display = "none";
    //         }
    //     } else {
    //         if (!video.paused) {
    //             video.pause();
    //             play_video.style.display = "block";
    //         }
    //     }

    //     requestAnimationFrame(checkVideoVisibility);
    // }

    // requestAnimationFrame(checkVideoVisibility);


    highlightVideos.forEach(highlightVideo => {
        highlightVideo.addEventListener("mouseover", () => {
            highlightVideo.play();
            console.log("hovered");
            
        });
    
        highlightVideo.addEventListener("mouseleave", () => {
            highlightVideo.pause();
        });
    });
    



 });


document.querySelectorAll('.enroll-Btn').forEach(element => element.addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex'; // Show the popup
  }));

    // Close the popup when the button is clicked
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
      });