const wrapper = document.querySelector(".sliderWrapper");
// console.log(wrapper)

const menuItems = document.querySelectorAll(".menuItem");
// console.log(menuItems)

const products =[
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors : [
            {
                code: "drakblue",
                img: "https://raw.githubusercontent.com/safak/youtube/719e53b147f29af455f1c03d4dba18517c4990f7/img/air2.png",
            },
            {
                code: "black",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/air.png?raw=true",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors : [
            {
                code: "lightgray",
                img: "https://raw.githubusercontent.com/safak/youtube/719e53b147f29af455f1c03d4dba18517c4990f7/img/jordan.png",
            },
            {
                code: "green",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/jordan2.png?raw=true",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors : [
            {
                code: "white",
                img: "https://raw.githubusercontent.com/safak/youtube/719e53b147f29af455f1c03d4dba18517c4990f7/img/blazer.png",
            },
            {
                code: "green",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/blazer2.png?raw=true",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors : [
            {
                code: "lightgray",
                img: "https://raw.githubusercontent.com/safak/youtube/719e53b147f29af455f1c03d4dba18517c4990f7/img/crater2.png",
            },
            {
                code: "black",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/crater.png?raw=true",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors : [
            {
                code: "black",
                img: "https://raw.githubusercontent.com/safak/youtube/719e53b147f29af455f1c03d4dba18517c4990f7/img/hippie2.png",
            },
            {
                code: "gray",
                img: "https://github.com/safak/youtube/blob/html-css-js-ecommerce/img/hippie.png?raw=true",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("clicked" + index)
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const payB =  document.querySelector(".payButton");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

payB.addEventListener("click" , ()=>{
    payment.style.display = "none";
});



