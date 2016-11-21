/**
 * Created by frankymad on 21.11.16.
*/
var currentItem = 0;
var playing = true;
var interval = setInterval(nextItem,2500);

function nextItem() {
    items[currentItem].className = 'item prev';
    currentItem = (currentItem+1)%items.length;
    items[currentItem].className = 'item show';
    items[(currentItem+1)%items.length].className = 'item next';
    if (currentItem == 0)
        {items[items.length-2].className = 'item';}
    else if (currentItem == 1)
        {items[items.length-1].className = 'item';}
    else
        {items[(currentItem-2)%items.length].className = 'item';}
}

function pauseSlideshow() {
    playing = false;
    clearInterval(interval);
}

function playSlideshow() {
    playing = true;
    interval = setInterval(nextItem,2500);
}

function playPause() {
    if (playing) {pauseSlideshow();}
    else {playSlideshow();}
}
