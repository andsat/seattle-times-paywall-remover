function removePayWall() {
	document.getElementById('userMessagingOverlay').remove();
	document.getElementsByName('body').classList.remove('noAcct', 'fixed');
}

window.onload = setTimeout(removePayWall(), 5000);