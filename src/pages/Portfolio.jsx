

// rename to generic css
export default function Portfolio() {
  return (
    <div className="containerOne">
      <h1>Portfolio Page</h1>
      <p>
        This is where our projects will go. Images with anchor links to the GitHub projects/ the server hosted projects.
      </p>
      <div className="projectPort">
        <h3>Farmers Market/ shop </h3>
        <p>A front end shop website we created for a hypothetical farmer's market. Can be utilized as a baseline skeleton for any shop website, it only needs functional payment methods and a few photos. </p>
        <a href="https://farmersmarket-6a75e85eecc8.herokuapp.com/" >
          <img src ="./src/assets/intro_shop.png" alt="project image" className="Image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>First Blog </h3>
        <p>My first blog. using mysql, hosted on heroku</p>
        <a href="https://trashblogv1-05aa1ad68c3c.herokuapp.com/">
          <img src="./src/assets/image-1.png" alt="project image" className="Image"/>
        </a>
      </div>
      <div className="projectPort">
        <h3>Note Taker App</h3>
        <p>Create edit and delete notes. </p>
        <a href="https://jh-host4notes-0cce13beaae8.herokuapp.com/">
          <img src="./src/assets/firstserver_gif.gif" alt="project image" className="Image"/>
        </a>
      </div>
      <div className="projectPort">
        <h3>Commerce Backend</h3>
        <p>Backend for inventory management for a commerce website</p>
        <a href="https://github.com/lilcobby/social-network-jh">
          <img src="./src/assets/jh-products_db.gif.gif" alt="project image" className="Image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>Generic social network backend</h3>
        <p>Backend for CRUD operations for a generic social network website</p>
        <a href="https://github.com/lilcobby/social-network-jh">
          <img src="./src/assets/user_social.gif" alt="project image" className="Image"/>
        </a>
      </div>
      <div className="projectPort">
        <h3>README creator</h3>
        <p>App that lets us create a readme based on terminal prompt question and answers</p>
        <a href="https://github.com/lilcobby/jh-inquire-readme-creation">
          <img src="./src/assets/readme_test.gif" alt="project image" className="Image" />
        </a>
      </div>
  
    </div>
  );
}
