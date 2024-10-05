// Initialize Iro color picker
let colorPicker = new iro.ColorPicker("#colorPicker", {
    width: 200,
    color: "#ff0000",
    borderWidth: 1,
    borderColor: "#fff",
});

let colorValue = document.getElementById("colorValue");
let rgbValue = document.getElementById("rgbValue");
let hexInput = document.getElementById("hexInput");
let rInput = document.getElementById("rInput");
let gInput = document.getElementById("gInput");
let bInput = document.getElementById("bInput");
let brightnessSlider = document.getElementById("brightnessSlider");

// Update color code on color change
colorPicker.on("color:change", function(color) {
    // Display the hex value
    colorValue.textContent = color.hexString;
    hexInput.value = color.hexString;

    // Display the RGB value
    rgbValue.textContent = `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`;
    rInput.value = color.rgb.r;
    gInput.value = color.rgb.g;
    bInput.value = color.rgb.b;
});

// Hex input change
hexInput.addEventListener("input", function() {
    colorPicker.color.hexString = hexInput.value;
});

// RGB inputs change
function updateColorFromRGB() {
    let r = parseInt(rInput.value) || 0;
    let g = parseInt(gInput.value) || 0;
    let b = parseInt(bInput.value) || 0;
    colorPicker.color.rgb = { r, g, b };
}

rInput.addEventListener("input", updateColorFromRGB);
gInput.addEventListener("input", updateColorFromRGB);
bInput.addEventListener("input", updateColorFromRGB);

// Brightness slider change
brightnessSlider.addEventListener("input", function() {
    let brightness = brightnessSlider.value / 100;
    colorPicker.color.hsv.v = brightness * 100;
});

// Copy HEX value
document.getElementById("copyHex").addEventListener("click", function() {
    navigator.clipboard.writeText(hexInput.value);
    alert("HEX color copied to clipboard!");
});

// Copy RGB value
document.getElementById("copyRGB").addEventListener("click", function() {
    let rgbString = `${rInput.value}, ${gInput.value}, ${bInput.value}`;
    navigator.clipboard.writeText(`rgb(${rgbString})`);
    alert("RGB color copied to clipboard!");
});
