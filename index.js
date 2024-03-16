document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById('your-name');
  const organizingParticipating = document.getElementById('organizing-participating');
  const justOrganizing = document.getElementById('just-organizing');
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Remove any existing error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    let hasError = false;

    if (!nameInput.value.trim()) {
      showError(nameInput, '* Name is required');
      hasError = true;
    } 
    
    if (!organizingParticipating.checked && !justOrganizing.checked) {
      showError(justOrganizing, '* Please select participation');
      hasError = true;
    }

    if (!hasError) {
      displayThankYou();
    }
  });

  function showError(container, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerText = message;
    error.style.color="red";
    error.style.fontFamily="Times New Roman";
    container.parentNode.appendChild(error);
    container.classList.add('error');
  }

  function displayThankYou() {
    document.body.innerHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You</title>
        <link rel="stylesheet" href="index.css">
      </head>
      <body>
        <div class="container">
          <div class="box1">
            <img src="https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=612x612&w=0&k=20&c=0mlB50r769kHmLkVcq_HpdNFGdHIA_Cu_tPqN4IKZbc=" class="image1"/>
            <h2>Thank You!</h2>
          </div>
        </div>
      </body>
      </html>
    `;
  }
});
