/** FEEDBACK: I love the use of functions here! Could we have made it DRYer? 
 * We also typically want to use our runner function so make sure you include that in the future!
 * Great job getting all test cases to pass!
 */
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
