//figure out how to loop through the elements. with Array to add things from the 
//toyArray.keys or Object Keys since I am really looping through keys and my time.


let addToy = false;
let toyCollection = document.querySelector('#toy-collection');
let aToy = null;
let div = null;
let title = null;
let photo= null;
let para= null;
let button= null;
let showToy = null;

function addToDOM (upper) {

  toy = document.createElement('div')
  toy.class = "toy-collection"  ///???
  console.log(toy.class)
  title = document.createElement('h2')
  photo = document.createElement('img')
  para = document.createElement('p')
  button = document.createElement('buttton')
  upper.append(title, photo, para, button)

}

document.addEventListener("DOMContentLoaded", () => {

  //x get all items

  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});


const id = " "
fetch(`http://localhost:3000/toys${id}`)
  .then(response => response.json())
  .then( toyArray => 
    
    
    {
      console.log(toyArray)
      showToy = document.getElementById("toy-collection")// get one toy
    console.log(showToy)
    title = document.createElement('h2')
    // title.innerText = `${toyArray[0].name}`
    
    //Object.keys.forEach (key => (topArray.title = Object.keys ))

    photo = document.createElement('img')
    para = document.createElement('p')
    button = document.createElement('buttton')
    

    showToy.append(title, photo, para, button)
    
    })




  // .then(toyArray => 
  //   {
  //     const showToy = document.createElement('div')
  //     showToy.classList.add("toy-collection")
  //     toyCollection.append(showToy);
  //     const toySetup = function addToyCard () 
  //     {
  //       toyArray.forEach(toy => {addToDOM(showToy)})
  //     })
   
