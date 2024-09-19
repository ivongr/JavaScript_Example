

function validatePassword(password) {

    if (password.length >= 4 && password.length <= 16) {
        return true;
    }
    else {
        return false;
    }
  }

  export {validatePassword}