gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const IMG_HEIGHT = () => {
	const CONT = document.getElementById('cont')
	const IMG = document.getElementById('img')
	if (CONT && IMG) IMG.style.height = CONT.clientHeight + 'px'
}
window.addEventListener('resize', ev => {
	IMG_HEIGHT()
} )
IMG_HEIGHT()

const FOOTER_YEAR = document.getElementById('footer-year')
if (FOOTER_YEAR) FOOTER_YEAR.innerText = `Kazan ${new Date().getFullYear()}`

function initAnimations() {
	gsap.to('.logo-box', {
		delay: 1,
		duration: 2,
		opacity: 1,
		y: 25,
		ease: 'power2.out'
	});
	gsap.from('.logo__right', {
		delay: 2,
		duration: 5,
		x: -25,
		ease: 'back.out',
	});
	gsap.to('.main-title', {
		delay: 2.1,
		duration: 1,
		opacity: 1,
		y: 25,
		ease: 'power2.out'
	});
	gsap.to('.main-subtitle', {
		delay: 2.2,
		duration: 1.2,
		opacity: 1,
		y: 25,
		ease: 'power2.out'
	});
	gsap.to('.hero', {
		duration: 2,
		opacity: 1,
		ease: 'power3.inOut'
	});
	gsap.to('.color__wave', {
		delay: 0.5,
		duration: 2,
		opacity: 1,
		width: window.innerWidth < 376 ? '165vw' : '100vw',
		maxWidth: window.innerWidth < 376 ? '165vw' : '100vw',
		ease: 'power3.inOut'
	});
	console.log('window.innerHeight ', window.innerWidth)
}

document.addEventListener('DOMContentLoaded', initAnimations);



if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})
}
