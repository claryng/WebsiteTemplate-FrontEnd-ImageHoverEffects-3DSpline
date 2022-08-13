// Hover effect
var myAnimation = new hoverEffect({
	parent: document.querySelector('.wrapper'),
	intensity: 0.3,
	image1: 'content1-pic1.jpeg',
	image2: 'content1-pic2.jpeg',
	displacementImage: 'disimg.jpeg'
});

// Vanilla Tilt Effect
VanillaTilt.init(document.querySelectorAll(".box"), {
	max: 25,
	speed: 400
});