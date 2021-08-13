
  //the input receiver function to get data from the user

function getVal(num){
    document.calc.result.value= document.calc.result.value+num;
}

//the result operator to do the dedicated task
function equal(){
    var exp=document.calc.result.value;
    if(exp){
        document.calc.result.value=eval(exp);
    }
}
//clean function to clean all at  once
function clean(){
document.calc.result.value="";
}
//backspace function to clean one y one
function back(){
    var exp =document.calc.result.value;
 document.calc.result.value= exp.substring(0, exp.length-1)
}