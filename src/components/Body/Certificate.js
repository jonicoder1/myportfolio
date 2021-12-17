import classes from "./Certificate.module.css";

const Certificate = () => {
  const FrontEndCertificate = () => {
    return (
      <a href="https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de#gs.58js84">
        <h3>Tech Degree</h3>
        <img
          className={`${classes["tech-degree"]}`}
          src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/34549920"
          alt="front end web development tech degree"
        />
      </a>
    );
  };

  return (
    <div className={`certificate container`}>
      <h1 id="certificate">Certificate</h1>
      <div class="container text-align-center">
        <h2>Front End Web Development</h2>
        <FrontEndCertificate />
      </div>
      <hr />
    </div>
  );
};

export default Certificate;
