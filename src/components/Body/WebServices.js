import classes from "./WebServices.module.css";

const WebServices = () => {
  const cards = [
    {
      Title: "Basic",
      id: 0,
      list1: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
      list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
      button: "Buy Now",
    },
    {
      Title: "Intermediate",
      id: 1,
      list1: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5", "lorem6"],
      list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
      button: "Buy Now",
    },
    {
      Title: "Advanced",
      id: 3,
      list1: [
        "lorem1",
        "lorem2",
        "lorem3",
        "lorem4",
        "lorem5",
        "lorem6",
        "lorem7",
      ],
      list2: ["lorem1", "lorem2", "lorem3", "lorem4", "lorem5"],
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
    <div className={classes.container} id="webServices">
      <hr />
      <h1>Web Services Section</h1>
      <h3>Simple Website Design Packages & Pricing</h3>
      <div className={`${classes.cardsContainer}`}>{CardsMap}</div>
    </div>
  );
};

export default WebServices;
