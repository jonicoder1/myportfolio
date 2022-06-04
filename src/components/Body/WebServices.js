import reactDom from "react-dom";
import classes from "./WebServices.module.css";

const WebServices = () => {
  let listTwo = [
    "Domain Name ( 1 Year )",
    "Web Hosting Setup",
    "50 email accounts",
    "Web Security ( SSL ) ( 1 Year )",
    "Free Pages: Privacy, Terms & Disclaimer",
  ];

  const cards = [
    {
      Title: "Basic",
      id: 0,
      list1: [
        "2-3 Web Pages",
        "Responsive Website",
        "Image Slider",
        "Stock Photos",
        "Contact Form",
        "About Us, Services & Contact Us",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
    {
      Title: "Intermediate",
      id: 1,
      list1: [
        "4-5 Web Pages",
        "Responsive Website",
        "Image Slider",
        "Stock Photos",
        "Contact Form",
        "Photo Gallery",
        "Social Network Links",
        "About Us, Services, Contact Us & Detail",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
    {
      Title: "Advanced",
      id: 3,
      list1: [
        "8-10 Web Pages",
        "Responsive Website",
        "Image Slider",
        "Stock Photos",
        "Contact Form",
        "Photo Gallery",
        "Social Network Links",
        "About Us, Services, Contact Us & Detail",
        "Custom Page Elements",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
  ];

  const CardsMap = cards.map((card) => {
    const buyNow = <button className={classes.button}>Buy Now</button>;
    const Title = <h4>{card.Title}</h4>;
    let list1 = [];
    let list2 = [];

    for (let i = 0; i < card.list1.length; i++) {
      list1.push(
        <li key={Math.random()} className={classes.li}>
          {card.list1[i]}
        </li>
      );
    }

    for (let i = 0; i < card.list2.length; i++) {
      list2.push(
        <li key={Math.random()} className={classes.li}>
          {card.list2[i]}
        </li>
      );
    }

    return (
      <div className={classes.card} key={card.id}>
        {Title}
        <div className={classes.topDiv}>
          <ul>{list1}</ul>
          {buyNow}
        </div>
        <div className={classes.botDiv}>
          <ul>{list2}</ul>
          {buyNow}
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 id="webServices">Web Services Section</h1>
        <h3>Simple Website Design Packages & Pricing</h3>
      </div>
      <div className={classes.cardsContainer}>{CardsMap}</div>
    </div>
  );
};

export default WebServices;
