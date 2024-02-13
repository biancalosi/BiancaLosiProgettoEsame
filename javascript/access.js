var prevScrollpos = window.pageYOffset;
				window.onscroll = function() {
  				var currentScrollPos = window.pageYOffset;
  				if (prevScrollpos > currentScrollPos) {
    			document.getElementById("navbar").style.top = "0";
  				} else {
    			document.getElementById("navbar").style.top = "-100px";
				}
				prevScrollpos = currentScrollPos;
				}

/* accordion */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
