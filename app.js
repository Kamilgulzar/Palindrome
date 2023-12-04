var userInput = prompt("Enter any word");
var data = '';
for(i = userInput.length -1 ; i>=0 ; i--){
      data += userInput[i]
}

if(data == userInput){
    alert("The word is palindrome")
}
else {
    alert("The word is not palindrome")
}