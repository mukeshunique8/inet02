const products = [
  {
    id: 0,
    image: "assets/img/bio1.jpg",
    title: "Iris",
    price: 60,
    description:
      "IRIS is an innovative Iris Recognition Security Device offering unparalleled security. It ensures precise identification and is ideal for high-security.",
  },
  {
    id: 1,
    image: "assets/img/bio2.jpg",
    title: "AEBAS",
    price: 120,
    description:
      "The AEBAS Employee Biometric Attendance System simplifies workforce management. It offers accurate time tracking and enhances productivity.",
  },
  {
    id: 2,
    image: "assets/img/bio1.jpg",
    title: "Biometric",
    price: 230,
    description:
      "PUNCH TAG provides efficient and secure access control. This robust device enhances security protocols with precise punch tagging.",
  },
];

// Rendering product list on landing page
document.getElementById("productList").innerHTML = products
  .map((product) => {
    return `
  <div onclick="visitProduct(${product.id})" class="col-lg-6 col-xl-4 shadow-sm wow fadeInUp" data-wow-delay="0.1s">
            <div class="service-item">
              <div class="service-inner">
                <div class="service-img">
                  <img
                    src="${product.image}"
                    class="img-fluid w-100  rounded"
                    alt="_${product.image}"
                  />
                </div>
                <div class="service-title">
                  <div class="service-title-name">
                    <div class="bg-secondary text-center rounded p-2 mx-5 mb-4">
                      <a
                        href="#"
                        class="h4 text-decoration-none text-white mb-0"
                        >${product.title}</a
                      >
                    </div>
                    <a
                    onclick=visitProduct(${product.id})
                      class="btn bg-primary text-white rounded-pill py-3 px-5 mb-4"
                      href="#"
                      >Shop Now</a
                    >
                  </div>
                  <div class="service-content pb-4">
                    <a href="#"
                      ><h4 class="text-white mb-4 py-3">${product.title}</h4></a
                    >
                    <div class="px-4">
                      <p class="mb-4">
                      ${product.description}
                      </p>
                      <a
                    onclick=visitProduct(${product.id})
                        class="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                        href="#"
                        >$${product.price}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
`;
  })
  .join("");

function visitProduct(id) {
  console.log(id); // Debugging line
  localStorage.setItem("selectedProductId", id);
  window.location.href = "product";
}

