'use strict';
const btnShowmodel =document.querySelectorAll('.show-modal');
// console.log(btnShowmodel);
// for(let i=0;i<btnShowmodel.length;i++){
//     console.log(btnShowmodel[i].textContent);
// }

const model=document.querySelector('.modal');
const closeModel=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');
// console.log(model,closeModel,overlay);

// Steps:
//1: add event listener to all btns 
//2: on click following things should happen
// a: display prop of modal class should not be none
// b: display prop of overlay class should also change 


for(let i=0;i<btnShowmodel.length;i++){
    btnShowmodel[i].addEventListener('click',function(){
      //  document.que
      model.classList.remove('hidden');
      overlay.classList.remove('hidden');
        })
}

// now for close-modal button we just do opposite,,, we add hidden class to hide above both classes;

// document.querySelector('.close-modal').addEventListener('click',function(){
//     // model.classList.add('hidden');
//     // overlay.classList.add('hidden');
//     addClassList('hidden');
// })

// // now when we click outside same thing should happen here too
// // for outside .. we have overlay class;
// document.querySelector('.overlay').addEventListener('click',function(){
//     addClassList('hidden');
// })

// // now to avoid DRY we use functions ;
// const addClassList=function(className){
//     model.classList.add(className);
//     overlay.classList.add(className);

// }
const addClassList=function(){
    model.classList.add('hidden');
    overlay.classList.add('hidden');

}

// or we can use addClassList function directly in event listerer;

document.querySelector('.close-modal').addEventListener('click',addClassList);

document.querySelector('.overlay').addEventListener('click',addClassList);

// same thing we can do for adding event listener also;


// also we want to add hidden class to both elements when escape key is pressed;

document.addEventListener('keydown',function(e){
  // console.log("key is pressed");
  // console.log(e);
  // console.log(e.key);
  // it should work only when model didn't contain hidden class;
   if(e.key==='Escape'&&!model.classList.contains('hidden')){
    {
      addClassList();
    }
    
   }
})
