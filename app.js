/* sticky-header listener */
/* source: https://remysharp.com/2017/06/29/smooth-scroll-with-sticky-nav */

var $stickyHeader = document.getElementById('sticky-header');
var boundary = $stickyHeader.offsetHeight;

window.onscroll = function (event) {
  requestAnimationFrame(checkSticky);
};

function checkSticky() {
  var y = window.scrollY + 2;

  var isSticky = document.body.classList.contains('sticky-parent');
  if (y > boundary) {
    if (!isSticky)
      document.body.classList.add('sticky-parent');
  }
  else if (isSticky)
    document.body.classList.remove('sticky-parent');
}
