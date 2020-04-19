 // Disable form submissions if there are invalid fields
 (function() {
     'use strict';
     window.addEventListener('load', function() {
         // Get the forms we want to add validation styles to
         var forms = document.getElementsByClassName('needs-validation');
         // Loop over them and prevent submission
         var validation = Array.prototype.filter.call(forms, function(form) {
             form.addEventListener('submit', function(event) {
                 if (form.checkValidity() === false) {
                     event.preventDefault();
                     event.stopPropagation();
                 }
                 form.classList.add('was-validated');
             }, false);
         });
     }, false);
 })();
 //  user name validation
 function validateName(input) {
     var regExp = /^[a-zA-Z ]*$/;
     if (regExp.test(input)) {
         document.getElementById("nmsg").innerHTML = "Valid name format.";
         document.getElementById("nmsg").style.color = "green";
         return true;
     } else {
         document.getElementById("nmsg").innerHTML = "Invalid name format";
         document.getElementById("nmsg").style.color = "red";
         return false;
     }
 }


 // email validation
 function validateEmailid(input) {
     var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     if (emailFormat.test(input)) {
         document.getElementById("emsg").innerHTML = "Valid email format.";
         document.getElementById("emsg").style.color = "green";
         return true;
     } else {
         document.getElementById("emsg").innerHTML = "Invalid email format";
         document.getElementById("emsg").style.color = "red";
         return false;
     }
 }
 // phone number
 function numbersOnly(e) {
     if (!(e.keyCode >= 48 && e.keyCode <= 57)) {
         document.getElementById("pmsg").innerHTML = "Sorry! only numbers allowed.";
         return false;

     } else {
         document.getElementById("pmsg").innerHTML = "";
         return true;
     }
 }
 // phone format 
 function validatePhone(input) {
     var regExp = /^[6-9]\d{9}$/;
     if (regExp.test(input)) {
         document.getElementById("pmsg").innerHTML = "Valid Phone Format.";
         document.getElementById("pmsg").style.color = "green";
         return true;
     } else {
         document.getElementById("pmsg").innerHTML = "inValid Format";
         document.getElementById("pmsg").style.color = "red";
         return false;
     }
 }
 //Password meter
 function validatePassword(password) {

     // Do not show anything when the length of password is zero.
     if (password.length === 0) {
         document.getElementById("msg").innerHTML = "";
         return;
     }
     // Create an array and push all possible values that you want in password
     var matchedCase = new Array();
     matchedCase.push("[$@$!%*#?&]"); // Special Charector
     matchedCase.push("[A-Z]"); // Uppercase Alpabates
     matchedCase.push("[0-9]"); // Numbers
     matchedCase.push("[a-z]"); // Lowercase Alphabates

     // Check the conditions
     var ctr = 0;
     for (var i = 0; i < matchedCase.length; i++) {
         if (new RegExp(matchedCase[i]).test(password)) {
             ctr++;
         }
     }
     // Display it
     var color = "";
     var strength = "";
     switch (ctr) {
         case 0:
         case 1:
         case 2:
             strength = "Very Weak Password";
             color = "red";
             break;
         case 3:
             if (pwd.value.length >= 5 && val.length <= 8)
                 strength = "Medium Password";
             color = "orange";
             break;
         case 4:
             if (pwd.value.length >= 8)
                 strength = "Strong Password";
             color = "green";
             break;
     }
     document.getElementById("msg").innerHTML = strength;
     document.getElementById("msg").style.color = color;
 }
