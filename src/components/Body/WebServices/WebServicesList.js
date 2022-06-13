import classes from "./WebServices.module.css";

const CardsMap = (props) => {
  const cardsMap = props.cards.map((card) => {
    const buyNow = <button className={classes.button}>Buy Now</button>;
    const Title = <h3>{card.Title}</h3>;

    //top div
    let price = "";
    let packages = "";
    const list1 = [];
    for (let i = 0; i < card.list1.length; i++) {
      list1.push(
        <li key={Math.random()} className={classes.li}>
          {card.list1[i]}
        </li>
      );
    }
    const TopDiv = () => {
      return (
        <div className={classes.topDiv}>
          <ul>{list1}</ul>
          <h5>
            {packages}
            <br />
            {price}
          </h5>
          {buyNow}
        </div>
      );
    };

    //bot div
    let totalPackageMessage = "";
    let priceTotalPackage = "";
    const list2 = [];
    for (let i = 0; i < card.list2.length; i++) {
      list2.push(
        <li key={Math.random()} className={classes.li}>
          {card.list2[i]}
        </li>
      );
    }
    const BotDiv = () => {
      return (
        <div className={classes.botDiv}>
          <ul>{list2}</ul>
          <h5>
            {totalPackageMessage} <br /> {priceTotalPackage}
          </h5>
          {buyNow}
        </div>
      );
    };

    for (let i = 0; i < props.pricingLevels.length; i++) {
      if (card.Title === props.pricingLevels[i].name) {
        price = `$${props.pricingLevels[i].price}`;
        packages = `${props.pricingLevels[i].message}`;
        totalPackageMessage = `${props.pricingLevels[i].totalPackageMessage}`;
        priceTotalPackage = `$${props.pricingLevels[i].priceTotalPackage}`;
      }
    }

    return (
      <div className={classes.card} key={card.id}>
        {Title}
        <TopDiv />
        <BotDiv />
      </div>
    );
  });

  return cardsMap;
};

export default CardsMap;
