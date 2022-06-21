import classes from "./WebServices.module.css";
import CardsMap from "./WebServicesList";

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

  return (
    <div className={classes.container}>
      <div>
        <h1 id="webServices">Web Services</h1>
        <h2>Simple Website Design Packages & Pricing</h2>
      </div>
      <div className={classes.cardsContainer}>
        <CardsMap
          cards={cards}
          pricingLevels={pricingLevels}
          classes={classes}
        />
      </div>
    </div>
  );
};

export default WebServices;
