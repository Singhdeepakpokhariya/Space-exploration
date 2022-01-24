// ----Index page----

function checkEmail()
{  
   var email = document.getElementById("txtEmail");

   var filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;      

    if(!filter.test(email.value))
    {
        alert ("Please Enter a valid Email ");

        //return false;
        // The test() method tests for a match in a string.

        //This method returns true if it finds a match , otherwise it return false.
    }
    else
    {
        alert ("submit successfully");
    }
}   


//----contact----

function display()
{
    var name=document.new.user.value;
    var email = document.getElementById("emailtext");

    var filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,5})+$/;  
    

    if(name=="null"||name=="")
    {
        alert("name can't be blank"); //return false
    }
    else if(!filter.test(email.value))
    {   
        alert ("Please Enter a valid Email "); //return false
    }
    else{
        alert("submitted successfully")
    }
}