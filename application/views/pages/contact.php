<div class="gap-3 row col-12 position-relative mx-auto py-5">
    
<form method="post" action="<?= base_url() ?>Crud/contactForm" id="contactForm" class="row bg-secondary text-white font-weight-bold rounded p-3 contact-form mx-auto g-3 needs-validation my-5" novalidate>
    <div class="col-12 col-md-6">
        <label for="firstName" class="form-label">First name</label>
        <input type="text" class="form-control" id="firstName" name="firstName" required>
        <div class="invalid-feedback">
            Please provide your first name.
        </div>
    </div>
    <div class="col-12 col-md-6">
        <label for="lastName" class="form-label">Last name</label>
        <input type="text" class="form-control" id="lastName" name="lastName" required>
        <div class="invalid-feedback">
            Please provide your last name.
        </div>
    </div>
    <div class="col-12 col-md-6">
        <label for="email" class="form-label">E-Mail</label>
        <input name="email" type="email" class="form-control" id="email" required>
        <div class="invalid-feedback">
            Please provide a valid email address.
        </div>
    </div>
    <div class="col-12 col-md-6">
        <label for="phoneNumber" class="form-label">Phone Number</label>
        <input type="number" name="phoneNumber" class="form-control" id="phoneNumber" required>
        <div class="invalid-feedback">
            Please provide a valid phone number.
        </div>
    </div>
    <div class="form-floating text-dark col-12">
        <textarea class="form-control" required placeholder="Enter your full address" id="address" name="address" style="height: 100px"></textarea>
        <label for="address">Full Address</label>
        <div class="invalid-feedback">
            Please provide your address.
        </div>
    </div>
    <div class="form-floating text-dark col-12">
        <textarea class="form-control" required placeholder="Leave a message here" id="message" name="message" style="height: 100px"></textarea>
        <label for="message">Message</label>
        <div class="invalid-feedback">
            Please provide a message.
        </div>
    </div>
    <div class="col-12 text-center">
        <button class="btn btn-primary" type="submit">Submit form</button>
       
    </div>
</form>

<div class="position-absolute row col-m-6 col-12 top-0  strat-0 traslate-middle  mx-auto my-3 rounded py-3" id="alertPlaceholder">
    <?php if ($this->session->flashdata('status')): ?>
    <script>
        window.onload = function() {
            <?php if ($this->session->flashdata('status') === 'success'): ?>
                showAlert('Form submitted successfully!', 'success');
            <?php else: ?>
                showAlert('Failed to submit the form. Please try again.', 'danger');
            <?php endif; ?>
        };
    </script>
    <?php endif; ?>
  
</div>




</div>