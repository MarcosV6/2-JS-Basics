
// variables
/*
var name = 'manguy';
console.log(name);

var lastName = 'wahmen';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

*/

// Lesson 2 var 2
/*
var name = 'jon';
var age = 28;

//console.log(name + age);
//console.log(age + age);

var job, isMarried;
//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + 'is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');


age = 'thirty six';
job = 'driver';

console.log(name + 'is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');


//var lastName = prompt('what is the last name');

//console.log(lastName);

alert(name + 'is a ' + age + ' years old ' + job + ' is he married? ' + isMarried + '.');

*/

/*
// lecture operators
var now = 2016;
var birthYear = now - 26;

birthYear = now  - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn =  ageMark = (3 + 5) * 4 - 6;

//ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++
ageMark *= 2;


console.log(ageJohn);
console.log(ageMark);
*/

/*
// if/else statments
var name = 'john';
var age = 26;
var isMarried = 'no';

if (isMarried == 'yes'){
	console.log(name + ' is married!');
}
else{
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;


if (isMarried) {
	console.log('yes');
}
else{
	console.log('no');
}


if (isMarried) {
	console.log('yes');
}

if (23 === '23'){
	console.log('something to print..')
}
*/

/*
// boolean logic and switch

var age = 20;

if (age < 20){
	console.log('john is a teen');
} 
else if (age >= 20 && age < 30) {

console.log('john is a young man')
}
else{
	console.log('john is a man');
}


var job = 'teacher';

job = prompt('WHAT DOES JOHN DO?');

switch (job){
	case 'teacher':
	console.log('john teaches kids');
	break;

	case 'driver':
	console.log('john drives a cab in libson');
	break;

	case 'cop':
	console.log('john helps fight crime');
	break;

	default:
	console.log('john does something else');

}
*/

/*
//challenge

var heightJohn = 1200;
var heightMike = 1635;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

if (scoreJohn > scoreMike){
	console.log('john wins the game with' + scoreJohn + 'points!');
}
else if (scoreMike > scoreJohn) {
	console.log('mike wins the game with' + scoreMike + 'points!');
}
else if (scoreJohn === scoreMike){
	console.log('there is a draw');
}
*/

/*
//other challenge

var heightMary = 158;
var ageMary = 31;
var scoreMary= heightMary + 5 * ageMary;

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
	console.log('john wins the game with' + scoreJohn + 'points!');
}
else if( scoreMike > scoreJohn && scoreMike > scoreMary){
	console.log('mike wins the game with' + scoreMike + 'points!');
}
else if(scoreMary > scoreMike && scoreMary > scoreJohn){
	console.log('mary wins the game with' + scoreMike + 'points!');
}
else{
	console.log('it\'s is a draw');
}

*/


/*

//////////////////
////functions////
////////////////


function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMike);


function yearsUntilRetirement(name,yearOfBirth){
	var age = calculateAge(yearOfBirth);
	var retirement = 65 - age;
	if(retirement >= 0){
		console.log(name + 'retires in '+ retirement + ' years ');
	}
	else {
		console.log(name + 'is already retired');
	}
	
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('mike',1969);
yearsUntilRetirement('mary', 1948);


*/

/*
////////////////////////////////////
////statements and expressions/////
//////////////////////////////////


function someFun(par){
	//code
}


var someFun = function(par){
	//code
}

//expressions
3+4;
var x = 3;

//statements
if (x === 5){
	//do something
}
 */

/*
////////////////
////Arrays/////
//////////////


var names = ['john', 'jane', 'mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'ben';
console.log(names);


var john = ['john', 'smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1){
	console.log('john is NOT a teacher');
}
*/

/*

/////////////////
////Objects/////
///////////////


var john = {
	name: 'john', 
	lastName: 'smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);


var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['john'] =  'programmer';

console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.lastName = 'smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);


*/




/////////////////////////////
////Objects and methods/////
///////////////////////////

//v1.0
/*
var john = {
	name: 'john',
	lastName: 'smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['jane', 'mark', 'bob'] ,
	calculateAge: function(){
		return 2016 - this.yearOfBirth;

	}
};

*/

//console.log(john.calculateAge(1970));
//console.log(john.calculateAge());

//var age = john.calculateAge();
//john.age = age;

//console.log(john);

// v2.0
var john = {
	name: 'john',
	lastName: 'smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['jane', 'mark', 'bob'] ,
	calculateAge: function(){
		
		this.age = 2016 - this.yearOfBirth;

	}
}; 

john.calculateAge();
console.log(john);





var mike = {
	
	yearOfBirth: 1990,
	calculateAge: function(){
		
		this.age = 2016 - this.yearOfBirth;

	}
}; 

mike.calculateAge();
console.log(john);