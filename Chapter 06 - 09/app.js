// Task: 01
var a = +prompt("Enter any Number: ");

document.write("<h3>RESULT: </h3>");
document.write("<h3> The value of 'a' is: "+  a + "<br> </h3>");
document.write("*************************** <br><br>");

var b = ++a;
document.write("The value of '++a' is: "+  b + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var c = a++;
document.write("The value of 'a++' is: "+  c + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var d = --a;
document.write("The value of '--a' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

var e = a--;
document.write("The value of 'a--' is: "+  d + "<br>");
document.write("Now The value of 'a' is: "+  a + "<br><br>");

// Task: 02
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0   +  1  +  1
alert(result);

// Explain the output at each stage:

// --a;
// Decrement: --a = 2 - 1 = 1

// --a - --b;
// (--a = 1) - (--b = 0) --> 1 - 0 = 1

// --a - --b + ++b;
// (--a = 1) - (--b = 0) + (++b = 1) =  -->  1 - 0 + 1 = 2

// --a - --b + ++b + b--;
// (--a = 1) - (--b = 0) + (++b = 1) + (b-- = 1) =  -->  1 - 0 + 1 + 1 = 3

// Task: 03
var name = prompt("Enter your Name: ");
alert("\nHello " + name + "\nNice to meet you...");

// Task: 04
var tableNum = +prompt("Enter Number: ");

for(i = 1; i < 11; i++) {
    document.write(tableNum + " x " + i + " = " + tableNum * i + "<br><br>");
}

// Task: 05

        // Question No 5. Marksheet
        document.write("<h3>" + "Marksheet" + "</h3>");

        // a) Take three subjects name from user and store them in 3 different variables. 
        subjectName1 = prompt("Enter Name of Subject 1: ");
        subjectName2 = prompt("Enter Name of Subject 2: ");
        subjectName3 = prompt("Enter Name of Subject 3: ");

        // b) Total marks for each subject is 100, store it in another variable.
        var totalMarks = 300;
        
        // c) Take obtained marks for first subject from user and stored it in different variable.
        subjectMarks1 = +prompt("Enter Marks of " + subjectName1);

        // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
        subjectMarks2 = +prompt("Enter Marks of " + subjectName2);
        subjectMarks3 = +prompt("Enter Marks of " + subjectName3);

        // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
        var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3);
        var percentage = (obtainedMarks / totalMarks) * 100;
        percentage = percentage.toFixed(2);
        var percentage1 = (subjectMarks1 / 100) * 100;
        var percentage2 = (subjectMarks2 / 100) * 100;
        var percentage3 = (subjectMarks3 / 100) * 100;

        document.write("<Table>");

            document.write("<tr>");
                document.write("<th>" + "Subject"  + "</th>");
                document.write("<th>" + "Total Marks"  + "</th>");
                document.write("<th>" + "Obtained Marks"  + "</th>");
                document.write("<th>" + "Percentage"  + "</th>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subjectName1  + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subjectMarks1  + "</td>");
                document.write("<td>" + percentage1 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subjectName2  + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subjectMarks2  + "</td>");
                document.write("<td>" + percentage2 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<td>" + subjectName3  + "</td>");
                document.write("<td>" + 100  + "</td>");
                document.write("<td>" + subjectMarks3  + "</td>");
                document.write("<td>" + percentage3 + "%" + "</td>");
            document.write("</tr>");

            document.write("<tr>");
                document.write("<th>" + "</th>");
                document.write("<th>" + 300  + "</th>");
                document.write("<th>" + obtainedMarks  + "</th>");
                document.write("<th>" + percentage + "%" + "</th>");
            document.write("</tr>");


        document.write("</Table>");



























// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>")
// var subj1 = prompt("Enter Subject 01 Name: ");
// var subj2 = prompt("Enter Subject 02 Name: ");
// var subj3 = prompt("Enter Subject 03 Name: ");

// var totalMarks = 300;



//   subjectMarks1 = +prompt("Enter Marks of " + subjectName1);

 
//   subjectMarks2 = +prompt("Enter Marks of " + subjectName2);
//   subjectMarks3 = +prompt("Enter Marks of " + subjectName3);

  
//   var obtainedMarks = (subjectMarks1 + subjectMarks2 + subjectMarks3);
//   var percentage = (obtainedMarks / totalMarks) * 100;
//   percentage = percentage.toFixed(2);
//   var percentage1 = (subjectMarks1 / 100) * 100;
//   var percentage2 = (subjectMarks2 / 100) * 100;
//   var percentage3 = (subjectMarks3 / 100) * 100;

//   document.write("<Table>");

//       document.write("<tr>");
//           document.write("<th>" + "Subject"  + "</th>");
//           document.write("<th>" + "Total Marks"  + "</th>");
//           document.write("<th>" + "Obtained Marks"  + "</th>");
//           document.write("<th>" + "Percentage"  + "</th>");
//       document.write("</tr>");

//       document.write("<tr>");
//           document.write("<td>" + subjectName1  + "</td>");
//           document.write("<td>" + 100  + "</td>");
//           document.write("<td>" + subjectMarks1  + "</td>");
//           document.write("<td>" + percentage1 + "%" + "</td>");
//       document.write("</tr>");

//       document.write("<tr>");
//           document.write("<td>" + subjectName2  + "</td>");
//           document.write("<td>" + 100  + "</td>");
//           document.write("<td>" + subjectMarks2  + "</td>");
//           document.write("<td>" + percentage2 + "%" + "</td>");
//       document.write("</tr>");

//       document.write("<tr>");
//           document.write("<td>" + subjectName3  + "</td>");
//           document.write("<td>" + 100  + "</td>");
//           document.write("<td>" + subjectMarks3  + "</td>");
//           document.write("<td>" + percentage3 + "%" + "</td>");
//       document.write("</tr>");

//       document.write("<tr>");
//           document.write("<th>" + "</th>");
//           document.write("<th>" + 300  + "</th>");
//           document.write("<th>" + obtainedMarks  + "</th>");
//           document.write("<th>" + percentage + "%" + "</th>");
//       document.write("</tr>");


//   document.write("</Table>");





// var obtMarks1 = +prompt("Enter Obtained Marks in Subject 01: ");
// var obtMarks2 = +prompt("Enter Obtained Marks in Subject 02: ");
// var obtMarks3 = +prompt("Enter Obtained Marks in Subject 03: ");

// var subjTotalMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var percentage = ((subjTotalMarks / totalMarks) * 100);

// document.write("Subject 01: " + subj1 + " (100 Marks)<br>");
// document.write("Subject 02: " + subj2 + " (100 Marks)<br>");
// document.write("Subject 03: " + subj3 + " (100 Marks)<br><br>");

// document.write("Marks Obtained in 3 Subjects: " + subjTotalMarks + " / 300<br>");
// document.write("Percentage: " + percentage);