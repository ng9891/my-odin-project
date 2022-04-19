(() => {
  function main() {
    const form = document.querySelector('#myForm');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('hello');
    });

    const submitBtn = document.querySelector('.form-button .submit-btn');
    submitBtn.addEventListener('click', () => {
      form.submit();
    });
    // form.submit();
  }
  console.log('hi');
  main();
})();
