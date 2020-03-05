const pages = {
  home: "/"
};

const logo = document.getElementsByClassName("logo")[0];
const input = document.getElementById("path_input");

logo.onclick = () => {
  input.focus();
  input.select();
};

// Prevent backspace browser navigation
document.onkeydown = function(event) {
  if (!event) { // This will happen in IE
    event = window.event;
  }

  if (
    event.keyCode == 8 &&
    (event.target || event.srcElement).tagName != "TEXTAREA" &&
    (event.target || event.srcElement).tagName != "INPUT"
  ) {
    if (navigator.userAgent.toLowerCase().indexOf("msie") == -1) {
      event.stopPropagation();
    } else {
      event.returnValue = false;
    }

    return false;
  }
};

input.onkeypress = (event) => {
  if (event.keyCode == 13 || event.which == 13) {
    console.log(pages)
    const page = pages[input.value] ? pages[input.value] : input.value
    console.log(page)
    window.location.href = `/${page}`;
  }
};
