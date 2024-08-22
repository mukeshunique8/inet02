<div class="d-flex flex-column container py-4 gap-4">
  <div class="row mx-auto justify-self-center col-12 text-center">
    <h2 id="cart-header" class="display-5">Cart Details</h2>
  </div>

  <!-- ACCORDION -->
  <div class="accordion" id="accordionPanelsStayOpenExample">
    <!-- Order Summary -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Order Summary
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div class="accordion-body">
          <div id="cartProducts" class="container"></div>
          <div
            class="d-flex justify-content-around justify-content-md-end gap-4 mt-4 mb-1"
          >
            <button
              class="btn btn-success col-md-2 col-4"
              onclick="goToAccordion('panelsStayOpen-collapseTwo')"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Delivery Address -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Delivery Address
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div class="accordion-body">
          <form
            id="delivery-address"
            class="needs-validation"
            novalidate
          >
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  required
                  value="<?php echo htmlspecialchars($this->session->userdata('first_name')); ?>"
                />
                <div class="invalid-feedback">First name is required.</div>
              </div>
              <div class="col-md-6">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  value="<?php echo htmlspecialchars($this->session->userdata('last_name')); ?>"
                  required
                />
                <div class="invalid-feedback">Last name is required.</div>
              </div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                pattern="^\+?[0-9]{10,15}$"
                required
                  value="<?php echo htmlspecialchars($this->session->userdata('phone_number')); ?>"
              />
              <div class="invalid-feedback">
                Please enter a valid phone number.
              </div>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="No.1, ABC Street"
                required
              />
              <div class="invalid-feedback">Address is required.</div>
            </div>
            <div class="mb-3">
              <label for="address2" class="form-label">Landmark (Optional)</label>
              <input
                type="text"
                class="form-control"
                id="landmark"
                placeholder="Apartment, Shop, Parks, etc."
              />
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="Chennai"
                  required
                />
                <div class="invalid-feedback">City is required.</div>
              </div>
              <div class="col-md-4">
                <label for="state" class="form-label">State</label>
         
<select class="form-select" id="state" required>
										<!-- Add the state options here -->
										<option>Tamil Nadu</option>
										<option>Andhra Pradesh</option>
										<option>Arunachal Pradesh</option>
										<option>Assam</option>
										<option>Bihar</option>
										<option>Chhattisgarh</option>
										<option>Goa</option>
										<option>Gujarat</option>
										<option>Haryana</option>
										<option>Himachal Pradesh</option>
										<option>Jharkhand</option>
										<option>Karnataka</option>
										<option>Kerala</option>
										<option>Maharashtra</option>
										<option>Madhya Pradesh</option>
										<option>Manipur</option>
										<option>Meghalaya</option>
										<option>Mizoram</option>
										<option>Nagaland</option>
										<option>Odisha</option>
										<option>Punjab</option>
										<option>Rajasthan</option>
										<option>Sikkim</option>
										<option>Tripura</option>
										<option>Telangana</option>
										<option>Uttar Pradesh</option>
										<option>Uttarakhand</option>
										<option>West Bengal</option>
										<option>Andaman & Nicobar (UT)</option>
										<option>Chandigarh (UT)</option>
										<option>Dadra & Nagar Haveli and Daman & Diu (UT)</option>
										<option>Delhi [National Capital Territory (NCT)]</option>
										<option>Jammu & Kashmir (UT)</option>
										<option>Ladakh (UT)</option>
										<option>Lakshadweep (UT)</option>
										<option>Puducherry (UT)</option>

									</select>
                <div class="invalid-feedback">State is required.</div>
              </div>
              <div class="col-md-2">
                <label for="pincode" class="form-label">Pincode</label>
                <input
                  type="text"
                  class="form-control"
                  id="pincode"
                  placeholder="600001"
                  pattern="^[1-9][0-9]{5}$"
                  required
                />
                <div class="invalid-feedback">
                  Please enter a valid pincode.
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-around justify-content-md-end gap-4 mt-4 mb-1"
            >
              <button
                class="btn btn-light col-md-2 col-4"
                onclick="goToAccordion('panelsStayOpen-collapseOne')"
              >
                Back
              </button>
              <button
                type="button"
                class="btn btn-success col-md-2 col-4"
                onclick="validateAndNext()"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Payments -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="panelsStayOpen-headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Payments
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div class="accordion-body">
          <div class="text-center">
            <button class="btn-primary btn" onclick="proceedToPayment()">
              Payment Gateway
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Thank You Section (Initially Hidden) -->
<div id="order-status" class="text-center my-5 py-5  d-none"></div>