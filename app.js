// Q # 1

function currentDate() {
    var time = new Date();
    document.write(time)
}
currentDate()


// Q # 2


var fnme = prompt("Enter your first name");
var lnme =  prompt("Enter your last name");
function names(){
    alert("Hello " + fnme + " " + lnme); 
}
names();



// Q # 3


var usr = +prompt("Enter first number");
var usr1 = +prompt("Enter second number");
function sum(usr,usr1){
    alert(usr+usr1);
}
sum(usr,usr1)



//Q # 4


var num1 = prompt("Enter First Value");
var opr = prompt("Enter Your Operator");
var num2 = prompt("Enter Second Value");
function calc(num1,opr,num2){
if(opr === "+"){
    return +num1 + +num2 
}
else if(opr === "-"){
    return num1 - num2
}
else if(opr === "*"){
    return num1 * num2
}

else if(opr === "/"){
    return num1 / num2
}

else if(opr === "%"){
   return num1 / num2*100
}
else{
    return "Your Number & Operator Is Incorrect"
}
}
document.write("<br>" +"Your Output Answer " + "<b>" + calc( num1 , opr , num2) + "</b>")




// Q # 5


function squar(num) {
    for (i=0; i<=num; i++){
        var sum=0;
        var j = i*i;
        sum = j;
        document.write('<br>Squares Number : '+sum);
    }
    document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
}

var num = +prompt("Enter a number for Squares :");
squar(num);


