function validateForm(){
var user = document.getElementById("inp");
var email = document.getElementById("mail");
var validEmail =   /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var textarea = document.getElementById("textArea");

 if(user.value === ""){
 document.getElementById("textError").innerHTML = "The field is required"
 user.style.border = '2px solid';
    user.style.borderColor = 'red';
 return false;
 }
else{
    document.getElementById("textError").innerHTML = "";
    user.style.border = '1px solid';
    user.style.borderColor = 'white';
    
}  
if(email.value === ""){
    document.getElementById("emailError").innerHTML = "The field is required"
    email.style.border = '2px solid';
       email.style.borderColor = 'red';
       
    return false;
    }
   if(!validEmail.test(email.value)){
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        email.style.border = '2px solid';
       email.style.borderColor = 'red';
     
       return false;
        //var flag = 0;
      }    
   else{
       document.getElementById("emailError").innerHTML = "";
       email.style.border = '1px solid';
       email.style.borderColor = 'white';
   } 
   if(textarea.value === ""){
    document.getElementById("messageError").innerHTML = "The field is required"
    textarea.style.border = '2px solid';
       textarea.style.borderColor = 'red';
    return false;
    }
    else{
        document.getElementById("meassageError").innerHTML = "";
        textarea.style.border = '1px solid';
        textarea.style.borderColor = 'white';
    }
}