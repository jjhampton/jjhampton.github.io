/* sticky-header listener */
/* source: https://remysharp.com/2017/06/29/smooth-scroll-with-sticky-nav */

const $stickyHeader = document.getElementById('sticky-header');

window.onscroll = function (event) {
  requestAnimationFrame(debounce(checkSticky, 25));
};

function checkSticky() {
  const y = window.scrollY + 2;
  const boundary = $stickyHeader.offsetHeight;

  const isSticky = document.body.classList.contains('sticky-parent');
  if (y > boundary) {
    if (!isSticky)
      document.body.classList.add('sticky-parent');
  }
  else if (isSticky)
    document.body.classList.remove('sticky-parent');
}

function debounce(fn, delay) {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			fn.apply(context, args);
		};
		const callNow = !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, delay);
		if (callNow) fn.apply(context, args);
	};
};

/* toolchain button listener */

const $toolchain = document.getElementById('toolchain');
const $buttons = document.querySelectorAll('button');
const $cube = document.getElementById('cube');

const buttonIds = [
	'button-javascript',
	'button-frontend',
	'button-backend',
	'button-css',
	'button-build',
	'button-package'
];

const cubeSelectionClasses = [
	'cube--frontSelected',
	'cube--backSelected',
	'cube--leftSelected',
	'cube--rightSelected',
	'cube--topSelected',
	'cube--bottomSelected'
];

$toolchain.addEventListener('click', function(event) {
	if (buttonIds.indexOf(event.target.id) < 0) {
		event.preventDefault();
		return false;
	}
	toolchainButtonClicked(event.target);
})

function toolchainButtonClicked($button) {
	resetButtons();
	$button.classList.add('button--selected');

	resetCube();
	switch($button.id) {
		case 'button-frontend':			
			$cube.classList.add('cube--backSelected');
			break;
		case 'button-backend':			
			$cube.classList.add('cube--leftSelected');
			break;			
		case 'button-css':			
			$cube.classList.add('cube--rightSelected');
			break;			
		case 'button-build':			
			$cube.classList.add('cube--topSelected');
			break;			
		case 'button-package':			
			$cube.classList.add('cube--bottomSelected');
			break;			
		case 'button-javascript':			
		default:
			$cube.classList.add('cube--frontSelected');
	}
}

function resetButtons() {
	$buttons.forEach(function(button) {
		button.classList.remove('button--selected');
	})
}

function resetCube() {
	$cube.classList.remove(...cubeSelectionClasses);
}