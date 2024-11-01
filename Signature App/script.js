
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const canvasColor = document.getElementById('canvasColor');
const fontSize = document.getElementById('fontSize');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');

let isDrawing = false;
let startX, startY;

// Set default values
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = fontSize.value;

// Update stroke color
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
});

// Update background color
canvasColor.addEventListener('change', (e) => {
    canvas.style.backgroundColor = e.target.value;
});

// Update font size
fontSize.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});

// Mouse events for drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.strokeStyle = colorPicker.value; // Update color at the start of each stroke
    [startX, startY] = [e.offsetX, e.offsetY];
    ctx.beginPath(); // Start a new path each time for isolated color strokes
    ctx.moveTo(startX, startY);
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});

// Clear canvas
clearButton.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));

// Save and download canvas as an image
saveButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
});

// Retrieve saved signature from local storage
retrieveButton.addEventListener('click', () => {
    const savedImage = localStorage.getItem('signatureImage');
    if (savedImage) {
        const img = new Image();
        img.src = savedImage;
        img.onload = () => ctx.drawImage(img, 0, 0);
    } else {
        alert('No saved signature found');
    }
});

// Save signature to local storage
saveButton.addEventListener('click', () => {
    localStorage.setItem('signatureImage', canvas.toDataURL());
});
