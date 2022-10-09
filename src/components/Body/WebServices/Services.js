import classes from "./Services.module.css";
import CardsMap from "./ServicesList";

const Services = () => {
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
        "Home Page & Contact Page",
        "Responsive Website",
        "5 Sections",
        "Image Slider",
        "Stock Photos",
        "Photo Gallery",
        "Social Network Links",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
    {
      Title: "Intermediate",
      id: 1,
      list1: [
        "Home Page & Contact Page",
        "Responsive Website",
        "7 Sections",
        "Image Slider",
        "Stock Photos",
        "Photo Gallery",
        "Social Network Links",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
    {
      Title: "Advanced",
      id: 3,
      list1: [
        "Home Page & Contact Page",
        "Responsive Website",
        "9-10 Sections",
        "Image Slider",
        "Stock Photos",
        "Photo Gallery",
        "Social Network Links",
        "Custom Page Elements",
      ],
      list2: listTwo,
      button: "Buy Now",
    },
  ];

  const pricingLevels = [
    {
      name: "Basic",
      price: 493,
      message: "BASIC PACKAGE ONLY",
      totalPackageMessage: "BASIC TOTAL PACKAGE",
      priceTotalPackage: 658,
    },
    {
      name: "Intermediate",
      price: 745,
      message: "INTERMEDIATE PACKAGE ONLY",
      totalPackageMessage: "INTERMEDIATE TOTAL PACKAGE",
      priceTotalPackage: 749,
    },
    {
      name: "Advanced",
      price: 998,
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

export default Services;
