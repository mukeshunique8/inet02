<!-- LOGIN FORM -->
<div class=" position-relative container-fluid">
      <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row glass2 text-white p-4 rounded shadow-sm w-100" style="max-width: 400px;">
          <h2 class="text-center  mb-4">Login</h2>
          <form method='post' id="loginForm" action="<?= base_url() ?>Crud/userLogin">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" name="email" id="loginEmail" required>
              <div class="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" id="loginPassword" required>
              <div class="invalid-feedback">
                Please provide your password.
              </div>
            </div>
            <div class="mb-3 text-center">
              <button type="submit" name="save" class="btn text-white btn-primary w-100">Login</button>
            </div>
            <p class="text-center  mt-3">
              <a class="text-white" href="forgotPassword">Forgot your password?</a>
            </p>
            <!-- <p class="text-center text-danger mt-3">
              <a class="text-white" href="signup.html">New User</a>
            </p> -->
          </form>
        </div>
      </div>
    </div>


    