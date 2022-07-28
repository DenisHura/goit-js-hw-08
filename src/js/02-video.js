import throttle from 'lodash.throttle';
import Player from '@vimeo/player';



const player = new Player('vimeo-player');
const SavedcurrentTime = localStorage.getItem("videoplayer-current-time");

player.on('timeupdate', throttle(onSaveCurrentTime, 1000));

function onSaveCurrentTime(CurrentTime) {
    localStorage.setItem("videoplayer-current-time", CurrentTime.seconds);
   }


player.setCurrentTime(SavedcurrentTime).then(function () {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          
            break;

        default:
            
            break;
    }
});