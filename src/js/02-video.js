import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

playerSetCurrentTime();

function playerSetCurrentTime() {
  if (localStorage.getItem(STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
}

function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
