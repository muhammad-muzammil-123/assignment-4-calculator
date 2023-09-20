var screen = document.getElementById("screen");
function calculator(num){
   screen.value += num
   
    console.log(num)
}

function screenClear(){
    screen.value = "";
}
function operator(opt){
 screen.value += opt

}
function calculation(){
    var finalNum = screen.value;
    var result = eval(finalNum);
    screen.value = result;
    
  
}


