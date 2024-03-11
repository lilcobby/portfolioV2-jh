export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <h2>#form logic not yet complete</h2>
      {/* <form onSubmit={handleSubmit}> for later use*/}
      <form>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" required />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" required />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message" rows="4" cols="50" required />
        <br />

        <button type="submit" className="specialbtn">
          Submit
        </button>
      </form>
    </div>
  );
  // for later use
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // Handle form submission here
}
