// const  productList = [
//   {
//     id: 0,
//     image: "assets/img/bio1.jpg",
//     title: "Iris",
//     price: 60,
//     description:
//       "IRIS is an innovative Iris Recognition Security Device offering unparalleled security. It ensures precise identification and is ideal for high-security.",
//   },
//   {
//     id: 1,
//     image: "assets/img/bio2.jpg",
//     title: "AEBAS",
//     price: 120,
//     description:
//       "The AEBAS Employee Biometric Attendance System simplifies workforce management. It offers accurate time tracking and enhances productivity.",
//   },
//   {
//     id: 2,
//     image: "assets/img/bio1.jpg",
//     title: "Biometric",
//     price: 230,
//     description:
//       "PUNCH TAG provides efficient and secure access control. This robust device enhances security protocols with precise punch tagging.",
//   },
// ];

function scrollToSuggestions() {
	document
		.getElementById("productSection")
		.scrollIntoView({ behavior: "smooth" });
}
function renderProductDetail() {
	const productId = localStorage.getItem("selectedProductId");
	const product = products.find((p) => p.id == productId);

	if (!product) {
		document.getElementById("product-detail").innerHTML = `
      <div class="container text-center">
        <p class="text-center mb-5 display-5">No product selected yet! Why not explore our amazing products and pick one that suits you?</p>
        <div class="container  text-center">
          <a  onclick="scrollToSuggestions()" class="btn-2 bg-primary justify-self-center cursor-pointer">Explore Products</a>
        </div>
      </div>`;
		return;
	}

	document.getElementById("product-detail").innerHTML = `
  <div class="container">
    <div class="row gy-4 product-detail-container">
      <div class="col-12 col-md-6 d-flex align-items-stretch">
        <div class="image-wrapper shadow-lg w-100">
          <img src="${
						product.image
					}" alt="Product Image" class="img-fluid img-thumbnail w-100 h-100 object-fit-cover" />
        </div>
      </div>
      <div class="col-12  col-md-6 d-flex align-items-stretch">
        <div class="details-wrapper w-100 p-3  rounded shadow-sm">
          <div class="d-flex flex-column justify-content-center h-100">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <div class="quantity-wrapper d-flex align-items-center mt-3">
              <label 
              class="me-4" for="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" value="1" class="form-control ml-2" style="width: 70px;" />
            </div>
            <div class="total-price mt-3 font-weight-bold ">
              <span class="me-2 "> Total Price: </span>   <span class="text-primary "> $ </span>
              <span class=" text-primary" id="total-price">${product.price.toFixed(
								2
							)}</span>
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

async function proceedToPurchase() {
	const quantity = document.getElementById("quantity").value;
	const productId = localStorage.getItem("selectedProductId");
	const product = products.find((p) => p.id == productId);

	if (product) {
		localStorage.setItem("purchase", JSON.stringify({ productId, quantity }));
		// alert(`Proceed to purchase ${quantity} units of ${product.title}`);

		if (await isUserLoggedIn()) {
			window.location.href = "dispatch";
      // getUserData();
		} else {
			window.location.href = "login";
		}
	}
}

async function isUserLoggedIn() {
	try {
		const response = await fetch("/project01/api/check-login-status");
		const data = await response.json();
		return data.loggedIn;
	} catch {
		console.error("Error checking login status:", error);
		return false;
	}
}



// Initialize the product detail page
document.addEventListener("DOMContentLoaded", () => {
	renderProductDetail();
	document.addEventListener("input", (event) => {
		if (event.target.id === "quantity") {
			updateTotalPrice();
		}
	});
});
