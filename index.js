var body = document.body;
var messageEl = document.createElement('div');
var re = /https:\/\/www.google.com\/maps\/\S*data=\S*!1s(\S+)!2e/;
var result = re.exec(window.location.href);
var message = "PanoID: ";
if (result) {
	message = message + result[1];
} else {
	message = "PanoID not found."
}

messageEl.innerHTML = message;
body.appendChild(messageEl);
messageEl.style.zIndex = 2147483647;
messageEl.style.position = "fixed";
messageEl.style.top = "0";
messageEl.style.right = "0";
messageEl.style.fontFamily = "Arial, sans-serif";
messageEl.style.fontWeight = "bold";
messageEl.style.fontSize = "24px";
messageEl.style.backgroundColor = "#f4ff60";
messageEl.style.color = '#000000';
messageEl.style.padding = "20px 20px 20px 20px";
console.log(message);