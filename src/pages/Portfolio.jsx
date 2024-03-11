// rename to generic css
export default function Portfolio() {
  return (
    <>
      <div className="containerTwo">
      
      </div>
      <div className="containerOne">
        <div className="projectPort">
          <h3>Farmers Market/ shop </h3>
          <p>
            A front end shop website we created for a hypothetical farmer's
            market. Can be utilized as a baseline skeleton for any shop website,
            it only needs functional payment methods and a few photos.{" "}
          </p>
          <a href="https://farmersmarket-6a75e85eecc8.herokuapp.com/">
            <img
              src="./assets/intro_shop.png"
              alt="project image"
              className="Image"
            />
          </a>
        </div>
        <div className="projectPort">
          <h3>PokiDoki </h3>
          <p>
            A dating or networking website to meet other pokemon fans. Create
            your profile based on your favorite pokemon and match with other
            users.{" "}
          </p>
          <a href="https://farmersmarket-6a75e85eecc8.herokuapp.com/">
            <img
              src="./assets/image-1.png"
              alt="project image"
              className="Image"
            />
          </a>
        </div>

        <div className="projectPort">
          <h3>Note Taker App</h3>
          <p>Create edit and delete notes. </p>
          <a href="https://jh-host4notes-0cce13beaae8.herokuapp.com/">
            <img
              src="./assets/firstserver_gif.gif"
              alt="project image"
              className="Image"
            />
          </a>
        </div>

        <div className="projectPort">
          <h3>README creator</h3>
          <p>
            App that lets us create a readme based on terminal prompt question
            and answers
          </p>
          <a href="https://github.com/lilcobby/jh-inquire-readme-creation">
            <img
              src="./assets/readme_test.gif"
              alt="project image"
              className="Image"
            />
          </a>
        </div>
        <div className="projectPort">
          <h3>First Blog </h3>
          <p>My first blog. using mysql, hosted on heroku</p>
          <a href="https://trashblogv1-05aa1ad68c3c.herokuapp.com/">
            <img
              src="./assets/image-2.png"
              alt="project image"
              className="Image"
            />
          </a>
        </div>
      </div>
    </>
  );
}
