/* sticky-header listener */
/* source: https://remysharp.com/2017/06/29/smooth-scroll-with-sticky-nav */

var $stickyHeader = document.getElementById('sticky-header');

window.onscroll = function (event) {
  requestAnimationFrame(debounce(checkSticky, 25));
};

function checkSticky() {
  var y = window.scrollY + 2;
  var boundary = $stickyHeader.offsetHeight;

  var isSticky = document.body.classList.contains('sticky-parent');
  if (y > boundary) {
    if (!isSticky)
      document.body.classList.add('sticky-parent');
  }
  else if (isSticky)
    document.body.classList.remove('sticky-parent');
}

function debounce(fn, delay) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			fn.apply(context, args);
		};
		var callNow = !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, delay);
		if (callNow) fn.apply(context, args);
	};
};