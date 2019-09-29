const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // dataset outputs all the data- atrributes in a object/string.
    const suffix = this.dataset.sizing || ''; // not all have a sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

