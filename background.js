function removeCookie() {
	chrome.cookies.remove({
		'url': 'http://seattletimes.com',
		'name': 'pmStories'
	});
}

window.setInterval(function(){
	removeCookie();
}, 5000);