export function validateEmail (emailAdress)
{
  // let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regexEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  
  if (regexEmail.test(emailAdress)) {
    return true; 
  } else {
    return false; 
  }
}

