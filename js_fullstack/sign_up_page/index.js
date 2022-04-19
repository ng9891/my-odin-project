(() => {
  function main() {
    const onSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();
      alert('Submitted');
    };

    const form = document.querySelector('#myForm');
    form.addEventListener('submit', onSubmit);

    const samePassword = (input) => {
      const pw = input.parentElement.previousElementSibling.children.password.value;
      return input.value === pw;
    };

    const customValidity = (input) => {
      switch (input.name) {
        case 'password': {
          if (input.validity.patternMismatch) {
            input.setCustomValidity('Please use a mix of upper and lower letters & numbers.');
            return false;
          }
          break;
        }
        case 'password2': {
          if (!samePassword(input)) {
            input.setCustomValidity('Passwords are not the same.');
            return false;
          }
          break;
        }
        default:
          break;
      }
      input.setCustomValidity('');
      return true;
    };

    const formatMsg = (input) => {
      let msg = input.validationMessage;
      if (input.validity.tooShort && !input.validity.customError) {
        console.log(input.validity);
        return (msg = input.validationMessage.substring(0, 50));
      }

      switch (input.type) {
        case 'email': {
          msg = msg.substring(0, 44);
          break;
        }
        default:
          break;
      }
      return msg;
    };

    const checkError = (e) => {
      const input = e.target;
      const errorDiv = input.nextElementSibling;
      errorDiv.style.display = 'block';
      if (customValidity(input) && input.checkValidity()) {
        errorDiv.style.display = 'none';
        return (errorDiv.textContent = '');
      }

      const msg = formatMsg(input);
      errorDiv.textContent = msg;
    };

    const handleChange = (e) => {
      const input = e.target;
      const formControl = e.target.parentElement;
      formControl.classList.add('validated');
      checkError(e);
    };

    const handleInput = (e) => {
      const input = e.target;
      const formControl = input.parentElement;
      if (!formControl.classList.contains('validated')) return;

      setTimeout(() => {
        checkError(e);
      }, 500);
    };

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      input.addEventListener('change', handleChange);
      input.addEventListener('input', handleInput);
    });
  }

  main();
})();
