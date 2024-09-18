// Helper function to parse and validate input
function parseInput(id) {
  const value = parseFloat(document.getElementById(id).value);
  return !isNaN(value) && value > 0 ? value : null;
}

// Helper function to update the result element
function updateResult(area, shape) {
  document.getElementById('result').innerHTML = `${shape} Area : ${area.toFixed(
    2
  )} cm<sup>2</sup>`;
}

// Helper function to handle errors
function handleError() {
  document.getElementById('result').textContent =
    'Please enter valid positive numbers only.';
}

// Triangle area calculation
function calculateTriangle() {
  const base = parseInput('triangle-base');
  const height = parseInput('triangle-height');

  if (base && height) {
    const area = 0.5 * base * height;
    updateResult(area, 'Triangle');
  } else {
    handleError();
  }
}

// Rectangle area calculation
function calculateRectangle() {
  const width = parseInput('rectangle-width');
  const length = parseInput('rectangle-length');

  if (width && length) {
    const area = width * length;
    updateResult(area, 'Rectangle');
  } else {
    handleError();
  }
}

// Parallelogram area calculation
function calculateParallelogram() {
  const base = parseInput('parallelogram-base');
  const height = parseInput('parallelogram-height');

  if (base && height) {
    const area = base * height;
    updateResult(area, 'Parallelogram');
  } else {
    handleError();
  }
}

// Rhombus area calculation
function calculateRhombus() {
  const d1 = parseInput('rhombus-d1');
  const d2 = parseInput('rhombus-d2');

  if (d1 && d2) {
    const area = 0.5 * d1 * d2;
    updateResult(area, 'Rhombus');
  } else {
    handleError();
  }
}

// Pentagon area calculation
function calculatePentagon() {
  const side = parseInput('pentagon-side');
  const apothem = parseInput('pentagon-apothem');

  if (side && apothem) {
    const area = 0.5 * side * apothem;
    updateResult(area, 'Pentagon');
  } else {
    handleError();
  }
}

// Ellipse area calculation
function calculateEllipse() {
  const a = parseInput('ellipse-a');
  const b = parseInput('ellipse-b');

  if (a && b) {
    const area = a * b * Math.PI;
    updateResult(area, 'Ellipse');
  } else {
    handleError();
  }
}
