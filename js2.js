function updateResult(message) {
  document.getElementById('result').innerHTML = message;
}

function validateInput(values) {
  return values.every((value) => !isNaN(value));
}

function calculateTriangle() {
  const base = parseFloat(document.getElementById('triangle-base').value);
  const height = parseFloat(document.getElementById('triangle-height').value);

  if (validateInput([base, height])) {
    const area = 0.5 * base * height;
    updateResult(`Triangle Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}

function calculateRectangle() {
  const width = parseFloat(document.getElementById('rectangle-width').value);
  const length = parseFloat(document.getElementById('rectangle-length').value);

  if (validateInput([width, length])) {
    const area = width * length;
    updateResult(`Rectangle Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}

function calculateParallelogram() {
  const base = parseFloat(document.getElementById('parallelogram-base').value);
  const height = parseFloat(
    document.getElementById('parallelogram-height').value
  );

  if (validateInput([base, height])) {
    const area = base * height;
    updateResult(`Parallelogram Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}

function calculateRhombus() {
  const d1 = parseFloat(document.getElementById('rhombus-d1').value);
  const d2 = parseFloat(document.getElementById('rhombus-d2').value);

  if (validateInput([d1, d2])) {
    const area = 0.5 * d1 * d2;
    updateResult(`Rhombus Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}

function calculatePentagon() {
  const side = parseFloat(document.getElementById('pentagon-side').value);
  const apothem = parseFloat(document.getElementById('pentagon-apothem').value);

  if (validateInput([side, apothem])) {
    const area = 0.5 * side * apothem;
    updateResult(`Pentagon Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}

function calculateEllipse() {
  const a = parseFloat(document.getElementById('ellipse-a').value);
  const b = parseFloat(document.getElementById('ellipse-b').value);

  if (validateInput([a, b])) {
    const area = a * b * Math.PI;
    updateResult(`Ellipse Area: ${area.toFixed(2)} cm<sup>2</sup>`);
  } else {
    updateResult('Please enter valid numbers only.');
  }
}
