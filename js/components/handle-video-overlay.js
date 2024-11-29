export default () => {
 // Select the video player element
 const videoPlayers = document.querySelectorAll('default-player');
 // Add an event listener for the "video-play" event
 videoPlayers.forEach((videoPlayer) => {
    videoPlayer.addEventListener('video-play', (event) => {
        const target = event.target; 
        if(!target) return;
        const parent = target.closest('[data-video-parent]');
        if(!parent) return;
        const overlay = parent.querySelector('[data-overlay]')
        if(!overlay) return;
        if(!overlay.classList.contains('overlay--hidden')) {
            overlay.classList.add('overlay--hidden')
        }
    });
   
    // Add an event listener for the "video-pause" event
    videoPlayer.addEventListener('video-pause', (event) => {
        const target = event.target; 
        if(!target) return;
        const parent = target.closest('[data-video-parent]');
        if(!parent) return;
        const overlay = parent.querySelector('[data-overlay]')
        if(!overlay) return;
        if(overlay.classList.contains('overlay--hidden')) {
            overlay.classList.remove('overlay--hidden');
        }
    });
 })

}

