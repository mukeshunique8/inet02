// app.js

// Common Constants
const BASE_URL = "http://localhost/project01/";

// Product Data
const products = [
  {
    id: 0,
    image: "assets/img/bio1.jpg",
    title: "Iris",
    price: 60,
    description: "IRIS is an innovative Iris Recognition Security Device offering unparalleled security. It ensures precise identification and is ideal for high-security.",
  },
  {
    id: 1,
    image: "assets/img/bio2.jpg",
    title: "AEBAS",
    price: 120,
    description: "The AEBAS Employee Biometric Attendance System simplifies workforce management. It offers accurate time tracking and enhances productivity.",
  },
  {
    id: 2,
    image: "assets/img/bio1.jpg",
    title: "Biometric",
    price: 230,
    description: "PUNCH TAG provides efficient and secure access control. This robust device enhances security protocols with precise punch tagging.",
  },
];

// Product List Rendering
function renderProductList() {
  document.getElementById("productList").innerHTML = products
    .map((product) => {
      return `
      <div onclick="visitProduct(${product.id})" class="col-lg-6 col-xl-4 shadow-sm wow fadeInUp" data-wow-delay="0.1s">
        <div class="service-item">
          <div class="service-inner">
            <div class="service-img">
              <img src="${product.image}" class="img-fluid w-100 rounded" alt="${product.title}" />
            </div>
            <div class="service-title">
              <div class="service-title-name">
                <div class="bg-secondary text-center rounded p-2 mx-5 mb-4">
                  <a href="#" class="h4 text-decoration-none text-white mb-0">${product.title}</a>
                </div>
                <a onclick="visitProduct(${product.id})" class="btn bg-primary text-white rounded-pill py-3 px-5 mb-4" href="#">Shop Now</a>
              </div>
              <div class="service-content pb-4">
                <a href="#"><h4 class="text-white mb-4 py-3">${product.title}</h4></a>
                <div class="px-4">
                  <p class="mb-4">${product.description}</p>
                  <a onclick="visitProduct(${product.id})" class="btn btn-primary border-secondary rounded-pill text-white py-3 px-5" href="#">$${product.price}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
}

// Visit Product Function
function visitProduct(id) {
  localStorage.setItem("selectedProductId", id);
  window.location.href = "product";
}

// Scroll to Suggestions
function scrollToSuggestions() {
  document.getElementById("productSection").scrollIntoView({ behavior: "smooth" });
}

// Render Product Detail
function renderProductDetail() {
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id == productId);

  if (!product) {
    document.getElementById("product-detail").innerHTML = `
      <div class="container text-center">
        <p class="text-center mb-5 display-5">No product selected yet! Why not explore our amazing products and pick one that suits you?</p>
        <div class="container text-center">
          <a onclick="scrollToSuggestions()" class="btn-2 bg-primary justify-self-center cursor-pointer">Explore Products</a>
        </div>
      </div>`;
    return;
  }

  document.getElementById("product-detail").innerHTML = `
    <div class="container">
      <div class="row gy-4 product-detail-container">
        <div class="col-12 col-md-6 d-flex align-items-stretch">
          <div class="image-wrapper shadow-lg w-100">
            <img src="${product.image}" alt="Product Image" class="img-fluid img-thumbnail w-100 h-100 object-fit-cover" />
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex align-items-stretch">
          <div class="details-wrapper w-100 p-3 rounded shadow-sm">
            <div class="d-flex flex-column justify-content-center h-100">
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <div class="quantity-wrapper d-flex align-items-center mt-3">
                <label class="me-4" for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" value="1" class="form-control ml-2" style="width: 70px;" />
              </div>
              <div class="total-price mt-3 font-weight-bold">
                <span class="me-2"> Total Price: </span>
                <span class="text-primary">$</span>
                <span class="text-primary" id="total-price">${product.price.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-center mt-4">
                <a href="#" class="btn-3 bg-primary text-center" onclick="proceedToPurchase()">Proceed to Purchase</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  updateTotalPrice();
}

// Update Total Price
function updateTotalPrice() {
  const quantityInput = document.getElementById("quantity");
  const totalPriceSpan = document.getElementById("total-price");
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id == productId);

  if (product) {
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = quantity * product.price;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
  }
}

// Proceed to Purchase
async function proceedToPurchase() {
  const quantity = document.getElementById("quantity").value;
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id == productId);

  if (product) {
    localStorage.setItem("purchase", JSON.stringify({ productId, quantity }));

    if (await isUserLoggedIn()) {
      window.location.href = "dispatch";
    } else {
      window.location.href = "login";
    }
  }
}

// CART DETAILS
const purchaseItem = JSON.parse(localStorage.getItem("purchase"));
const cartItem = products.find((p) => p.id == purchaseItem.productId);

console.log(purchaseItem);
console.log(cartItem);

const purchaseQuantity = purchaseItem.quantity;
const purchaseTotal = purchaseQuantity * cartItem.price;
console.log(purchaseQuantity);
console.log(purchaseTotal);

  document.getElementById("cartProducts").innerHTML = `
   <div class="cart-product row">
							<div class="col-md-6 col-12  rounded">
								<img
									class="img-fluid rounded img-thumbnail"
									src=${cartItem.image}
									alt=${cartItem.title}
								/>
							</div>

							<div class="col-md-6 col-12">
								<p class="display-5 text-secondary">${cartItem.title}</p>
								<p class="fs-6 fw-lighter">
									Product Price:
									<span class="font-weight-light">$${cartItem.price}</span>
								</p>
								<p class="fs-6 fw-lighter">
									Quantity:
									<span class="font-weight-light">${purchaseQuantity}</span>
								</p>
								<p class="fs-6 fw-lighter">
									Total Price:
									<span class="font-weight-light text-secondary">$${purchaseTotal}</span>
								</p>
							</div>
						</div>`;

 // CART DETAILS
        
// Check if User is Logged In
async function isUserLoggedIn() {
  try {
    const response = await fetch(`${BASE_URL}api/check-login-status`);
    const data = await response.json();
    return data.loggedIn;
  } catch (error) {
    console.error("Error checking login status:", error);
    return false;
  }
}

// Get User Data
async function getUserData() {
  try {
    const response = await fetch(`${BASE_URL}api/check-login-status`);
    const data = await response.json();
    if (data.loggedIn) {
      return data.userData;
    } else {
      console.error("User is not logged in.");
      return false;
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    return false;
  }
}

// Proceed to Payment
async function proceedToPayment() {
  if (await isUserLoggedIn()) {
    const userData = await getUserData();
    if (userData) {
      if (validateAndNext()) {
        const orderDetails = {
          userName: userData.name,
          userMail: userData.email,
          productId: cartItem.id,
          productName: cartItem.title,
          quantity: purchaseQuantity,
          totalPrice: purchaseTotal,
          address: {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            phone: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            pincode: document.getElementById("pincode").value,
          },
        };
        await sendOrderToServer(orderDetails);
      }
    }
  } else {
    window.location.href = "login";
  }
}


// goToAccordion
function goToAccordion(accordionId) {
	const current = document.querySelector(".accordion-collapse.show");
	if (current) current.classList.remove("show");
	const next = document.getElementById(accordionId);
	if (next) {
		next.classList.add("show");
		// Get the top position of the accordion panel
		const topPosition = next.getBoundingClientRect().top + window.pageYOffset;

		// Scroll to 100px above the accordion panel
		window.scrollTo({
			top: topPosition - 100,
			behavior: "smooth",
		});
	}
}

// Validate and Proceed
function validateAndNext() {
  // Validate address fields
  const requiredFields = ["firstName", "lastName", "phone", "address", "city", "state", "pincode"];
  const isValid = requiredFields.every(field => document.getElementById(field).value.trim() !== "");
  
  if (!isValid) {
    alert("Please fill out all address fields before proceeding.");
    return false;
  }

  // Proceed to payment section
  const nextSection = document.querySelector("#paymentSection");
  nextSection.scrollIntoView({ behavior: "smooth" });
  return true;
}

// Send Order to Server
async function sendOrderToServer(orderDetails) {
  try {
    const response = await fetch(`${BASE_URL}api/save-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    });
    const result = await response.json();
    if (result.success) {
      alert("Order placed successfully!");
      window.location.href = "order-success";
    } else {
      alert("Failed to place order. Please try again.");
    }
  } catch (error) {
    console.error("Error sending order to server:", error);
    alert("An error occurred while placing the order. Please try again.");
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("productList")) {
    renderProductList();
  }
  if (document.getElementById("product-detail")) {
    renderProductDetail();
  }
});

