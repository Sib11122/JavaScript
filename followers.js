let count=0;
let display=document.getElementById('countDisplay');
function increaseCount(){    
    count++;
    display.innerText=count;
    checkCountValue();
}
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}