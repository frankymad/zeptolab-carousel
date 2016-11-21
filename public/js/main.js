/**
 * Created by frankymad on 21.11.16.
*/
var currentItem = 0;
var interval = setInterval(nextItem,2500);

function nextItem() {
    items[currentItem].className = 'item';
    currentItem = (currentItem+1)%items.length;
    items[currentItem].className = 'item show';
}

var playing = true;

function pauseSlideshow() {
    playing = false;
    clearInterval(interval);
}

function playSlideshow() {
    playing = true;
    interval = setInterval(nextItem,2000);
}

function playPause() {
    if (playing) {pauseSlideshow();}
    else {playSlideshow();}
}
