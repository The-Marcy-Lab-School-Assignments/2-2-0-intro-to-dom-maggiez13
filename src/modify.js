const getMainHeadingText = () => {
  const mainHeading = document.querySelector("#main-heading");
  console.log(mainHeading.textContent);
};

const getAllMainText = () => {
  const mainText = document.querySelectorAll(".main-text");
  let newString = "";
  mainText.forEach((element, index) => {
    newString += element.textContent;
    if (index < mainText.length - 1) newString += ",";
  });
  console.log(newString);
};

// const getAllMainText = () => {
//   const mainText = document.querySelectorAll(".main-text");
//   let newString = "";
//   for (let i = 0; i < mainText.length; i++) {
//     newString += mainText[i].textContent;
//     if (i < mainText.length - 1) newString += ",";
//   }
//   console.log(newString);
// };

const setSubtitleText = () => {
  const h2 = document.querySelector("#subtitle");
  h2.textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const modifyClass= document.querySelector("#modify-classes");
  modifyClass.classList.remove("bad-class");
  modifyClass.classList.add("new-class");
};

const addH2 = () => {
  const newH2 = document.createElement("h2");
  newH2.id = "h2-test";
  newH2.textContent = "Another one!";
  document.body.appendChild(newH2);
};

const removeOldInfo = () => {
  const element = document.getElementById("old-info");
  element.remove();
};

const makeAlphabet = () => {
  let value = document.querySelector("#alphabet").dataset.numLetters;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < value; i++) {
    const li = document.createElement("li");
    li.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
    document.getElementById("alphabet").appendChild(li)
  }
};

const makeBio = () => {
  document.getElementById("my-bio").innerHTML = `
    <h2 id="bio-heading">About Me</h2>
    <p>My name is Zo and I like learn cool new things</p>
    <h3 id="hobby-heading">My Hobbies</h3>
    <ul>
      <li>Running</li>
      <li>Reading</li>
      <li>Writing</li>
    </ul>`
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main(); 
