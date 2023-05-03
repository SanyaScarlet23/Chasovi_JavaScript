// ZADACHA1_Difference Between & and &&
//The "&" and "&&" operators are both logical AND operators in most programming languages, but they can behave differently in certain circumstances. 
//Both "&" and "&&" are operators used for evaluating conditional statements. The most basic difference between 
//the two is that the "&" operator is a logical as well as a bitwise operator, whereas the "&&" operator is only a logical operator.

//What is "&" Operator?
//The & operator is a logical operator as well as a bitwise operator. Therefore, the "&" operator works on Boolean as well as binary data (bits). 
//When the "&" operator is used as a logical operator, then it produces result as TRUE or FALSE. It gives a result TRUE if both sides of the conditional statement are true, 
//otherwise it produces a FALSE result.
//The "&" operator allows the compiler to evaluate both sides of the conditional expression. 
//Consequently, it evaluates the right side of the expression, even if the left-hand side of the expression results FALSE.
//The "&" operator is a bitwise AND operator, which operates on the individual bits of its operands. 
//It compares each bit of the first operand to the corresponding bit of the second operand, and if both bits are 1, it sets the corresponding result bit to 1. 
//Otherwise, it sets the result bit to 0.

//What is "&&" Operator?
//The && operator is purely a logical operator. Therefore, the && operator works only on the Boolean data types, i.e., bits. 
//The "&&" operator is also known as short-circuit operator. This is because it only checks the left-hand side of the conditional statement.
//The && operator is a logical AND operator, which operates on Boolean expressions. 
//It returns True if both of its operands are True, else it returns False. 
//If the left-hand side of the conditional statement results in FALSE, then it does not evaluate the right-hand side of the conditional expression, 
//because the result is already known to be False.

//ZADACHA2_SWITCH-CASE
//The switch is a conditional statement like if statement.
// Switch is useful when you want to execute one of the multiple code blocks based on the return value of a specified expression.
//The switch can includes multiple cases where each case represents a particular value. 
//Code under particular case will be executed when case value is equal to the return value of switch expression. If none of the cases match with 
//switch expression value then the default case will be executed. The switch can also contain: string type expression, an expression and a literal value as expression.
//Multiple cases can be combined in a switch statement.
//Points to Remember:
//1.The switch is a conditional statement like if statement.
//2.A switch statement includes literal value or is expression based
//3.A switch statement includes multiple cases that include code blocks to execute.
//4.A break keyword is used to stop the execution of case block.
//5.A switch case can be combined to execute same code block for multiple cases.

//Syntax:
// switch(expression or literal value){
//  case 1:
        //code to be executed
//  break;
//  case 2:
        //code to be executed
//  break;
//  case n:
        //code to be executed
//  break;
//    default:
        //default code to be executed 
        //if none of the above case executed
//}

//Example_Switch-case

let profesor = prompt("Vnesi ime na profesor od JavaScript Akademija")

switch (profesor) {
    case "sanja":
    case "SANJA":
    case "Sanja":
        alert("Sanja e glavna za Fron-End")    
    break;
    case "biljana":
    case "BILJANA":
    case "Biljana":
        alert("Biljana e glavna za GNU/Linux")
    break;
    case "hristijan":
    case "HRISTIJAN":
    case "Hristijan":
        alert("Hristijan e glaven za HTML i CSS")
    break;
    case "aleksandar":
    case "ALEKSANDAR":
    case "Aleksandar":
        alert("Aleksandar e glaven za Node i MongoDB")
    break;
    case "martin":
    case "MARTIN":
    case "Martin":
        alert("Martin e glaven za React")
    break;
    case "bojan":
    case "BOJAN":
    case "Bojan":
        alert("Bojan e glaven za Back-End")
    break;
    case "irena":
    case "IRENA":
    case "Irena":
        alert("Irena e glavna za kariera")
    break;

    default:
        alert("Nema profesor so toa ime")
    break;

}