// Promise.all() style
let  {cookBeans, steamBroccoli, cookRice, bakeChicken, cookBeanSouffle,shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
  /*  for (let i = 0; i<resultArray.length; i++){
    console.log(resultArray[i]);  */
}

serveDinnerAgain();

/*waiting vs concurrent
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
 
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
*/


//concurrent example
async function serveDinner() {
 const vegetablePromise = steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeChicken();
 const sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();


//handling Errors
/*
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
 
usingTryCatch();
----------------------------------------
async function usingPromiseCatch() {
   let resolveValue = await asyncFunction('thing that will fail');
}
 
let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
})
*/

const hostDinnerParty = async  () => {
    try { let dinner = await cookBeanSouffle();
      console.log(`${dinner} is served!`);
    } catch (error) {
      console.log(error);
      console.log('Ordering a pizza!')
    }
  }
  hostDinnerParty();
  
/* Handling Dependent Promises
function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}
------------------------------------------
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
*/
// Write your code below:
async function makeBeans() {
    let type = await shopForBeans();
  
    let isSoft = await soakTheBeans(type);
  
    let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
  }
    makeBeans();