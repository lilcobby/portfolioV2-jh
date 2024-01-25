const myAge = 28
const myName = "Jacob Hairfield"
const imgAspectRatio = 445 / 566; // width divided by height for aspect ratio
const imgHeight = 200;
const imgWidth = imgHeight * imgAspectRatio;

export default function About() {
  return (
    // className container is the same as class container so that built in js doesnt throw errors 
    <div className = "container">
      <h1>About Page</h1>
      <img src="./public/assets/65115206_10216266979521817_8966192826849165312_n (2).jpg" alt="a headshot of me" style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }} ></img>
      
      <p class = "test">
       My name is {myName} and I am {myAge} years old. I'm relatively new to web development, but over the past 6 months I have learned alot and proved that I can be commited to something if I stay focused. 
       I have created several web based applications using a plethora of technologies; with my favorites being: react, node.js, mysql, sql, just to name a few. I prefer working on the back end for applications because It allows be to be more creative and keeps my "problem solving" brain active, but front end is ok too. Excluding CSS.  
      </p>
      <ul>
        <li>
      < a href = "https://github.com/lilcobby"> My Github Profile </a> 
      </li>
      <li>
      < a href = "https://www.linkedin.com/in/jacob-hairfield-1340a6249/"> My Linkedin Profile</a>
      </li>
      </ul>
    </div>
  );
}
