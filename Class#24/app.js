// //===============Chap 1================//
// //Q1
// alert("Welcome to the website")
// //Q2
// alert("Error! Please enter a valid password")
// //Q3
// alert("Welcome to JS Land...\nHappy Coding!")
// //Q4
// alert("Welcome to JS Land")
// alert("Happy Coding")
// //Q5
// console.log(alert("Hello"))
// //Q6
// //Done
// //Q7
// //Done


// //===============Chap 2================//
// //Q1
// var username;
// //Q2
// var myName = "Muhammad Saeed";
// //Q3
// var message = "Hello World"
// alert(message)
// //Q4
// var nam = "Jhone Doe"
// var age = "15 years old"
// var course= "Certified Mobile Application Development"
// alert(nam)
// alert(age)
// alert(course)
// //Q5
// var food = "PIZZA"
// alert(food + "\n" +food.slice(0,food.length-1) + "\n" +food.slice(0,food.length-2) + "\n" +food.slice(0,food.length-3) + "\n" +food.slice(0,food.length-4) + "\n" +food.slice(0,food.length-5))
// //Q6
// var email = "saeedafzal429@gmail.com"
// alert("My email address is "+ email)
// //Q7
// var book = "A smarter way to learn JavaScrip"
// alert("I am trying to learn from the Book "+ book)
// //Q8
// document.write("Yah! I can write HTML content through JavaScript")
// //Q9
// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)


//===============Chap 3================//
//Q1
// var age = 21
// alert("I am "+ age + " years old" )
//Q2
// var visits = GetCookie("counter")
// visits = parseInt(visits)+ 1;
// alert(visits)
// alert("You have visited 14 times")
// //Q3
// var birthYear = 1999
// document.write("My birth year is " + birthYear + "<br/>"+ "Data Type of my declared variable is " + typeof(birthYear))
// document.write()
//Q4
// var web = "www.xyzClothing.com"
// var name = "John Doe"
// var title = "T-shirt(s)"
// var quantity = 5
// document.write(name + " ordered "+ quantity + title + " on " + web)

//===============Chap 4================//
// //Q1
// var a,b,c
// //Q2
// //LEGAL
// var first,second,third,fourth,fifth;
// //ILLEGAL
// var 0first,1second,2third,3fourth,4fifth;
//Q3
var a = "number"
var b = "$"
var c = "_"
var d = "letter"
var e = "sensitive"
var f = "keywords"
document.write(" Variable names can only contain " + a + "," + " " + b  +" " + "and" +" " + c +  ".For example $my_1stVariable " +"<br/>")
document.writeln(" Variable must begin with a " + d + "," + " " + b  +" " + "or" +" " + c +  ".For example  $name, _name or name  " + "<br/>")
document.write("Variable names are case " + e + "<br/>")
document.write("Variable names should not be JS " + f + "<br/>")




// var a = ["Ali","Ahmed","Asad"]
// document.write("1st Name :"+ a[0] + "<br/>" + "2nd Name :" + a[1] + "<br/>" + "3rd Name :" + a[2])