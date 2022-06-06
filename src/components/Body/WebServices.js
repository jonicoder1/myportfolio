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

  const pricingLevels = [
    {
      name: "Basic",
      price: 295,
      message: "BASIC PACKAGE ONLY",
      totalPackageMessage: "BASIC TOTAL PACKAGE",
      priceTotalPackage: 658,
    },
    {
      name: "Intermediate",
      price: 449,
      message: "INTERMEDIATE PACKAGE ONLY",
      totalPackageMessage: "INTERMEDIATE TOTAL PACKAGE",
      priceTotalPackage: 749,
    },
    {
      name: "Advanced",
      price: 849,
      message: "ADVANCED PACKAGE ONLY",
      totalPackageMessage: "ADVANCED TOTAL PACKAGE",
      priceTotalPackage: 1349,
    },
  ];

  const CardsMap = cards.map((card) => {
    let price = "";
    let packages = "";
    let totalPackageMessage = "";
    let priceTotalPackage = "";
    const list1 = [];
    const list2 = [];
    const buyNow = <button className={classes.button}>Buy Now</button>;
    const Title = <h3>{card.Title}</h3>;

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

    for (let i = 0; i < pricingLevels.length; i++) {
      if (card.Title === pricingLevels[i].name) {
        price = `$${pricingLevels[i].price}`;
        packages = `${pricingLevels[i].message}`;
        totalPackageMessage = `${pricingLevels[i].totalPackageMessage}`;
        priceTotalPackage = `$${pricingLevels[i].priceTotalPackage}`;
      }
    }

    return (
      <div className={classes.card} key={card.id}>
        {Title}
        <div className={classes.topDiv}>
          <ul>{list1}</ul>
          <h5>
            {packages}
            <br />
            {price}
          </h5>
          {buyNow}
        </div>
        <div className={classes.botDiv}>
          <ul>{list2}</ul>
          <h5>
            {totalPackageMessage} <br /> {priceTotalPackage}
          </h5>
          {buyNow}
        </div>
      </div>
    );
  });

  return (
    <div className={classes.container}>
      <div>
        <h1 id="webServices">Web Services Section</h1>
        <h2>Simple Website Design Packages & Pricing</h2>
      </div>
      <div className={classes.cardsContainer}>{CardsMap}</div>
    </div>
  );
};

export default WebServices;
