import React from "react";
import ProductList from "./ProductList";
import classes from "./AvailableProducts.module.css";

const AvailableProducts = () => {
  const productsArr = [
    {
      id: "1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      allimages: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        "https://www.color-meanings.com/wp-content/uploads/Red_and_blue_mix-1024x576.jpeg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/430c9de8-8c0b-4cb2-bc72-fd96ee72e563/d2msg5c-00528174-d14d-4e23-96a2-8ed75277e9f6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzMGM5ZGU4LThjMGItNGNiMi1iYzcyLWZkOTZlZTcyZTU2M1wvZDJtc2c1Yy0wMDUyODE3NC1kMTRkLTRlMjMtOTZhMi04ZWQ3NTI3N2U5ZjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Dl7ozG5jwYhBdlOeAP4V6AfB--w4MUT_CZe5eq1Q7lU",
      ],

      reviews: [
        "Colors were really of good quality",
        "The combination of red and blue is enchanting",
        "The dye is easy to use and doesn't go off after washing",
      ],
    },

    {
      id: "2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      allimages: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        "https://www.color-meanings.com/wp-content/uploads/Black-and-white-paint-swirl-1024x683.jpeg",
        "https://previews.123rf.com/images/svetlanaevgrafova/svetlanaevgrafova1801/svetlanaevgrafova180100073/93946169-abstract-blank-background-with-mixed-black-and-white-color-.jpg",
      ],

      reviews: [
        "The color comes with good quantity",
        "Good packaging",
        "The color was a bit dry :(",
      ],
    },

    {
      id: "3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      allimages: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        "https://c4.wallpaperflare.com/wallpaper/534/440/956/hypnotic-wallpaper-preview.jpg",
      ],

      reviews: [
        "The yellow color has a tinge of gold which gives a royal feel to it",
        "The dye smells good",
      ],
    },

    {
      id: "4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

      allimages: [
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        "https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149005675.jpg?size=626&ext=jpg&ga=GA1.2.608472999.1668498087",
        "https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?size=626&ext=jpg&ga=GA1.2.608472999.1668498087",
      ],

      reviews: [
        "Two different shades of blue comes as a pack",
        "The dye is easy to use and doesn't go off after washing",
        "The quality of paint too good",
      ],
    },
  ];

  const productsList = productsArr.map((item) => (
    <ProductList
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.imageUrl}
      allimg={item.allimages}
      reviews={item.reviews}
    />
  ));

  return <div className={classes.productsList}>{productsList}</div>;
};

export default AvailableProducts;
