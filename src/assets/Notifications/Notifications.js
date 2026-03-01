class Notification {
  constructor(name, imgSrc = null, description = null, message = null) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.description = description;
    this.message = message;
  }
}

const notifications = {
  "Christmas Specials":
    new Notification("50% Off on All Christmas Items", null, "Get into the festive spirit with our amazing Christmas discounts!", "Merry Christmas, Mugprintz Team! I'd like to know more about the Christmas Specials")
};

export default notifications;
