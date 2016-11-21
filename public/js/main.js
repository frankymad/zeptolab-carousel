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