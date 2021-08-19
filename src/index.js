//figure out how to loop through the elements. with Array to add things from the 
//toyArray.keys or Object Keys since I am really looping through keys and my time.






  // .then(toyArray => 
  //   {
  //     const showToy = document.createElement('div')
  //     showToy.classList.add("toy-collection")
  //     toyCollection.append(showToy);
  //     const toySetup = function addToyCard () 
  //     {
  //       toyArray.forEach(toy => {addToDOM(showToy)})
  //     })
   
  let addToy = false;
  let toyCollection = document.querySelector('#toy-collection');
  // let aToy = null;
  // let div = null;
  // let title = null;
  // let photo= null;
  // let para= null;
  // let button= null;
  // let showToy = null;

  let toy = document.createElement('div')
  toy.className = "class"  
  let title = document.createElement('h2')
  let photo = document.createElement('img')
  photo.src
  let para = document.createElement('p')
  let button = document.createElement('button')
  

  showToy = document.getElementById("toy-collection")// get one toy
  console.log(showToy)
  //showToy.append(toy,title,photo,para,button)

  addToDOM(showToy, obj)


  // function addToDOM (showToy,element) {
  // showToy.append(toy,title,photo,para,button)
  // }
  
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

  fetch(`http://localhost:3000/toys${id}`)
  .then(response => response.json())
  .then( toyObject => 
    { 
      let innerObjectKeys = Object.keys(toyObject[0])  
      // console.log(innerObjectKeys[1])
    
      console.log(toyObject)
      console.log(toyObject[0].name)
      console.log(toyObject[0].image)

      toyObject.forEach(element => {

        (showToy,element) => {
          title.name = element.name
          photo.src = element.image
          photo.className = "toy-avatar"
          para.textContent = ""
          showToy.append(toy,title,photo,para,button)
          }
        }
  )})


            


        //the values name etc are not included in the array of keys
        // console.log(Object.keys(toyObject))
        // let toyArrayKeys = Object.keys(toyObject)


        // for(const property in toyArrayKeys){
        //     console.log(toyArrayKeys[name])
        // }
      

      // toyArrayKeys.forEach(element => {
      //   console.log(element.name)
      
  
      // title = document.createElement('h2')
      // // title.innerText = `${toyArray[0].name}`
      
      //Object.keys.forEach (key => (topArray.title = Object.keys ))
  
      // photo = document.createElement('img')
      // para = document.createElement('p')
      // button = document.createElement('buttton')

    
