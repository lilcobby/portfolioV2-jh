const myAge = 28;
const myName = "Jacob Hairfield";
const imgAspectRatio = 445 / 566; // width divided by height for aspect ratio
const imgHeight = 200;
const imgWidth = imgHeight * imgAspectRatio;

export default function About() {
  return (
    <div className="containerSpecial">
      <h1>About Page</h1>
      <img
        src="./assets/65115206_10216266979521817_8966192826849165312_n (2).jpg"
        alt="a headshot of me"
        style={{
          width: `${imgWidth}px`,
          height: `${imgHeight}px`,
          borderRadius: "50%",
        }}
      />

      <p className="test">
        My name is {myName} and I am {myAge} years old. I'm relatively new to
        web development, but over the past 6 months, I have learned a lot and
        proved that I can be committed to something if I stay focused. I have
        created several web-based applications using a plethora of technologies;
        with my favorites being: React, Node.js, MySQL, SQL, just to name a few.
        I prefer working on the back end for applications because it allows me
        to be more creative and keeps my "problem-solving" brain active, but the
        front end is okay too, excluding CSS.
      </p>
      <ul>
        <li>
          <a href="https://github.com/lilcobby">My Github Profile</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jacob-hairfield-1340a6249/">
            My LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
