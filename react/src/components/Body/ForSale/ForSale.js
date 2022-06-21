import classes from "./ForSale.module.css";
import products from "./Products";

let ForSale = () => {
  const theProducts = products.map((product) => (
    <div className={classes.card} key={Math.random()}>
      <h4 className={classes.forSale}>For Sale</h4>
      <div className={classes.images}>
        <h2 className="product-name">{product.name}</h2>
        <img
          className={classes.large_photo}
          src={product.img_url1}
          alt={product.name}
        ></img>
      </div>
      <div className="small-photo">
        <img
          className={classes.product_sm}
          src={product.img_url2}
          alt={product.name}
        />
        <img
          className={classes.product_sm}
          src={product.img_url3}
          alt={product.name}
        />
        <img
          className={classes.product_sm}
          src={product.img_url4}
          alt={product.name}
        />
      </div>
      <div className={classes.text}>
        <h3 className={classes.price}>{product.price}</h3>
        <h4 className={classes.used}>{product.used}</h4>
        <br />
        <br />
        <br />
        <h4 className="description">{product.description}</h4>
      </div>
      <div className={classes.email}>
        <h4>
          <a href="mailto:jogucareers@gmail.com">email me about this product</a>
        </h4>
      </div>
    </div>
  ));
  return <div className={classes.container}>{theProducts}</div>;
};

export default ForSale;
