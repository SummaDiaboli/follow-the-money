document.getElementById("main").onscroll = function() {
    scrollStick();
};

var header = document.getElementById("sideTab");
var sticky = getOffset(header).top;

function scrollStick() {
  if (document.getElementById("main").scrollTop > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }