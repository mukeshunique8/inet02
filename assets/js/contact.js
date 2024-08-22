document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  const form = document.getElementById('contactForm');
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const address = document.getElementById('address').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate the fields
  if (firstName && lastName && email && phoneNumber && address && message) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailPattern.test(email)){

      // Form is valid, submit it
      form.classList.remove('was-validated');
      form.submit(); // Programmatically submit the form
    }else{

     
      
       showAlert('Please enter valid Email address', 'danger');

    }
      
  } else {
      // Form is invalid, show validation feedback
      form.classList.add('was-validated');
      // showAlert('Please fill out all required fields.', 'danger');
  }
});


function showAlert(message, type) {
  const alertPlaceholder = document.getElementById('alertPlaceholder');
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.role = 'alert';
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  alertPlaceholder.append(alertDiv);

  setTimeout(() => {
    alertDiv.classList.remove('show');
    alertDiv.classList.add('hide');
    setTimeout(() => {
      alertDiv.remove();
    }, 500);
  }, 3000);
}

