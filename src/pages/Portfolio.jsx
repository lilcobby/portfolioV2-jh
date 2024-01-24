import '../styles/Portfolio.css';

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio Page</h1>
      <p>
        This is where our projects will go. Images with anchor links to the GitHub projects/ the server hosted projects.
      </p>
      <div className="project">
        <h3>project 1</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 2</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 3</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 4</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 5</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 6</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
      <div className="project">
        <h3>project 1</h3>
        <p>project description</p>
        <a href="">
          <img src="./src/assets/" alt="project image" />
        </a>
      </div>
    </div>
  );
}
