/*---------------------------------- ASSIGNMENT 01-------------------------------*/
/*---------------------------------- ALERTS-------------------------------*/
/*

// Question 01
alert("Assalam-o-Alikum")

//Question 02
alert("Error! Please enter a valid passward");



//Question 03
alert("Welcome to JS Land.... "+ "\n" +"  Happy coding!");




Question 04
alert("Welcome to js Land.........") ;
alert("Happy Coding!"+"/n"+"");






//Question 05
alert("Hello I can run JS through my web browser console");




*/

/*---------------------------------- VARIABLES FOR STRINGS-------------------------------*/
/*---------------------------------- ASSIGNMENT 02-------------------------------*/
/*
//Question 01
var username;






//Question02
var myName="Hira Khan";







//Question 03
var message="Hello World";
alert(message);









//Question 04
var name=prompt("Enter your name");
var age=prompt("Enter your age");
var qua=prompt("Enter your qualification");
alert(name);
alert(age + " years old");
alert(qua);





//Question 05
var p= "PIZZA"
var p1 ="";
for (var a=0;a<p.length;a++)
{
    for(var b=0;b<p.length-a;b++)
    {
 p1=p1+p[b]
    }
    p1=p1+"\n";
}
alert(p1);







//Question 06
var email="Hirak0373@gmail.com";
alert("My email address is "+ email)





//Question 07
var book ="A smarter way t learn javascript";
alert("I am trying to learn from the book "+ book);






//Question 08
document.write("yah! I can write html content through javascript");





//Question 09
var a ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
document.write(a);
*/
/*---------------------------------- VARIABLES FOR NUMBERS-------------------------------*/
/*---------------------------------- ASSIGNMENT 03-------------------------------*/
/*

//Question 01
var age = 21;
alert("I am "+ age + " years old");









//Question 02

var n = 14;
n++;
alert("You have visited this site "+ n + " times");









//Question 03
var birthYear =1999;
document.write("My birth year is "+ birthYear +"<br>"+" Date type of my decleared variable is number");







//Question 04
var Visitors_name ="John Doe";
var Product_title= "T-shirt";
var Quantity = 5;
var store = "XYZ clothing store";

document.write("<b>"+Visitors_name +"</b>" + " ordered <b>" +Quantity+" "+ Product_title+"</b>(s) on "+store);








*/
/*---------------------------------- VARIABLE NAMES: LEGAL & ILLEGAL-------------------------------*/
/*---------------------------------- ASSIGNMENT 04-------------------------------*/
/*
//Question 01
var a ,b ,c ;





//Question 02
var a1,a2,a3,_a4,a$5;
var .a ,#ree ,f*c break, alert;




//Question 03
document.write("<b>Rules for naming JS variables</b><br><br>");
document.write("Variables must begin with a letter,$ or_. For example:$name,_name or name<br>");
document.write("Variable names are case sensetive<br>");
document.write("Variable names should not be JS keywords<br>"); 




/*---------------------------------- MATH EXPRESSIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 05-------------------------------*/
/*
// Question 01
var a =+prompt("Enter 1st number");
var b =+prompt("Enter 2nd number");
var c = a + b;
document.write("Sum of "+ a +" and " + b +" is " + c );














// Question 02
var c = a - b;
document.write("<br>Subtraction of "+ a +" and " + b +" is " + c  +"<br>");
var c = a * b;
document.write("Multipication of "+ a +" and " + b +" is " + c +"<br>");
var c = a / b;
document.write("Division of "+ a +" and " + b +" is " + c +"<br>");
var c = a % b;
document.write("Modulus of "+ a +" and " + b +" is " + c +"<br>");





//Question 03
var a;
document.write("Value after variable declaration is: "+ a+"<br>");
a = 5;
document.write("Intialized value is : "+ a +"<br>");
a= a+1;
document.write("Value after increment is: "+ a +"<br>");
a=a+7;
document.write("Value after addition is: "+a+"<br>" );
a=a-1;
document.write("Value after decrement is: "+ a +"<br>");
a= a % 3;
document.write("Remainder is: "+a+"<br>");





//Question 04
var ticket_price = 600;
document.write("Total cost to buy 5 tickets to a movie is "+ 5*ticket_price+"PKR");












//Question 05
var b  =5;
for ( var a =1;a<=10;a++)
{

document.write(b +" X "+a+" = "+b*a+"<br>");
}








//Question 06
var CT=25;
var FT=70;
var C=(FT-32)*5/9;
var F=(CT*9/5)+32;
document.write(CT+"<sup>o</sup>C"+" is "+F+"<sup>o</sup>F<br>");
document.write(FT+"<sup>o</sup>F"+" is "+C+"<sup>o</sup>C");













//Question 07
var item1_price=650;
var item2_price=100;
var item1_qua=3;
var item2_qua=7;
var sc =100; 
var chk ="Shopping Cart";
chk = chk.fontsize(20);
var total=(item1_price*item1_qua)+(item2_qua*item2_price)+sc;
document.write(chk+"<br><br>");
document.write("Price of item 1 is: "+item1_price+"<br>");
document.write("Quantity of item 1 is: "+item1_qua+"<br>");
document.write("Price of item 2 is: "+item2_price+"<br>");
document.write("Quantity of item 2 is: "+item2_qua+"<br>");
document.write("Shipping Charges: "+sc+"<br><br>");
document.write("Total cost of order is: "+total+"<br>");












//Question 08
var marks_ob=804;
var total_marks=980;
var per=(marks_ob/total_marks)*100;
var chk ="Marks Sheet";
chk = chk.fontsize(20);
document.write(chk + "<br><br>")
document.write("Total Marks: "+total_marks+"<br>");
document.write("Marks Obtained: "+marks_ob+"<br>");
document.write("Percentage: "+per);






//Question 09
var t =(10 * 104.80 )+(25 * 28);
var c ="Currency in PKR";
c =c.fontsize(20);
document.write(c + "<br><br>");
document.write("Total Currency in PKR: "+t);














//Question 10
var a = 7;
a =(((a + 5)*10)/2);










//Question 11
var birthYear=1992
var currentYear=2020;
var rslt=currentYear-birthYear;
var c = "Age Calculator";
c =c.fontsize(20);
document.write(c+"<br><br>");
document.write("Current Year: "+currentYear+"<br>");
document.write("Birth year: "+birthYear+"<br>");
document.write("Your age is: "+rslt);




//Question 12:
var r = 20;
var pi=3.142;
var c =2*pi*r;
var ac = pi * (r*r);
var z ="The Geometrizer";

z =z.fontsize(20);
document.write(z+"<br><br>");
document.write("Radius of a circle is: "+r+"<br>");
document.write("The Circumference is: "+c+"<br>");
document.write("The area is: "+ac);










//Question 13
var c = "The Lifetime Supply Calculator"
c = c.fontsize(20);

var s = "lays";
var age = 21;
var max_age=90;
var estimated_amount_per_day=2;
var total=(max_age-age)*estimated_amount_per_day;
document.write(c+"<br><br>");
document.write("Favurite snack: "+s+"<br>");
document.write("Current age: "+age+"<br>");
document.write("Estimated max age: "+max_age+"<br>");
document.write("Amount of snacks per day: "+estimated_amount_per_day+"<br>");
document.write("You will need "+total+" "+s+" to last you until the rip old age of "+max_age);















*/












/*---------------------------------- MATH EXPRESSIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 06-------------------------------*/
/*---------------------------------- Chapter 6-9-------------------------------*/
/*
//Question 01
var a = 10;
document.write("Results: "+"<br>");
document.write("The value of a is: "+a+"<br>");
document.write(".......................<br><br>");
document.write("The value of ++a is: "+ ++a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of a++ is: "+ a++ +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");
document.write("The value of --a is: "+ --a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The value of a-- is: "+ a-- +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");




//Question 02:
var a=2,b=1;
document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
var r = --a - --b + ++b + b--;

document.write("result is: "+r+"<br>");
// --a = 1
//--a - --b = 1 - 0 = 1
//--a - --b + ++b = 1 - 0 + 1 = 2
//--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3










//Question 03
var name = prompt("Enter your name: ");
document.write("Assalam-o-alikum "+name);





//Question 05

var b ;
b = prompt("Enter a number: ");
if (b === "")
{
    b = 5;
}
for ( var a =1;a<=10;a++)
{

document.write(b +" X "+a+" = "+b*a+"<br>");
}




//Question 06

var a =prompt("Enter 1st subject name: ");
var b =prompt("Enter 2nd subject name: ");
var c =prompt("Enter 3rd subject name: "); 
var a1 = +prompt("obtained marks of "+a+": ");
var b1 = +prompt("obtained marks of "+b+": ");
var c1 = +prompt("obtained marks of "+c+": ");

//var a = "Maths";
//var b = "English";
//var c = "Urdu";
//var a1 =54;
//var b1 = 54;
//var c1 = 54;
var t = 100;
var tt = t+t+t;


var total = a1 + b1 + c1;
var per1 = (a1/t)*100;
var per2 = (b1/t)*100;
var per3 = (c1/t)*100;
var per = (total/tt)*100;
var l1 = 9 - a.length;
document.write("<table><b><tr><td>Subject</td><td>Total Marks </td><td>Obtained Marks</td><td>Percentage</td> </tr></b><tr></tr>")
document.write("<tr>"+"<td>"+a+"</td><td>"+t+ "</td><td>"+ a1+"</td><td>"+per1 +"%</td>"+"</tr>");
document.write("<tr><td>"+b+"</td><td>"+t+"</td><td>"+b1+"</td><td>"+per2 +"%</td></tr>");
document.write("<tr><td>"+c+"</td><td>"+t+"</td><td>"+c1+"</td><td>"+per3 +"%</td></tr>");
document.write("<tr><td></td><td>"+(tt)+"</td><td>"+total+"</td><td>"+per+"%</td></tr></table>");
*/
/*---------------------------------- USER INPUT & CONDITIONAL STATEMENT-------------------------------*/
/*---------------------------------- ASSIGNMENT 07-------------------------------*/
/*---------------------------------- Chapter 9 - 11-------------------------------*/
/*





//Question 01
var city=prompt("Enter a city: ");
if (city === "karachi")
{
    alert("Welcome to city of lights");
} 
else
{
    alert("Welcome..");
}













//Question 02
var gender=prompt("Enter your gender: ");
if (gender === "male")
{
    alert("Good Morning Sir");
} 
else if(gender === "female")
{
    alert("Good Morning Ma'am");
}




















//Question 03
var colour=prompt("Enter a colour: ");
if (colour === "red")
{
    alert("Must Stop");
} 
else if(colour === "yellow")
{
    alert("Ready to move");
}
else if(colour === "green")
{
    alert("move now");
}






//Question 04
var fuel = +prompt("Enter a remaining fuel in a car(in liters): ");
if (fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}












//Question 05
 var a = 4;
 if (++a === 5){
    alert("given condition for variable a is true");
}

//Display

var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

//Not Display



var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

//Condion 2 and 4 display



var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//Alert mxg will display


if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
// True will dispaly
if("car" < "cat"){
    alert("car is smaller than cat");
    }
//alert mxg display becz both word lenght are same




//Question 06
var a = +prompt("Enter marks of 1st subject: ");
var b = +prompt("Enter marks of 2nd subject: ");
var c = +prompt("Enter marks of 3rd subject: ");
var t = +prompt("Enter total marks: ");
var obtained = a + b + c;
var per = (obtained / t)*100;
document.write("Total marks: "+t+"<br>");
document.write("Marks obtained: "+obtained+"<br>");
if(per<=100 && per>=80)
{
    document.write("Grade: A-one<br>");
    document.write("Remarks: Excellent<br>");

}
else if(per<=79 && per>=70)
{
    document.write("Grade: A<br>");
    document.write("Remarks: Good<br>");

}
else if(per<=69 && per>=60)
{
    document.write("Grade: B<br>");
    document.write("Remarks: You need to improve<br>");

}
else if(per<60)
{
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");

}


//Question 07
var b =6;
var a = +prompt("Store a secret number (ranging from 1 to 10)");

if (a === b)
{
    alert(a + "Bingo! Correct answer");
}

else if(a === --b)
{
   
    alert(  "Close enough to the correct answer");
}

//Question 08
var n = prompt("Enter a number: ");
if (n % 3 === 0 )
{
    alert("number is divisible by 3.");
}
else
{
    alert("Not divisible by 3.");
} 

//Question 09
var n = prompt("Enter a number: ");
if (n % 2 === 0 )
{
    alert("number is even.");
}
else
{
    alert("number is odd.");
} 

//Question 10
var t = +prompt("Enter a tempreture: ");
if (t > 40)
{
    alert("It is too hot outside.");
}
else if (t <= 39 && t > 30)
{
    alert("The Weather today is Normal.");
}
else if (t <= 29 && t > 20)
{
    alert("Today’s Weather is cool.");
}
else if(t <= 19 && t > 10)
{
    alert("OMG! Today’s weather is so Cool.");
}









//Question 11
a = +prompt("Enter 1st number: ");
b = +prompt("Enter 2nd number: ");
o = prompt("Enter operator: ");
if (o === '+')
{
    alert(a+b);
}
else if (o === '-')
{
    alert(a-b);
}
else if (o === '*')
{
    alert(a8b);
}
else if (o === '/')
{
    alert(a/b);
}
if (o === '%')
{
    alert(a%b);
}


*/
/*---------------------------------- IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS-------------------------------*/
/*---------------------------------- ASSIGNMENT 12-13-------------------------------*/
/*

//Question 01
var ch = prompt("Enter a character: ");
var index = 0;

var i = ch.charCodeAt(index);
if(i >=65 && i<=90)
{
document.write("Given input is a upper case letter");
}
else if(i >=97 && i<=122)
{
document.write("Given input is a lower case letter");
}
else if(i >=48 && i<=57)
{
document.write("Given input is a number");
}
else
{
    document.write("Given character is a special character");
}


//Question 02
var a =prompt("Enter 1st integer: ");
var b =prompt("Enter 2nd integer: ");
if (a > b)
{
    document.write(a);
} 
else if(b > a)
{
    document.write(b);
}
else if(a === b )
{
    document.write("a and b are equal");
}



//Question 03
var n = +prompt("Enter a number: ");
if(n > 0)
{
    document.write("Number is positive");
}
else if ( n === 0)
{
    document.write("Number is zero");
}
else if(n < 0)
{
    document.write("Number is negative");
}


//Question 04

var ch = prompt("Enter a character: ");
if (ch === "a" ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u')
{
    document.write("True");
}
else{
    document.write("False");
}






//Question 05
var pas= "@hsk"
var a = prompt("Enter your passward: ");
if (a === "")
{
    prompt("Please enter a passward: ");
}
else if (a === pas)
{
    document.write("Correct! The password you entered matches the original password");
}
else
{
    document.write("Incorrect password");
}



//Question 06
var greeting;
var hour = 13;
if (hour < 18)
 {
greeting = "Good day";
document.write(greeting);
 }
else
{
greeting = "Good evening";
document.write(greeting);
}





//Question 07
var time = prompt("Enter a time in 24 hours clock format(like:1935): ");
if(time >= 0000 && time < 1200)
{
alert("Good Morning");
}
else if(time >= 1200 && time < 1700)
{
    alert("Good Afternoon");
}
else if(time >= 1700 && time <2100)
{
    alert("Good Evening");
}
else if(time >= 2100 && time <=2359)
{
    alert("Good Night");
}
*/
/*---------------------------------- ARRAYS -------------------------------*/
/*---------------------------------- ASSIGNMENT 13 - 15 -------------------------------*/
/*
//Question 01
var a = [];



//Question 02
var s = new Array(3,2,5,"ali");


//Question 03:
var b = ["Hira","Ali","Taimoor","Hina","Rahila"];


//Question 04:
var c = [1,2,3,4,5,6,7,8,9];


//Question 05:
var d = [true,false,true,true,false];


//Question 06
var e = ["Hira",'s',21,true];


//Question 07
var qua = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
var b = 1;
var z ="Qualification";
z =z.fontsize(20);
document.write(z+"<br><br>");
for(var a = 0 ; a<qua.length;a++)
{
    document.write(b+") "+qua[a] +"<br>");
    b++;
}




//Question 08
var s = ["hira", "ali","rahila"];
var score = [400,350,375];
var t = 500;
var s1 = [];
for(var x = 0 ; x< score.length ; x++)
{
    s1[x]= (score[x]/t)*100;
}
for (var x = 0 ; x < s1.length ; x++)
{
    document.write("Score of "+s[x]+" is "+score[x]+". Percentage: "+s1[x]+"%<br>");
}




//Question 09
var colour = ["red","orange","yellow","purple"];
document.write(colour+"<br>");
var ba= prompt("Enter a colour you want to add at the begining of the array: ");
colour.unshift(ba);
document.write(colour+"<br>");
var ba= prompt("Enter a colour you want to add at the end of the array: ");
colour.push(ba);
document.write(colour+"<br>");
colour.unshift("silver","white");
document.write(colour+"<br>");
colour.shift();
document.write(colour+"<br>");
colour.pop();
document.write(colour+"<br>");
var j = +prompt("At which index you wants to add a color: ");
var v = prompt("Enter a colour name: ");
colour.splice(j-1,0,v);
document.write(colour+"<br>");

var j = +prompt("At which index you wants to delete a color: ");
var v = prompt("Enter a how many colour you want to delete: ");
colour.splice(j-1,v);
document.write(colour+"<br>");



//Question 10
var a=[320,230,450,112,456,246];
document.write(a+"<br>");
a =a.sort()
document.write(a);




//Question 11
var cities = ["karachi","lahore","Islamabad","Quetta","Peshawar"];
var selected_cities = [cities.slice(1,4)];
document.write(cities+"<br>");
document.write(selected_cities);


//Question 12
var arr = ["This" , " is ",  "my" , " cat"];
document.write(arr.join(" "));


//Question 13(chk)
var devices = ["Keyboard","mouse","speaker","joystick","camera"];
document.write("Devices: <br>");
for (var x = 0 ;x<devices.length;x++)
{
    var z =devices[x];
    devices.unshift();
    document.write(z+"<br>");
}





//Question 14
var devices = ["Keyboard","mouse","speaker","joystick","camera"];
document.write("Devices: <br>");
for (var x = devices.length ;x>0;x--)
{
    var z =devices.pop();
   
    document.write(z+"<br>");
}



//Question 15
var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
document.write("<select>");

for(var a = 0;a<phone_manufacturers.length;a++)
{
    document.write("<option>"+phone_manufacturers[a]+"</option>");
}
document.write("</select>");


*/

/*---------------------------------- ARRAYS AND LOOP  -------------------------------*/
/*---------------------------------- ASSIGNMENT 17-20  -------------------------------*/
/*
//Question 01

var myArr = [[],[],[]];

//Question 02
var a =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var l = a[0].length;
for (var x = 0; x<a.length; x++)
{
    for(var y =0 ;y<l;y++)
    {
        document.write(a[x][y]);
    }
    document.write("<br>");
}


//Question 03
for(var b = 0 ; b<=10;b++)
{
    document.write(b+"<br>");
}


//Question 04
var a = +prompt("Enter a number to show its multiication table: ");
var b =+prompt("Enter lenght of multipication table: ");
for (var x = 1 ; x <= b ; x++)
{
    document.write(a + " X " + x + " = "+ x*a +"<br>");
}


//Question 05
var fruits = ["apple", "banana", "mango", "orange","strawberry"];
for(var a = 0; a<fruits.length;a++ )
{
    document.write(fruits[a]+"<br>");
}
for(var b = 0;b<fruits.length;b++)
{
    document.write("Element at index "+b+ " is "+fruits[b]+"<br>");
}



//Question 06
var Counting=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var Reverse_counting= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var Even= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var Odd= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
var Series= ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
document.write("<b>Counting".fontsize(14)+"</b><br><br>"+Counting+"<br>");
document.write("<b>Reversecounting".fontsize(14)+"</b><br><br>"+Reverse_counting+"<br>");
document.write("<b>Even".fontsize(14)+"</b><br><br>"+Even+"<br>");
document.write("<b>Odd".fontsize(14)+"</b><br><br>"+Odd+"<br>");
document.write("<b>Series".fontsize(14)+"</b><br><br>"+Series+"<br>");



//Question 07
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var s = prompt("Welcome to ABC bakery what do you want: ");
var g = A.includes(s);

if (g === true)
{
    document.write(s+" is <b> available</b> at index number "+A.indexOf(s)+" in our bakery");
}
else
{
    document.write("We are sorry "+s+" is <b> not available</b> in our bakery");
}




//Question 08
var A = [24, 53, 78, 91, 12];
document.write("Array Items: "+A+"<br>");
var d =0;
for (var b = 0; b< A.length;b++)
{
    if (d<A[b])
    {
        d = A[b];
    }
}
document.write("Largest Number is: "+d);


//Question 09
for (var a = 1; a <=20 ; a++)
{
    var k = 5*a+", ";
    document.write(k);
    

}
*/