const myAge = 28;
const myName = "Jacob Hairfield";
const imgAspectRatio = 445 / 566;
const imgHeight = 200;
const imgWidth = imgHeight * imgAspectRatio;

export default function Home() {
  return (
    <>
      <div className="profilePic">
        <img
          src="./assets/65115206_10216266979521817_8966192826849165312_n (2).jpg"
          alt="a headshot of me"
          style={{
            width: `${imgWidth}px`,
            height: `${imgHeight}px`,
            borderRadius: "50%",
            margin: "30px",
          }}
        />
      </div>
      <div className="container">
        <p className="test">
          My name is {myName} and I am {myAge} years old. I'm relatively new to
          web development, but over the past 6 months, I have learned a lot and
          proved that I can be committed to something if I stay focused. I have
          created several web-based applications using a plethora of
          technologies; with my favorites being: React, Node.js, MySQL, SQL,
          just to name a few. I prefer working on the back end for applications
          because it allows me to be more creative and keeps my
          "problem-solving" brain active, but the front end is okay too,
          excluding CSS.
        </p>
      </div>
    </>
  );
}
