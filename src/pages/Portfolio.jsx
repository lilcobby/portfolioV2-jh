

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
        <h3>project 2</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>project 3</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>project 4</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>project 5</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>project 6</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="projectPort">
        <h3>project 1</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
    </div>
  );
}
