// let iconMenu = document.querySelector("#iconMenu")
// let menu = document.querySelector("#menu")
// let iconX = document.querySelector("#iconX")


// iconMenu.addEventListener("click", ()=>{
//   menu.style.display= "block"
// })


// iconMenu.addEventListener("click" , () =>{
//     menu.style.display = "block"
//     iconX.style.display = "block"
//     iconMenu.style.display = "none"

// })


// iconX.addEventListener("click", ()=>{
//     menu.style.display="none"
//     iconX.style.display="none"
//     iconMenu.style.display="block"

// })




// Save data to local storage
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');

// Retrieve data from local storage
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');

console.log('Username:', username); 
console.log('Theme:', theme);       

// Remove a specific item
// localStorage.removeItem('username');

// Check after removal
// console.log(localStorage.getItem('username')); 

// Clear all items
// localStorage.clear();

// Verify storage is empty
// console.log(localStorage.getItem('theme')); 

// Using localStorage.key(index) to iterate
// localStorage.setItem('example1', 'value1');
// localStorage.setItem('example2', 'value2');

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   const value = localStorage.getItem(key);
//   console.log(`${key}: ${value}`);
// }