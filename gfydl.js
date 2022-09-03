function getGfyUrl() {
	const sources = document.querySelectorAll('.video.media source');
	const url = Array.from(sources)
		.map(source => source.src)
		.filter(url => url.startsWith('https://giant.') || url.startsWith('https://zippy.'))
	[0];
	return url;
}
function insertDlButton() {
	const btn = document.getElementById('gfydl--button');
	if (!btn) {
		const downloadBtn = document.createElement('a');
		downloadBtn.className = 'outlined-button like-button'; // The like class applies the correct style.
		downloadBtn.id = 'gfydl--button';
		downloadBtn.style.fontSize = '8pt';
		downloadBtn.innerText = 'Download';
		downloadBtn.target = '_blank';
		downloadBtn.href = getGfyUrl();
		const likeBtn = document.querySelector('.gif-actions .like-button');
		likeBtn.insertAdjacentElement('beforebegin', downloadBtn);
	} else {
		btn.href = getGfyUrl();
	}
}

// The 'locationchange' event doesn't fire. 
let lastURL = location.href;
setInterval(() => {
	if (lastURL !== location.href) {
		insertDlButton();
		lastURL = location.href;
	}
}, 100);
insertDlButton();