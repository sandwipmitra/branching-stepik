var swim = 8;
var mySwim = "";

switch (swim){
  case 1:
    mySwim = "Can swim one time in a week"
    break;
  case 2:
    mySwim = "Can swim two times in a week"
    break;
  case 3:
    mySwim = "Can swim three times in a week"
    break;
  case 4:
    mySwim = "Can swim four times in a week"
    break;
  default:
    mySwim = "You can not swim more than four times in a week"
}
console.log(mySwim);

/*function testCase(a) {
    //var a = 3;
    var x="";
    // Put your code here
    switch (a){
        case 0:
            x = "Zero";
            break;
        case 1:
            x = "One";
            break;
        case 2:
            x = "Two"
            break;
        case 3:
            x = "Three";
            break;
        case 4:
            x = "Four";
            break;
        case 5:
            x = "Five";
            break;
        case 6:
            x = "Six";
            break;
        case 7:
            x = "Seven";
            break;
        case 8:
            x = "Eight";
            break;
        case 9:
            x = "Nine";
            break;
        default:
            x = "Invalid number";
    }
    return x;
}*/