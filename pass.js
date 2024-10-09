// const div1El = document.getElementById("div1")
// const div2El = document.getElementById("div2")
// const genPassButtonEl = document.getElementById("genPassButton")
// const length = 15;

// const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]


// genPassButtonEl.addEventListener("click", function() {
//   const randomPassOne = Math.floor(Math.random()  * characters.length)
//   const randomPassTwo = Math.floor(Math.random()  *characters.length)


//   div1El.textContent = characters[randomPassOne]
//   div2El.textContent = characters[randomPassTwo]

  
// })

let div1El = document.getElementById("div1")
let div2El = document.getElementById("div2")



function generateRandomPassword(length){
  const charset = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"]
  
  let password = " "

  for (let i = 0; i < length; i++){
    const randomIndex =  Math.floor(Math.random()  * charset.length)
    password += charset[randomIndex]
  }
  return password;
}


function displayPasswords(){
 
 let password1 = generateRandomPassword(15);
 let password2 = generateRandomPassword(15);

  div1El.textContent = password1
  div2El.textContent = password2

}
function clearPasswordDivs() {
  document.getElementById('password1').innerText = '';
  document.getElementById('password2').innerText = '';
}

// Clear the divs when the page loads
clearPasswordDivs ()


displayPasswords()