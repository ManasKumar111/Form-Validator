const form=document.getElementById('form');
const password1El=document.getElementById('password1');
const password2El=document.getElementById('password2');
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isValid=false;
let passwordMatch=false;
function validateForm(){
    // Using the constraint API
    isValid=form.checkValidity();
    // Style main message for error
    if(!isValid){
        message.textContent='Please fill out all the fields';
        message.style.color='red';
        messageContainer.style.borderColor='red';
        return;  
    }
    // Check to see if Passwords match
    if(password1El.value===password2El.value){
        passwordsMatch=true;
        password1El.style.borderColor='green';
        password2El.style.borderColor='green';
    } 
    else{
        passwordMatch=false;
        message.textContent="Make sure the passwords match.";
        message.style.color='red';
        messageContainer.style.borderColor='red';
        password1El.style.borderColor='red';
        password2El.style.borderColor='red';
        // return;
    }   
    //  if form is valid and passwords match
    if(isValid && passwordsMatch){
        message.textContent='Successfully Registered!';
        message.style.color='green';
        messageContainer.style.borderColor='green';
        
    }
}

function storeFormData(){
    const user ={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value,
    };
    // Do something with the user data
    console.log(user);
}

function processFormData(e){
    e.preventDefault(); 
    // validate form
    validateForm();
    // Submit data if data is valid
    if(isValid && passwordsMatch){
        storeFormData(); 
    }

}
// Event Listener
form.addEventListener('submit',processFormData);