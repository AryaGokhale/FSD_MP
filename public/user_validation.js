//import {get_value} from "../user_db_management.js";

function submit_form()
{
    var name = document.getElementById("uname").value;
    var email = document.getElementById("emailid").value;
    var password = document.getElementById("pass").value;
    var role = document.getElementById("role").value;

    validity = validate(name, email, password);
    
    //return validity;
    // if(validity)
    // {
    //     ;
    // }
    //get_value(email, name, password)

}


function validate(name, email, password, role)
{

    validity = true;
    if(name == '' || email == '')
    {
        alert("Fill all the credentials.");
        validity = false;
    }

    if(password.length < 8)
    {
        alert("Password is too weak");
        validity = false;
    }  
    

    return validate;
}
