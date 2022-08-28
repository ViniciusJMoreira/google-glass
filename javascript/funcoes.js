function mudaLinkin(foto) {
	document.querySelector("#linkin").src = foto;
}

function mudaInst(foto) {
	document.querySelector("#inst").src = foto;
}

function mudaTwt(foto) {
	document.querySelector("#twt").src = foto;
}

const scrolltotop = () => {
	window.scroll ({
		top: 0,
		behavior: 'smooth',
	});
};

document.querySelector('scroll').onclick = scrolltotop;