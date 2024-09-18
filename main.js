function calculateTriangle() {
  const base = parseFloat(document.getElementById('triangle-base').value);
  const height = parseFloat(document.getElementById('triangle-height').value);

  if (!isNaN(base) && !isNaN(height)) {
    const area = base * height * 0.5;
    document.getElementById(
      'result'
    ).innerHTML = `Triangle Area : ${area.toFixed(2)} cm<sup>2</sup>`;
    // console.log(document.getElementById('result').innerHTML);
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}

function calculateRectangle() {
  const width = parseFloat(document.getElementById('rectangle-width').value);
  const length = parseFloat(document.getElementById('rectangle-length').value);

  if (!isNaN(width) && !isNaN(length)) {
    const area = width * length;
    document.getElementById(
      'result'
    ).innerHTML = `Rectangle Area : ${area.toFixed(2)} cm<sup>2</sup>`;
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}

function calculateParallelogram() {
  const base = parseFloat(document.getElementById('parallelogram-base').value);
  const height = parseFloat(
    document.getElementById('parallelogram-height').value
  );

  if (!isNaN(base) && !isNaN(height)) {
    const area = base * height;
    document.getElementById(
      'result'
    ).innerHTML = `Parallelogram Area : ${area.toFixed(2)} cm<sup>2</sup>`;
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}

function calculateRhombus() {
  const d1 = parseFloat(document.getElementById('rhombus-d1').value);
  const d2 = parseFloat(document.getElementById('rhombus-d2').value);

  if (!isNaN(d1) && !isNaN(d2)) {
    const area = d1 * d2 * 0.5;
    document.getElementById(
      'result'
    ).innerHTML = `Rhombus Area : ${area.toFixed(2)} cm<sup>2</sup>`;
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}

function calculatePentagon() {
  const side = parseFloat(document.getElementById('pentagon-side').value);
  const apothem = parseFloat(document.getElementById('pentagon-apothem').value);

  if (!isNaN(side) && !isNaN(apothem)) {
    const area = side * apothem * 0.5;
    document.getElementById(
      'result'
    ).innerHTML = `Pentagon Area : ${area.toFixed(2)} cm<sup>2</sup>`;
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}

function calculateEllipse() {
  const a = parseFloat(document.getElementById('ellipse-a').value);
  const b = parseFloat(document.getElementById('ellipse-b').value);

  if (!isNaN(a) && !isNaN(b)) {
    const area = a * b * Math.PI;
    document.getElementById(
      'result'
    ).innerHTML = `Ellipse Area : ${area.toFixed(2)} cm<sup>2</sup>`;
  } else {
    document.getElementById('result').textContent =
      'Please enter valid numbers only.';
  }
}
