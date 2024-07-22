function formatBytes(a, b = 2) {
	if (!+a) return "0 Bytes";
	const c = 0 > b ? 0 : b,
		d = Math.floor(Math.log(a) / Math.log(1024));
	return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]}`;
}

const extractURL = inputText => inputText.match(/(https?|http):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]/ig);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = urlParams.get("url");
const inputUrl = document.getElementById('url');
const statusDiv = document.getElementById("status");

const status = {
	"loading": function () {
		statusDiv.innerHTML = '<div class="loader"></div>';
	},
	"success": function (fileSize) {
		statusDiv.innerHTML = `Your file has been downloaded successfully!!`;
	},
	"error": function (msg) {
		statusDiv.innerHTML = msg;
	}
}

function processUrl(x) {
	if (!url) return;
	inputUrl.value = extractURL(url);
	submit(x);
}
processUrl(url);

document.forms[0].addEventListener("submit", event => {
	event.preventDefault();
	submit(inputUrl.value);
});

function submit(x) {
	if (!x) return;
	var api = "https://co.wuk.sh/api/json";
	var cURL = extractURL(x);
	var url = encodeURIComponent(cURL);

	const requestBody = {
		url: url,
		filenamePattern: 'pretty'
	};

	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(requestBody),
	};
	status.loading();

	fetch(api, requestOptions)
		.then(response => {
			if (!response.ok) {
				status.error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			console.log('Response data:', data);
			if (data.status == 'error') {
				status.error(data.text);
				return;
			} else if (data.status == 'redirect') {
				window.open(data.url, '_blank');
				status.success('Redirected');
				return;
			}

			const fileUrl = data.url;
			// Fetch the file size
			fetch(fileUrl)
				.then(response => {
					if (!response.ok) {
						status.error('File download failed');
					}
					return response.headers.get('content-length');
				})
				.then(fileSize => {
					status.success(formatBytes(fileSize));

					// create a download link
					const downloadLink = document.createElement('a');
					downloadLink.href = fileUrl;
					downloadLink.download = 'file';
					downloadLink.click();
				})
				.catch(error => {
					status.error('Error downloading file:', error);
				});
		})
		.catch(error => {
			status.error(error);
		});
}
