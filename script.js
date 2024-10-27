
let prodetail = [{
    desc:"Pink Floral Print Button Up Short Sleeve Shirts",
    comp :"adidas",
    price:"2600",
    rating:"****",
    productlink:"https://m.shein.co.uk/Men-Random-Bird-Floral-Print-Shirt-p-9995009-cat-1979.html?ref=www&rep=dir&ret=m",
    img:"assets/images/products/f1.jpg"
},
{
    desc:"Pink Floral Print Button Up Short Sleeve Shirts",
    comp :"adidas",
    price:"2600",
    rating:"****",
    productlink:"https://m.shein.co.uk/Men-Random-Bird-Floral-Print-Shirt-p-9995009-cat-1979.html?ref=www&rep=dir&ret=m",
    img:"assets/images/products/f1.jpg"
},
{
    desc:"Pink Floral Print Button Up Short Sleeve Shirts",
    comp :"adidas",
    price:"2600",
    rating:"****",
    productlink:"https://m.shein.co.uk/Men-Random-Bird-Floral-Print-Shirt-p-9995009-cat-1979.html?ref=www&rep=dir&ret=m",
    img:"assets/images/products/f1.jpg"
},
{
    desc:"Pink Floral Print Button Up Short Sleeve Shirts",
    comp :"adidas",
    price:"2600",
    rating:"****",
    productlink:"https://m.shein.co.uk/Men-Random-Bird-Floral-Print-Shirt-p-9995009-cat-1979.html?ref=www&rep=dir&ret=m",
    img:"assets/images/products/f1.jpg"
},
{
    desc:"Pink Floral Print Button Up Short Sleeve Shirts",
    comp :"adidas",
    price:"2600",
    rating:"****",
    productlink:"https://m.shein.co.uk/Men-Random-Bird-Floral-Print-Shirt-p-9995009-cat-1979.html?ref=www&rep=dir&ret=m",
    img:"assets/images/products/f1.jpg"
},
]
document.addEventListener("DOMContentLoaded", function() {
    // Get the container element where product details will be displayed
    var productContainer = document.querySelector(".pro-container");

    // Loop through each product detail object and generate HTML
    prodetail.forEach(function(product) {
        // Create a div element for each product
        var productDiv = document.createElement("div");
        productDiv.classList.add("pro");

        // Create an image element
        var image = document.createElement("img");
        image.src = product.img;

        // Create a div element for product description
        var descDiv = document.createElement("div");
        descDiv.classList.add("des");

        // Create a heading element for product description
        var descHeading = document.createElement("h5");
        descHeading.textContent = product.desc;

        // Create a span element for company name
        var compSpan = document.createElement("span");
        compSpan.textContent = "Company: " + product.comp;

        // Create a span element for product rating
        var ratingSpan = document.createElement("span");
        ratingSpan.textContent = "Rating: " + product.rating;

        // Create a span element for product price
        var priceSpan = document.createElement("span");
        priceSpan.textContent = "Price: $" + product.price;

        // Create a link element for product link
        var link = document.createElement("a");
        link.href = product.productlink;
        link.textContent = "View Product";

        // Append all elements to the product div
        descDiv.appendChild(descHeading);
        descDiv.appendChild(compSpan);
        descDiv.appendChild(ratingSpan);
        descDiv.appendChild(priceSpan);
        productDiv.appendChild(image);
        productDiv.appendChild(descDiv);
        productDiv.appendChild(link);

        // Append the product div to the container
        productContainer.appendChild(productDiv);
    });
});

