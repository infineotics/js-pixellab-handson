var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  var radius = inputRadius.value || 0;
  var result = 0;

  result = 4 * Math.pow(7, 2) * Math.PI;

  elementResult.innerText = result;

  event.preventDefault();
});
