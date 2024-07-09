function downloadFile(filePath) {
	var link = document.createElement("a");
	link.href = filePath;
	link.download = filePath.substr(filePath.lastIndexOf("/") + 1);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}
