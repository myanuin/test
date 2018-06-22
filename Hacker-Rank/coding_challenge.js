
var massMark = 78; 
var heightMark = 1.69; 

var massJohn = 92;
var heightJohn = 1.95;

//var massTotal = massMark + massJohn;
//var heightTotal = heightMark + heightJohn;

var bmiMark = massMark/(heightMark * heightMark);
var bmiJhon = massJohn/(heightJohn * heightJohn);

console.log(bmiMark, bmiJhon);

var markHigherBMI = bmiMark > bmiJhon; 

console.log( "Is Mark   BMI is heigher than Jhon's" + " " + markHigherBMI);

var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn ,scoreMike,scoreMary);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}



