// working off of my simple-api-two and plugging in the new info and then deleted what's not needed reverse engineering for this project.
// https://github.com/sameerkumar18/corporate-bs-generator-api
//Call
const descriptionDiv = document.querySelector('.description');
const getOfficeButton = document.querySelector('button');
getOfficeButton.addEventListener('click', getOffice);
const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', reset);

//API's Used
const url = 'https://corporatebs-generator.sameerkumar.website/';

//Function
async function getOffice() {
  const options = {
    method: "GET",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    descriptionDiv.innerText = "";
    const corpBsCard = document.createElement("div");
    const corpBsText = document.createElement("h2");
    corpBsText.innerText = result.phrase;
    corpBsCard.appendChild(corpBsText);
    descriptionDiv.appendChild(corpBsCard);

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
function reset() {
    descriptionDiv.innerText = '';
}






//SOURCES
//Worked on with Maureen Zitouni RC 2025B and used simple api two as template to plug in relevant info and delete what's not needed
//referenced @Leon Noel Lecture, @mdn @dcode https://www.youtube.com/watch?v=X6MFUagtKiQ