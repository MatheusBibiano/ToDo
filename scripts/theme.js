const themes = {
  Violet: [
    { name: "--primary", value: "#9d4edd" },
    { name: "--font", value: "237, 242, 244" },
    { name: "--background", value: "#1e1e1e" },
    { name: "--done", value: "#20AD70" },
    { name: "--delete", value: "#FF5447" },
  ],

  Red: [
    { name: "--primary", value: "#dd4e43" },
    { name: "--font", value: "237, 242, 244" },
    { name: "--background", value: "#2b2d42" },
    { name: "--done", value: "#20AD70" },
    { name: "--delete", value: "#dd4e43" },
  ],
};

var currentTheme = "Violet";
const root = document.querySelector("html");
const toggleThemeButtonIcon = document.querySelector("#toggleThemeButtonIcon");

function setTheme(theme) {
  theme.map((current) => root.style.setProperty(current.name, current.value));
}

function toggleTheme() {
  if (currentTheme === "Violet") {
    currentTheme = "Red";
    setTheme(themes.Red);
    toggleThemeButtonIcon.innerHTML = "toggle_on";
    return;
  }

  currentTheme = "Violet";
  setTheme(themes.Violet);
  toggleThemeButtonIcon.innerHTML = "toggle_off";
}

setTheme(themes.Violet);
