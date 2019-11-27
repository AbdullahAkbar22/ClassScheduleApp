touchstartX = 0;
touchstartY = 0;
touchendX = 0;
touchendY = 0;



document.addEventListener('touchstart', function(event) {
	
    touchstartX = event.changedTouches[0].screenX;
	//alert("touchStart: " + touchstartX);
    touchstartY = event.changedTouches[0].screenY;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
	//alert("touchEnd: " + touchendX);
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false); 

function handleGesture() {
	documentWidth = window.innerWidth;
	triggerWidth = (documentWidth / 6);
	//alert("start: " + touchstartX + "and end: " + touchendX + " and " + triggerWidth);
    if (touchendX <= touchstartX && (Math.abs(touchstartX - touchendX) >= triggerWidth)) {
        nextDay();
    }
    
    if (touchendX >= touchstartX && (Math.abs(touchstartX - touchendX) >= triggerWidth)) {
        prevDay();
    }
    
    
}