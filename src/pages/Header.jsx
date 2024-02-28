import ModeSwitch from "../components/Themes";
// for themes

export default function Head() {
  return (
    <div className="container" style={{ padding: "5px" }}>
      <h1>
        <ModeSwitch />
      </h1>
    </div>
  );
}
