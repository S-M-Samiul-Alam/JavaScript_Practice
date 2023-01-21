console.log("Allahuakbar","ALLAHuakbar")
console.log("Allah","ALLAH")
//var name = 'sami';
//console.log(name)//

/*function showmyname(name) {  // name is parameter here, it is not fixed.
    console.log(name);
}
showmyname('sami');   //this is argument which is a concrete value*/

/*function calcsum(num1,num2){
    const sum=num1+num2;
    return sum
}
result=calcsum(50,50);
console.log(result)*/

/*let name = 'sami'; //template literals
console.log(`i am ${name}`)*/

/*let Person = { //practice
    name:'Shotej',
    const: age =25,
    ismarried: true,
    
    homeaddress: {
        long:58.66,
        latt:32.44,
    }, 
    friends: ['anik', 'shoeb', 'mridha']
}
console.log(Person)*/

//3.1 Arithmatic Operators

/*let num1=10;
let num2=3;
console.log(num1**num2)    //to get power, 10^3
console.log(num1%num2)*/  //To get remainder

//3.2 Assignment Operators
/*let num1=5
num1+=7 //short cut of num1=num1+7
num1*=5 //short cut of num1=num1*5
console.log(num1)*/

//3.3 Comparison Operators
// > < >= <= === (Equality operators) !== (not equal)
/*let price=100
console.log(price>500) //output True or False*/

//3.4 Logical Operators
// Three types: and (&&), or(||), not(!)

/*let price=10
//and operators
console.log(price>15 && price<50) // if one condition is false, the result will be always false
console.log(price<15 && price>5 ) // True if both condition is true
//or operators
console.log(price<15 || price>20 ) // True if one condition is true
console.log(!(price>50)); //If condition is flase, result true; if true, result false*/
 
// 3.5 Equality Operator
/*let price=10
console.log(price===10) //equal
console.log(price!==20) //not equal ; three equal check data and value both but double equal only check value
console.log(price==10)
console.log(price!=20)*/

//3.6 Exercise: Swap two numbers
/*let a=10
let b=20
let temp=a
a=b
b=temp
console.log(a,b)*/

//4.1 if else

/*let a=10
if (a>0) {
    console.log('Positive Number')
}
else if (a<0){
    console.log('Negative Number')
}
else{
    console.log('zero')
}*/

//4.2 SWITCH CASE //if else can be used here

/*let color='green'

switch (color) {
    case 'red':
        console.log('This is red')
        break

    case 'green':
        console.log('This is green');
        break

    case 'yellow':
        console.log('This is yellow');
        break
        default:
            console.log('This color is not valid')
}*/

//4.3 Ternary Operator

/*let a=10;
let b=2;
if (a>b){
    maxvalue=a;
}
else maxvalue=b;
console.log(maxvalue);*/ // or

/*let num1=10;
let num2=2;
let maxvalue= (num1>num2)? num1:num2 //ternary
console.log(maxvalue);*/

/*let number=10
console.log((number%2===0) ? 'even':'odd');*/

//4.4 Excercise:Fizz Buzz

/*let number=92;

if (number%3===0 && number%5===0){
    console.log('FizzBuzz')
}
else if (number%3===0){
console.log('Fizz')
}
else if (number%5===0){
    console.log('Buzz')
}
else {
    console.log('Nothing')
}*/

//4.5 Excercise: FizzBuzz with ternary operators

/*let number=37
console.log((number%3==0) && (number%5===0)? 'FizzBuzz': (number%3===0)? 'Fizz':(number%5===0)? 'Buzz':'nothing')*/

//4.6 Exercise: Leap Year

/*let year=2012;

if(year%400===0){
console.log('This is a leap year')
}
else if(year%4===0 && year%100!==0){
    console.log('This is a leap year')
}
else {
    console.log('This is not a leap year')
}*/

//4.7 Our Grading System

/*let mark=50

if (mark>79 && mark<101){
    console.log('A')
}
else if (mark>69 && mark<80){
    console.log('B')
}
else if (mark>59 && mark<70){
    console.log('c')
}
else if (mark<0 || mark>100){
    console.log('Invalid')
}
else {
    console.log('Nothing')
}*/

//4.8 Switch case with multiple logical operators

/*const number=-1;

switch (true){
    case number>0:
    console.log('This is Positive');
    break;

    case number===0:
    console.log('This is zero');
    break;

    case number<0:
        console.log('This is Negative');
        break;
}*/

//4.9 Assignment: Conditional Statements
// Will be performed later

// Loops

//5.1 For Loop

/*for(index=1;index<=3;index++){
    console.log('Allahuakber',index);
}

for(index=3;index>=1;index--){
    console.log('Allahuakber',index);
}*/

//5.2 While Loop // Minimum run 0 time

/*let index=1;

while (index<=3){
    console.log('Bismillah',index)
    index++;
}*/

//5.3 Do While loop // Minimum run at least 1 and then condition check

/*let index=1;
do {
console.log('Alhamdulillah',index)
index++;
}
while(index<=3);*/

// 5.4 for...in  //if we need key and values both

/*const obj={
    name: 'Aarish',
    age: '5',
}

for (let key in obj){
    console.log(key,obj[key])
}

let numbers=[1,2,3,4]

for (let index in numbers){
    console.log(index, numbers[index])
}*/

// 5.5 for...of // only to get values

/*let numbers= [ 1,2,3,4]

for (let num of numbers){ 
    console.log(num) //no index needed, ES6 new features
}*/

// 5.6 break...continue

/*let numbers=[1,2,3,4]

for (let index=1; index<=5;index++){

    if (index==3){
        continue; // To skip one step
    }
    console.log(numbers,index)
    break; // To stop next steps
}*/

//5.7 Infinite loop

//Condition & Increment is must in all loops,otherwise it will make your pc slow. 


//5.8 Nested loops (loops in another loops)

/*for (i=1; i<=5;i++){

for (j=1;j<=5;j++){

console.log(i,j)
}
}*/

// 5.8 Exercise Even Odd numbers

//let number=10;

/*for (index=1;index<=10;index++){
    
    if (index%2===0){
        console.log('Even',index);
    }
    else {console.log('Odd')}
}*/

//or

/*for (index=1;index<=10;index+=2){
    console.log(`${index} number is odd`)
}
for (index=2;index<=10;index+=2){
    console.log(`${index} number is even`)
}*/

//5.9 Excercise: Sum of Numbers

/*number=[10,20,30,40,50];
sum=0;

for(index=0;index<number.length;index++){
sum=sum+number[index];

//sum+=number[index]; same thing as sum=sum+number[index];
}
console.log(sum);*/

//5.10 Exercise: Prime Numbers
 
/*number=10 ;   //check if it's a prime number

isprime=true;

for (index=2; index<=number-1;index++){

    if (number%index===0){
        isprime=false;  
        break;
    }
}

if(isprime){
    console.log(`This is a prime number`)}
else{
    console.log(`This is not a prime number`)
}*/

// *** Find prime numbers from 1-100

/*for(number=1;number<=100;number++){

    isprime=true;

for (index=2; index<=number-1;index++){

    if (number%index===0){
        isprime=false;  
        break;
    }
}

if(isprime){
    console.log(number)}
}*/

// 5.11 Assignment _will be done later

//5.12 Assignment _will be reviewed later

//6.1 String Basics

/*let country="Bangladesh"
console.log(country);
console.log(typeof country);
console.log(country[2]); // if index means character is empty it will show undefined
console.log(country.charAt(3)); // if index means character is empty it will show empty
console.log(country.length)*/

// 6.2 String methods-01

/*let message="Please repeat the 'repeat' word"

console.log(message.charAt(1)); // find character/index
console.log(message.charCodeAt(2)); // find as key value means decimal number / unicode
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('Please',14)); //14 is position from where this word included
console.log(message.startsWith('repeat',7));
console.log(message.endsWith('the',17));*/

//6.3 String Methods-02

/*let message="Please repeat the 'repeat' word"

console.log(message.search('repeat')) // return index number of first word, return -1 if word not exists

console.log(message.indexOf('repeat',14)) // return index number, 2nd parameter can be added as start position

console.log(message.lastIndexOf('repeat',14)) // return index number... 0-13, end at 14, Nothing count after 14*/


// 6.4 String methods-03

/*let temp=123;
console.log(typeof temp.toString()); //Number to string, type finding

let m1='Subhanallah'; 
let m2=' alhamdulillah'; 
let m3=' Allahuakber';

//let m=m1.concat(m2,m3); // or below line
let m=m1 + m2 + m3 //best practice
console.log(m)

let message="Please repeat the 'repeat' word."

console.log(message.split(''))
console.log(message.split(' '))
console.log(message.split("'"))*/

// 6.5 String Methods-04

/*let message="Please repeat the 'repeat' word"

console.log(message.slice(0,6)) //0-5 index; left to right
console.log(message.slice(-1,-5)) //-1-(-4) index, right to left; index parameter optional
console.log(message.substring(0,6)) //0-5 index, first index parameter must
console.log(message.substr(0,13))//here, 13 is length, means 0-13 length substring*/

//6.6  Escape Sequence

/*let message='He said,"It\'s a sunny day."\nSo, Have a good day.'
console.log(message)*/

//6.7 String Immutability

/*let message='jello world'//No modification can be done partially is js, this is immutability
message='Hello World' // reassigning, we can't change once one string is created in js
console.log(message)*/

//6.8 String Resources

//6.9  string problem solving_will be done later


// ***Objects--JSON***

//7.1 OBJECT BASICS

/*let user={
    name: 'Sami',
    age: 29,
    Occupation: 'Business'
}

//DOT Notation
console.log(user.Occupation); //valid variables name

//Bracket Notation  
console.log(user['age'])*/  //invalid variables name & dynamic name with can change

//7.2 Adding, Modifying, Deleting

/*let user={
    name: 'Sami',
    age: 29,
    Occupation: 'Business'
}
console.log(user)

//ADD
user.goal='Billionare'

//update
user.Occupation='Business'+' Content Creator'
//user.age=user.age+1;

//delete
delete user.age;*/

//7.3 Object methods & this keyword // use of this.

/*const user={
    name: 'Aarish',
    age: 5,
    ismarried: true,
    friends: ['Nusaiba','Atika'],
    relation: 'mamurkolija',
    selectcolor: null,
    printing: function(){ // functions in object means method
    console.log(this); 
    console.log(`${this.name} ${this.relation}`) //use this keyword for calling object in method
    }
}
user.printing(); //calling function for print*/


// 7.4 Traversing Object Entries

/*const user={
    name: 'Sami',
    age: 29,
    occupation: 'Business'
}

//way 1 
for (let key in user){
    console.log(key,user[key]) // here, user[key], this key is values
}

// way 2
console.log(Object.keys(user))
console.log(Object.values(user))

for (let key of Object.keys(user)){ //this needs an array, that's why we have to find first key and value arrays
    console.log(key)
}
for (let val of Object.values(user)){
    console.log(val)
}*/

//7.5 Excercise: Total Salary

/*let salary={
    Sami: 100000,
    Anik: 200000,
    Shotej:300000,
    Mridha: 400000,
    Khabbab: 500000,
}

sum=0; way:01

for(key in salary){
    console.log(key,salary[key])
    sum=sum+salary[key]
}
console.log(sum)*/

/*Object.keys(salary)
Object.values(salary)

let Total=0; way-2

for (index=0; index<=4;index++){
Total=Total+(Object.values(salary)[index])
}*/

/*let Total=0; //way:03

for (let val of Object.values(salary)){
    Total=Total+val
}
console.log(Total)*/

//7.6 Object Destructuring

/*const user={
    name: 'sami',
    age:29,
    favbook:{
        name: 'kalbela',
        author: 'mazumder',
    }
}
const {name, age, favbook}=user;
const {name:title, author}=favbook; //name:title; another name is here
console.log(title);*/

//7.7 Exercise: Object full

/*const docobject={
    name: 'Aarish',
    Designation: 'NeuroSurgeon',
    clinic:{
        name: 'Happy Neuro surgery center',
        address: {
        long: 20.99,
        lat: 120.66,
        },
    },
    operation:function(){
        console.log('He is speacial');
    } 
}
const {name, Designation, clinic:{
    name:clinicname, address:{
        long,lat
    }
}
}=docobject;
//const {name:clinicname, address}=clinic;
//const {long,lat}=address;

console.log(long)
console.log(clinicname)

for (keys in docobject){
    console.log(keys,docobject[keys])
}*/

// 7.8 Cloning Object

/*const user={
    name: 'Sami',
    age: 29,
}*/
//console.log(user)

//const coppieduser={};

//coppieduser.name=user.name; //manual system
//coppieduser.age=user.age;


/*for (let key in user){
    console.log((key,user[key]));
    coppieduser[key]=user[key];
}
console.log(coppieduser.name);*/

//const coppieduser=Object.assign({},user) //Shortcut cloning object

//const coppieduser={...user}
//console.log(coppieduser)

//console.log(coppieduser)

// 7.9 Math Object
 

/*console.log(Math.PI);

console.log(Math.round(1.2));

console.log(Math.random());

console.log(Math.ceil(1.7));
console.log(Math.floor(1.7));

console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));*/

// 7.10 JSON Data format

/*const user={
    name: 'sami',
    age: 29,
}

const Jsondata= JSON.stringify(user) //object to JSON, No function and No undefined or invaid value in object
console.log(Jsondata)

console.log(JSON.parse(Jsondata))  //JSON to Object*/

//8.1 Function Basics

//Function Declaration

/*function myself(name,age){
    aboutme=`I am ${name} & ${age}`;
    console.log(aboutme)
}
//Function call
myself('sami',29)


function calculate(num1,num2){
sum=num1+num2;
return sum // return value is mandatory to work with number
}
let result=calculate(100,100)
console.log(result)*/

//8.2 Default parameters

/*function calculate(num1,num2,num3=300){ //num3 is default here, it must be last one
    sum=num1+num2+num3;
    return sum // return value is mandatory to work with number
    }
    let result=calculate(100,100)
    console.log(result)*/

// 8.3 Hoisting, function as an Expression

//Hoistion/Function declaration

//console.log(result) // we can't before initialization in function declaration

/*console.log(calculate(100,100)

function calculate(num1,num2){
    sum=num1+num2;
    return sum // return value is mandatory to work with number
    }
    // console.log(calculate(num1,num2)) // Can be placed anywhere in regular function

// console.log(total(500,500)) // IT will not work anywhere before initialization
//Function Expression

let total= function(num1, num2){
    sum=num1+num2
    return sum;
}
console.log(total(500,500))*/

//8.4 Arrow function

/*let intotal=function(num1,num2){
    sum=num1+num2;
    return sum
}
console.log(intotal(5,5))

let total=(num1,num2) => num1+num2; //no return since one operation
console.log(total(10,10))*/

//8.5 Rest Parameter
 /*function multip(...args) {
     let mult=1
     for (abcd of args){
         mult=mult*abcd;
     } 
     return mult;  
}
console.log(multip(2,3,4,5,6,7))*/

//8.6 Area of Circular

//Function Expression
/*const areaofcircle=function(radius){
    wholearea= Math.PI*radius*radius
    return wholearea
}
console.log(areaofcircle(2))

//or

const circlearea=(radius)=>{
    wholearea= Math.PI*radius*radius
    return wholearea
}
console.log(areaofcircle(3))*/

// 8.7 Excercise: Max of Arguments

/*function maximum(...args){
    let maxvalue= -1;
    for(i=0;i<args.length;i++){
        if (maxvalue<args[i]){
            maxvalue=args[i]; 
        }  
    }   return maxvalue
} 
console.log(maximum(0,1,2,3,4,5,6,7,8,9,10))

//9.1 Array Basics

/*let frnds=['Anik', 'Shotej', 'Mridha','Khabbab']
console.log(frnds)
console.log(frnds[2])
console.log(frnds.length)*/

//9.2 Adding Elements in ARRAY

/*const numbers=[3,4,7,8];

//numbers.unshift(1,2)  //unshift is used to add elements in first
//numbers.push(9,10);  // push is used to add elements in last

numbers.splice(2,0,5,6) //2 means position, 0 means no delete, adding elements from 3rd position
console.log(numbers)*/

// 9.3 Removing elements from array

/*const numbers=[1,2,3,4,5,6,7,8,9,10]

//numbers.shift() // Delete from first position, it will delete gradually if we use again
//numbers.shift() //it will delete gradually if we use again

//numbers.pop() //Delete from last position, it will delete gradually if we use again
//numbers.pop() //it will delete gradually if we use again

numbers.splice(4,2) //4 means position, 2 means 2 delete

console.log(numbers)*/

//  9. 4 Finding an element in array

/*const numbers=[1,2,3,4,5,6,2,3,7,8,9]

console.log(numbers.includes(3,2))  //return true, here 2 means we are calculating from this index
console.log(numbers.includes(30)) //return false

console.log(numbers.indexOf(2))
console.log(numbers.lastIndexOf(2))*/

//9.5 Finding elements_Reference type_object findings

/*const doctors=[
    {name:'Sami', age: 29 },
    {name: 'Aarish', age: 05},
    {name: 'Mamu-Vaigna',age:34},
]
const Output= doctors.find(function(doctor){ // This function is call back function, find output is only 1 which matches first, Declaring function because we want all info of that particular object
    return doctor.name==='Mamu-Vaigna'
})
const output1=doctors.findIndex(function(abcd){
    return abcd.name==='Aarish'
})
console.log(Output)
console.log(output1)*/

// 9.6 Iterating an array

/*const numbers=[1,2,3,4,5];

for (let index=0; index<numbers.length;index++){
    console.log(index,numbers[index])
}

for(let num of numbers){
    console.log(num)
}

numbers.forEach(function(num,index){
console.log(num,index)
})

//Arrow Function
numbers.forEach((num,index)=>console.log(num,index))*/

// 9.7 Sorting & Reversing

/*const numbers=[6,8,2,1,5];

numbers.sort() // here, it sorted accoring to askey value, assuming array, if numbers= [2,6,8,10], then after sorted output=[10,2,6,8] as 10 has low askey value
numbers.reverse()

console.log(numbers)

const numarray=[2,6,5,10]; 
numarray.sort(function(n1,n2){ //array elements entering one by 1 just like loop cause we 
    n=n1-n2  // swaping numbers array, if n=negative, no swap. if n=positive means first number is > second number, so need to swap.
    return n
})
console.log(numarray)

//another example
const doctors=[
    {name: 'Sami', age:29},
{name: 'Aarish', age: 5}]

doctors.sort(function(d1,d2){
    if(d1.age>d2.age)return +1  //+1 means condition fulfilled, and start assending means swaping object
    if(d1.age===d2.age)return 0 //0 means no change
    if(d1.age<d2.age)return -1 //-1 means also no change, because its already in assending
}).reverse();                  //here, reversing whole function result to get initial state
console.log(doctors)*/

//or

/*doctors.sort((d1,d2)=>d1.age-d2.age) //result positive so sorting, if negative, then already assending 
console.log(doctors)*/

//9.8 Testing the elements of ARRAY

/*const numbers=[1,2,3,4,5,6,7,8,9,10];

const all=numbers.every(function(num){ //numbers.some if anything is positive
    return num>0; 
})
console.log(all)

const odd=[1,3,5,8,10,15,20];

const oneodd=odd.some(function(oddnum){
    return (oddnum%2===1)
})
console.log(oneodd)*/

//9.9 Combining and slicing an array

/*const num1=[1,2,3]
const num2=[4,5,6]
const num=num1.concat(num2)
console.log(num)

const numbers=[1,2,3,4,5,6]
const clonearray=numbers.slice() //cloning array, slicing from start
const slicearray=numbers.slice(2,5) // 2,5 means 3rd position to 4th position 

console.log(clonearray)
console.log(slicearray)*/

//9.10 Spread operators

/*const numbers=[1,2,3,4,5,6]
console.log(numbers)      // simple numbers array
console.log(...numbers)  // using spread operator we get separate number

const coppiedarray=[...numbers] // cloning array using spread operator

const num1=[1,2,3];
const num2=[4,5,6];

const addingarray=[...num1, ...num2]; //adding or concating use spread operator
console.log(addingarray)*/

//9.11 Joining and splitting array

/*const numbers=[1,2,3] //array to string , string to array

const joinedarray=numbers.join('')  // here,empty is operator to get 123 output.
const joinedarrayy=numbers.join("-") ///we can add seperator
console.log(joinedarray)
console.log(joinedarrayy)

const Stng='We are learning jAVAscript'

const newarray=Stng.split(' ')
console.log(newarray)
console.log(newarray.join('-'))*/

//9.12 Mapping an Array....//ES6 Feature

/*const numbers=[1,2,3]

const mulbytwo=[];

for (let num of numbers){
    mulbytwo.push(num*2)
}
console.log(numbers)
console.log(mulbytwo)

const mbtwo=numbers.map(function(num){
    return num*2;
})
console.log(mbtwo)*/

// Another map example

/*const doctorS=[
    {name: 'Sami', age:29},
    {name: 'Aarish',age:5},
    {name:'Salina',age:55}
]

const out=[];
for (let doc of doctorS){
    out.push(doc.name)
}
console.log(out)

// map   //work like loop
const doctorsname=doctorS.map(function(doc){
    return output1=doc.name;
})
console.log(doctorsname)*/

//9.13 Filtering an array

/*const numbers=[1,2,3,4,5];

const onlyoddnumbers=[];

for(let num of numbers){
    if(num%2===1){
onlyoddnumbers.push(num)
    }
}
console.log(onlyoddnumbers)

const onlyoddnumbers1=numbers.filter(function(num){
             return num%2===1;
}
)
console.log(onlyoddnumbers1)*/

//9.14 Reduce method, means all addition 

/*const numbers=[10,20,30]

//usual method
let sum=0;

for(let num of numbers){
    sum=sum+num
}
console.log(sum)

//Reduce method

const reducedsum=numbers.reduce(function(sum,num){
    return sum=sum+num
},0)
console.log(reducedsum)*/

//9.15 when map, filter, reduce is used

/*const Engineer=[{name: 'sami', course:1},
{name: 'Mridha', course:2},
{name: 'Khabbab',course:3}]

console.log(Engineer.map((E)=>E.name))
console.log(Engineer.filter((F)=>F.course>1)) //Here, parameter.name means which parameter we are using in filter/map/reduce. This is not object name.name or object name.course
console.log(Engineer.reduce((allcourse,G)=>allcourse+G.course,0))*/

//9.16 Excercise: Odd sum

/*const odd=[10,11,13,20]

sum=0;
//way 1 
for(let num of odd){
    if(num%2===1){
        sum=sum+num
    }
}
console.log(sum)
//way 2
const oddarray=odd.filter((num)=>num%2===1)
console.log(oddarray)

console.log(oddarray.reduce((oddsum,num)=>oddsum+num,0))

//way 2 shortcut
const oddtotal=odd.filter((num)=>num%2===1).reduce((oddsum,num)=>oddsum+num,0) // First filter then reduce
console.log(oddtotal)*/

//9.17 Exercise: Even Max

/*const numbers=[101,122,118,131]

let maxvalue=-1;

for(let num of numbers){
    if(num%2===0){
if(maxvalue<num){ 
    maxvalue=num} // First max value entering and replacing -1, so after first iteration maxvalue is changed and now started comparing with next numbers
    }
}
console.log(maxvalue)

const onlyevens=numbers.filter((num)=>num%2===0)
console.log(onlyevens)

console.log(Math.max(...onlyevens)) //we can't put array here directly, need to destructure array. so ...onlyevens; this is spread operatiors

const maxeven=onlyevens.reduce((maxvalue,num)=>{
    if (maxvalue<num)
    {return num}; 
    return maxvalue},-1)
console.log(maxeven)*/

//9.18 Excercise: Books

/*const books=[
    {name: 'Book1',Price:450,rating:4.1},
    {name: 'Book2',Price:470,rating:5},
    {name: 'Book3',Price:350,rating:3.2},
    {name: 'Book4',Price:600,rating:4.5}
]

const filteredbooks=books.filter((book)=>book.Price<500 && book.rating>4)

console.log(filteredbooks)

const reversedfilteredbooks=filteredbooks.reverse((b1,b2)=>b1.rating-b2.rating)
console.log(reversedfilteredbooks)

console.log(books.map((book)=>book.name))*/

//10.1 Var vs let
 
// we use let, because let works in block scope, if we declare anything using let, it will only work on particular area where we have initialized it & will not work on others area of that function. 

//Var, is function scope, if we declare using var, it will take value and give output for every area of this function where this variable is atleast initialized. 

//10.2 Object & Array Destructuring 

//const {name,age,address:{long,lat}}=user

//Object destructure
/*function greeting({name,age,address:{long,lat}}){
    console.log(`Hello ${name} ${age} from ${long} ${lat}`)
}

const user={
    name:'Aarish',
    age:5,
    address:{
        long:29.99,
        lat:10.03,
    },
};
greeting(user);

//Array Destructure

const numbers=[1,2,3,4]
 
const [a,b,c,d]=[1,2,3,4]
console.log(a)*/

//10.3 Data Structure Set

/*let set=new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100); // No repeatational benefit

console.log(set);
console.log(set.size);

set.delete(200); //200 will be deleted
console.log(set);

for (let el of set){
    console.log(el)
}

set.forEach((el)=>console.log(el)) //callback function is used in this I think 

set.clear()
console.log(set)*/

//10.4 DATA Structure: map

/*let map=new Map()

map.set('Mango','amm')
map.set('Banana','Kola')
map.set('Score',100)

console.log(map)

for(let el of map){
    console.log(el)
}

console.log(map.has('Mango'))

map.delete('Banana')

console.log(map)

console.log(map.keys())
console.log(map.values())
console.log(map.entries())

map.clear()
console.log(map)*/

//10.5 Weak Set, Weak Map  //no traversing, no clear, only reference store

//Weak Set
/*const ws=new WeakSet();

const obj1={}; //obj looks same, but their memory location different and these are reference datatype
const obj2={};

ws.add(obj1) //It will add only object
ws.add(obj2)

console.log(ws) 
console.log(ws.has(obj1))

ws.delete(obj1)

console.log(ws.has(obj1))

//Weak Map

const wm=new WeakMap();

wm.set(obj1,123) //only object can be set

console.log(wm);
console.log(wm.has(obj1))
console.log(wm.get(obj1))

wm.delete(obj1)

console.log(wm.has(obj1))
console.log(wm.get())*/

//10.6 ES6 Module  //problem solved, Open live server with F1
/*import { addition,subtraction } from "./math.js"; 

console.log(addition(10,10));
console.log(subtraction(10,5));*/

//10.7 Padstart.. padend, trim start, trim end

/*let minute='4';
let hour='4';

console.log(minute.padStart(3,0))   //3 is length, 0 is what will add
console.log(minute.padEnd(3,0))    // 3 is length, 0 is what will add

let name='  Aarish   '
console.log(name.length)

name1=name.trimStart() //it will trim first spaces
name2=name.trimEnd()  //it will trim last spaces
console.log(name1.length)
console.log(name2.length)

name=name.trim()  //it will delete spaces from both side of the string
console.log(name.length)*/

//11.1 Data Structure & Algorithms

// Array, Trees, Stacks, Graphs, Queues, Tries, Liked List, Hash Tables

//which one we want to use depends on our need, suppose we want a sorted list which includes no repeatation, so we have to use set here.
//For fast and optimized websites, we have to use some algorithm such as, Binary search, String matching algorithms, Dijkstra's Algoithm, Dynamic Programming Algorithms.

//11.2 Why data structure and algorithm is important for interview.

// For fast and optimized websites we need to apply data structure and algorithm.

//11.3 Find out the duplicate number

/*const numbers=[1,2,3,3,4,5]

let Mapping={}  // Data structure set and map can also be used to solve this problem.

for (let num of numbers){
    if(Mapping[num]){
        console.log(`${num} is duplicate`)
    }
    else{
        Mapping[num]=true
    }
}

console.log(Mapping)*/

//11.4 Remove all duplicated from an array 

/*const numbers=[10,211,10,323,323,-3,-3,41,50];

const uniquenumbers=[]; //we want an array, so to push mapping numbers we have to declare it.

let Mapping={};

for (let num of numbers){
    if(Mapping[num]){
     }
     else {Mapping[num]=true;
    uniquenumbers.push(num);
    }
}
console.log(uniquenumbers)

//or
 
console.log([...new Set(numbers)])*/  //one line solution, first turn the array in set, then putting the set in an array using spread oerators. spread operators detached one from another

//11.5 Find all pairs whose sum is equal to a given number

/*const numbers=[1,2,3,4,5,6,7,8,9]
const target=9;

for(i=0;i<numbers.length;i++){
    for (j=i+1;j<numbers.length;j++){
        if(numbers[i]+numbers[j]===target){
            console.log(numbers[i],numbers[j])
        }
        
    }
}*/

//11.6 Reverse string [2 ways]

/*let name='Sami'

let reversename='';

for (let index=name.length-1; index>=0;index--){
    reversename=reversename+name[index]
}
console.log(reversename)

//or

const arrayofname=name.split('').reverse().join('')
console.log(arrayofname)*/

//11.7 Reverse each word of string[2 ways]

/*const str='Hello World'

const words=str.split(' ')

const reversewords=[];

for (let word of words){
    reversewords.push(word.split('').reverse().join(''))
}
console.log(reversewords.join(' '))

//way 2, using map
const words1=str.split(' ').map((word)=>word.split('').reverse().join('')).join(' ')

console.log(words1)*/

//11.8 Recursion_print recursively,1-10

// if a program allows you to call a function inside the same function,then it is called a recursive call of the function

/*function onetoten(number){
    if(number>10) return;
    console.log(number)
    onetoten(number+1)
}
onetoten(1)*/


//11.9 Print_Recursively,10-1

/*function onetoten(number){
    if(number>10) return;
    onetoten(number+1)
    console.log(number)  //first recursion of all going to be done, then return to print for all recursion
}
onetoten(1)*/

//11.10 Recursion_Factorial

/*function calfactorial(num){
   if(num===0) return 1;
    return num*calfactorial(num-1) //4*3*2*1*1 //when 4, its waiting for 3,when 3,its waiting for 2 and go on. It means 4 presaved.
}
const result=calfactorial(4)
console.log(result)*/

// 12.1-12.4 video not found

//13.1 Regular Expression

//Use for validation and string replacement

//13.2 Regular Expression Test

/*const regExp=/hello/i //Here hello is pattern, i is flag or modifier, flag i means this is case insentitive

console.log(regExp.test('Hello world'))*/

//13.3 Regular Expression Modifier and object methods.

/*const regExp=/there/ig
console.log(regExp)
console.log(regExp.source) //source return pattern, pattern means /inside this/, here, there is pattern
console.log(regExp.exec('Hi! Hello there.')) //details of pattern if pattern exists.

const str='Hi! Hello There There There'

console.log(str.match(regExp)) //same output as exec
console.log(str.search(regExp)) //index number of regExp
console.log(str.replace(regExp,'world'))*/  // To replace multiple need to declare global flag 'g'

//14.1 Object oriented JavaScript_Factory Functions

/*function user(name,age){
const userobj={
    name,
    age,
    walk:function(){
        console.log('Aarish started walking')
    }
}
return userobj
}
const user1=user('Aarish',5);
const user2=user('Shoeb',29);
console.log(user1,user2)
console.log(user1.walk)*/

//14.2 Constructor Function & this keyword

/*function User(name,age){ //capital letter of object is must in constructor object
    console.log(this) // this is an empty object
    this.name=name,  //entering properties in empty object
    this.age=age,
    this.walk=function(){
        console.log('Aarish started walking')
         //object with properties
    }
    console.log(this)
}
const user3= new User('Aarish',5) // new, word is import to declare a new object, otherwise it will be a global object or window object.

console.log(user3)*/

//14.3 Home address with Factory Function

/*function homeaddress(Street, City, zipcode){
    const homeaddressobj={
        Street,
        City,
        zipcode
    }
    return homeaddressobj
}
const homeaddress1=homeaddress('a','b',1212);
const homeaddress2=homeaddress('c','d',1230);

console.log(homeaddress1,homeaddress2)

//constructor function

function Homelocation(Road, Area, Flat){
    this.Road=Road,
    this.Area=Area,
    this.Flat=Flat
}

homelocation1=new Homelocation('A','B',901)
homelocation2=new Homelocation('c','d',1402)

console.log(homelocation1,homelocation2)*/

//14.4 BUILTIN CONSTRUCTORS

/*const name1='Aarish'
const name2=new String('Aarish') //String constructor output is an object.

console.log(name1)
console.log(name2)

console.log(name1===name2) //False, type different

const age1=29
const age2=new Number('29')

console.log(age1)
console.log(age2)

let isvalied=true
let isvalied1=new Boolean(true)
console.log(isvalied1)

let colors=['White', 'Black', 'Green']
let colors1=new Array('White', 'Black','Green')
console.log(colors1)

const sum= new Function('num1','num2','return num1+num2')  //here, Function is constructor
console.log(sum(10,20))

const obj=new Object({name:'Aarish',age:5})

console.log(obj)*/

//14.5 nothing

//15.1 Assynchronous-Non Blocking

/*console.log('Before') //Syschronous block code, means it will print this first, after that next step

function fetchuser(){
    setTimeout(() => {
        console.log('Fetching user from database'); //Assynchronous non block code, it will print after 2ms, but it will let others continue
        return {
            name: 'Aarish',
            age: 5,
        }
    }, 2000);
}

const user=fetchuser()
console.log(user)
console.log('after')*/ //Syschronous block code, means it will print this first, after that next step

//15.2 Callbacks

/*function fetchuser(userID,callback){
    setTimeout(() => {
        console.log('Fetching user from database'); //Assynchronous non block code, it will print after 2ms, but it will let others continue
        const fetchuser= {
            id:userID,
            name: 'Aarish',
            email: 'aashor.bd@yahoo.com',
        };
        callback(fetchuser);
    }, 2000);
}

fetchuser(123,function(user){  //here, user is the callback function fetchuser
    console.log(user)
})*/

//15.3 callbacks hell

/*function fetchuser(userID,callback){
    setTimeout(() => {
        console.log('Fetching user from database'); //Assynchronous non block code, it will print after 2ms, but it will let others continue
        const fetchuser= {
            id:userID,
            name: 'Aarish',
            email: 'aashor.bd@yahoo.com',
        };
        callback(fetchuser);
    }, 2000);
}

fetchuser(123,function(user){  //here, user is the callback function fetchuser
    console.log(user)
    sendemail(user.email,function(response){
        console.log(response.sucess);
    });
    
});
function sendemail(useremail,callback){
    setTimeout(function(){
        console.log('Sending mail to user...')
        const response={sucess:true}
    callback(response);
},2000) 
}*/

//15.4 Promise

/*setTimeout(function(){
    console.log('Hello')
},2000)*/  //pending for 2 sec, after then output


/*const promise=new Promise(function(resolve,reject){
setTimeout(() => {
    //resolve(2)
    reject(new Error('error!!'))
},2000);
})
console.log(promise)
promise.then(function(result){
    console.log(result)
}).catch(function(err){
    console.log(err) //(err.message)
})*/

//15.5 Replacing callbacks with promises

/*function fetchuser(userID){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching user from database'); //Assynchronous non block code, it will print after 2ms, but it will let others continue
            const user= {
                id:userID,
                name: 'Aarish',
                email: 'aashor.bd@yahoo.com',
            };
            resolve(user);
            //reject(new Error('error!!'))
        }, 2000);
    })
    return promise;
}

function sendemail(useremail){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Sending mail to user...')
             const response={sucess:true};
             resolve(response)
    },2000)
    }) 
    return promise
}

fetchuser(123).then((user)=>sendemail()).then((response)=>console.log(response)).catch((er)=>console.log(er.message))*/

//15.6 Dealing with multiple promises

/*  const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    },2000);
})

const promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(2) //reject(neW Error('Error!!))
    },5000);
})

Promise.all([promise1,promise2]).then((res)=>console.log(res)).catch((er)=>console.log(er))*/

//15.7 Async Await Function

/*function fetchuser(userID){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Fetching user from database'); //Assynchronous non block code, it will print after 2s, but it will let others continue
            const user= {
                id:userID,
                name: 'Aarish',
                email: 'aashor.bd@yahoo.com',
            };
            resolve(user);
            //reject(new Error('error!!'))
        }, 2000);
    })
    return promise;
}

function sendemail(useremail){
    const promise=new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Sending mail to user...')
             const response={sucess:true};
             resolve(response)
    },2000)
    }) 
    return promise
}
async function dbinfo(){
    try{
        const user= await fetchuser(123);
        const response= await sendemail(user.email);
        console.log(response)
    }
    catch(err){
console.log(err);
    }
 }
 dbinfo()*/

 //15.8 Ajax call using fetch web API_promise

 //Ajax is used for client to server data communication, here our web browser is client in practice session.

 /*const gitapi=fetch('https://api.github.com/users/andrew')

 gitapi.then((res)=>res.json())
       .then((profile)=>console.log(profile))
       .catch((err)=>console.log(err))
 console.log(gitapi)*/

 //15.9 Ajax call using fetch web API_Asynce await

 /*async function getinfofromgit(){
     try{
    const res= await fetch('https://api.github.com/users/andrew')
    const profile= await res.json()
    console.log(profile);
     }
     catch(err){
        console.log(err)
     }
 }
getinfofromgit()*/

//16.1 to 16.8 Document object model in Microblog folder.

//17.1 Local STORAGE & SESSION storage

//17.2 Sorting, getting, updating from local storage

/*localStorage.setItem('name','Sami') //Parameter is string here always
localStorage.setItem('age',30)

const age= localStorage.getItem('age')
console.log(age)

localStorage.setItem('name','Aarish')
console.log(localStorage.getItem('name'))*/

//17.3 Removing and clear from local storage

/*localStorage.removeItem('name')
localStorage.removeItem('age')*/
//localStorage.clear() //To clear all data from local storage

//17.4 Stringify and parsing data from local storage

/*const users=[
    {name:'Sami', age:30},
    {name:'Aarish',age:5}
]

localStorage.setItem('users',JSON.stringify(users)) //array to string, json format

const usersfromLs=localStorage.getItem('users') 

console.log(JSON.parse(usersfromLs))*/

//17.5 Session storage, session storage vs localstorage

/*sessionStorage.setItem('name','Sami') //data deleted when we close the browser
localStorage.setItem('name','Sami')*/  //data persistent, data is saved untill we clear it.





