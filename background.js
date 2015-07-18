chrome.contextMenus.create({
	title:"Image Hide", 
	contexts:[ "image" ], 
	id:"image-hide"});

chrome.contextMenus.onClicked.addListener(function(info, tab){
	chrome.tabs.sendMessage(tab.id, 'image-hide');
});
