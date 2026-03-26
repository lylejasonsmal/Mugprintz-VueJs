class Product {
  constructor(name, imgSrc, description = null, price = null) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.description = description;
    this.price = price;
  }
}

const productCategories = {
  "Branded Clothing & Apparel": [
    new Product(
      "Kiddies T-Shirt Prints",
      new URL("@/assets/Mugprintz Images/baby-t-shirt.png", import.meta.url).href,
      "Custom printed t-shirts for kids, perfect for birthdays, family events, or just everyday fun. Our high-quality prints ensure vibrant colors and long-lasting wear.",
      "R100.00"
    ),
    new Product(
      "Branded T-Shirt Prints",
      new URL("@/assets/Mugprintz Images/branded-t-shirt.png", import.meta.url).href,
      "Custom printed t-shirts for your brand, event, or special occasion. Our high-quality prints ensure vibrant colors and long-lasting wear."
    ),
    new Product(
      "Printed Apparel",
      new URL("@/assets/Mugprintz Images/bucket-hat.png", import.meta.url).href,
      "Custom printed apparel including bucket hats, hoodies, and more. Perfect for promoting your brand or creating unique fashion statements."
    )
  ],

  "Balloon Art": [
    new Product(
      "Balloon With A Basket",
      new URL("@/assets/Mugprintz Images/balloon-basket.png", import.meta.url).href
    ),
    new Product(
      "Balloon On A Stick",
      new URL("@/assets/Mugprintz Images/balloon-stick.png", import.meta.url).href
    )
  ],

  "Branded Ceramic Items": [
    new Product(
      "Branded Plates",
      new URL("@/assets/Mugprintz Images/branded-plate.png", import.meta.url).href
    )
  ],

  "Birthday Keys": [
    new Product(
      "21st Keys",
      new URL("@/assets/Mugprintz Images/21st-key.png", import.meta.url).href
    )
  ]
};

export default productCategories;
