var password = document.getElementById("password")
  , repeatpassword = document.getElementById("repeatpassword");

function validatePassword(){
  if(password.value != repeatpassword.value) {
    repeatpassword.setCustomValidity("Passwords Don't Match");
  } else {
    repeatpassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
repeatpassword.onkeyup = validatePassword;