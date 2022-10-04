import "./style.css";

const color_palette = {
  "#264653": "Teal blue",
  "#2a9d8f": "Persian green",
  "#e9c46a": "Golden Ochre",
  "#f4a261": "Sandy Brown",
  "#e76f51": "Burnt Sienna",
};
//color-picker
const addOptionsColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(color_palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color_palette[color];

    colorPickerSelect.append(option);
  });
};

//Text setter
const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorNameSelect = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;

    document.body.style.backgroundColor = newColor;
    colorNameSelect.innerText = [newColor];
    const colorNameText = `${color_palette[newColor]} | ${newColor}`;
    colorNameSelect.innerText = color_palette[newColor] ? colorNameText : "-";
  });
};

addOptionsColorPicker();
addEventListenerToColorPicker();
