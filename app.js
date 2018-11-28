const inputEl = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';

  console.log(document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix));
}

inputEl.forEach(inputEl => inputEl.addEventListener('change', handleUpdate));
inputEl.forEach(inputEl => inputEl.addEventListener('mousemove', handleUpdate));