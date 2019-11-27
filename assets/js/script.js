var validation = document.getElementById('submit');
validation.addEventListener('click', f_valid);
function f_valid() {
	var One = document.getElementById(`One`).value;
	var Two  = document.getElementById(`Two`).value;

  var result = One % Two;
  alert(result);
}
