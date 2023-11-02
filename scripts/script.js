'use strict'

document.querySelectorAll('.like').forEach( (element) => {
	element.addEventListener('click', (event) => {
		event.preventDefault();
		const target = event.target;
		const src = target.getAttribute('src');
		if (src === '../images/like.svg') {
			target.setAttribute('src', '../images/liked.svg');
		} else {
			target.setAttribute('src', '../images/like.svg');
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('header').classList.toggle('open')
	})
})