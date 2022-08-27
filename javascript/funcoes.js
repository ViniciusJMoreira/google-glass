function mudaFoto() {
	document.querySelector(".cabecalho").opacity = (.5);
}

const scrolltotop = () => {
	window.scroll ({
		top: 0,
		behavior: 'smooth',
	});
};

document.querySelector('scroll').onclick = scrolltotop;