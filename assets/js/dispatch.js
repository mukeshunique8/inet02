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

async function getUserData2() {
	try {
		const response = await fetch("api/get-user-data");
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

(function () {
	"use strict";
	var forms = document.querySelectorAll(".needs-validation");

	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();

function validateAndNext() {
	const form = document.getElementById("delivery-address");
	if (!form.checkValidity()) {
		form.classList.add("was-validated");
		return false;
	}

	// Proceed to payment section if the form is valid
	goToAccordion("panelsStayOpen-collapseThree");
	return true;
}

// Function to generate a unique order ID
function generateUniqueOrderId() {
	const now = new Date();
	const timestamp = now.getFullYear().toString() +
										(now.getMonth() + 1).toString().padStart(2, '0') +
										now.getDate().toString().padStart(2, '0') +
										now.getHours().toString().padStart(2, '0') +
										now.getMinutes().toString().padStart(2, '0') +
										now.getSeconds().toString().padStart(2, '0') +
										now.getMilliseconds().toString().padStart(3, '0');

	const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

	return `ORD-${timestamp}-${randomNumber}`;
}



async function proceedToPayment() {
	if (await isUserLoggedIn()) {
			const userData = await getUserData2();

			if (userData) {
					if (validateAndNext()) {
							// Create the order details object with user data
							const orderDetails = {
									userName: userData.name,
									userMail: userData.email,
									productId: cartItem.id,
									productName: cartItem.title,
									quantity: purchaseQuantity,
									totalPrice: purchaseTotal,
									orderId: generateUniqueOrderId(), 
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

							// Proceed with placing the order
							await placeOrder(orderDetails);
					} else {
							// Scroll to the address accordion section if validation fails
							goToAccordion("panelsStayOpen-collapseTwo");
					}
			} else {
					console.error("Failed to fetch user data.");
			}
	} else {
			window.location.href = "/project01/crud/userLogin";
	}
}



async function placeOrder(orderDetails) {
	console.log(orderDetails); // Debugging: Check the order details before sending

	try {
		const response = await fetch("/project01/api/place-order", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(orderDetails),
		});

		const result = await response.json();

		if (response.ok && result.status === "success") {
			alert("Order Placed Successfully");

			// Hide the accordion and show the thank you message
			document.getElementById("accordionPanelsStayOpenExample").remove();
			const orderStatus = document.getElementById("order-status");
			const cartheader = document.getElementById("cart-header");
			cartheader.classList.add("d-none");
			orderStatus.classList.remove("d-none");
			orderStatus.innerHTML =
				"<h2 class='display-2'>Thank you for purchasing!</h2><p class='text-success display-4'>Your order has been placed.</p> <a href='home' class='text-secondary display-6'>Explore More Products</a>";
;
		} else {
			console.error("Failed to place order:", result.message);
		}
	} catch (error) {
		console.error("Error placing order:", error);
	}
}