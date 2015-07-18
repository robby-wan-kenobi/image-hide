var target = null;
document.addEventListener('mousedown', function(event){
	target = event.target;
}, true);

chrome.runtime.onMessage.addListener( function(message, sender ) {
	$(target).addClass("invisible");
});
