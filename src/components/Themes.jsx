import { useState, useEffect } from "react";
const ModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for the theme preference, default to light mode if not found
    const savedMode = localStorage.getItem("theme");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Save the new theme preference to local storage
      localStorage.setItem("theme", JSON.stringify(newMode));
      return newMode;
    });
  };

  // Update the CSS class when the theme changes
  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);
 
  return (
    <div>
      <h1>
        {isDarkMode
          ? "Too cool for you? Press the button"
          : "A little boring? Press the button"}{" "}
      </h1>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Boring Mode" : "Switch to Matrix Mode"}
      </button>
      {isDarkMode && <div className="bg-overlay"></div>}
    </div>
  );
};

export default ModeSwitch;
