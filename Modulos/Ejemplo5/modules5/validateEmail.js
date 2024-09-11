
function validateEmail() {
  
    let format = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (format.test(email.value)) {
    return true
    } else {
      return false
    }
  }

  export {validateEmail}