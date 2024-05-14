const addMainHeading = () => {
  const header = document.createElement("h1");
  header.id = "main-heading";
  header.textContent = "Hello World!";
  document.body.appendChild(header);
}

const addMainText = () => {
  const paragraph = document.createElement("p");
  paragraph.id = "main-text";
  paragraph.classList.add("boring-text");
  paragraph.textContent = "Look, I'm some text!";
  document.body.appendChild(paragraph);
};

addMainHeading();
addMainText();
