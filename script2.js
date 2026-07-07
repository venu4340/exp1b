function selectElements() {
  // Select element by ID
  let titlejs = document.getElementById("title");
  if (titlejs) {
    titlejs.style.color = "blue";
  }

  // Select first element by class
  let messagejs = document.getElementsByClassName("message")[0];
  if (messagejs) {
    messagejs.style.color = "green";
  }

  // Select second <p> element
  let paragraphs = document.getElementsByTagName("p");
  if (paragraphs.length > 1) {
    paragraphs[1].style.backgroundColor = "yellow";
  }
}

// Run automatically when the page loads
window.onload = selectElements;
