import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
        background: "url(./assets/glitchy.png) center/cover no-repeat",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img
        src="./assets/glitchy.png"
        alt="glitched image for error screen"
        className="fullscreen-link"
      ></img>
    </div>
  );
}
