
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
    var productContainer = document.querySelector(".pro-container");
    prodetail.forEach(function(product) {
        var productDiv = document.createElement("div");
        productDiv.classList.add("pro");

        var image = document.createElement("img");
        image.src = product.img;


        var descDiv = document.createElement("div");
        descDiv.classList.add("des");


        var descHeading = document.createElement("h5");
        descHeading.textContent = product.desc;

        var compSpan = document.createElement("span");
        compSpan.textContent = "Company: " + product.comp;


        var ratingSpan = document.createElement("span");
        ratingSpan.textContent = "Rating: " + product.rating;

        var priceSpan = document.createElement("span");
        priceSpan.textContent = "Price: $" + product.price;


        var link = document.createElement("a");
        link.href = product.productlink;
        link.textContent = "View Product";


        descDiv.appendChild(descHeading);
        descDiv.appendChild(compSpan);
        descDiv.appendChild(ratingSpan);
        descDiv.appendChild(priceSpan);
        productDiv.appendChild(image);
        productDiv.appendChild(descDiv);
        productDiv.appendChild(link);

    
        productContainer.appendChild(productDiv);
    });
});

