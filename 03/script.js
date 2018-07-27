const inputs = document.querySelectorAll('.controls input');

let handleUpdate = function() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);
});

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); // ES6

