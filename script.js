function getRandomColor() {
  const colors = ['green', 'blue', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function applyRandomColors() {
  const h5Tags = document.querySelectorAll('h5');

  h5Tags.forEach(h5 => {
    h5.addEventListener('click', () => {
      const randomColor = getRandomColor();
      h5.style.color = randomColor;
    });
  });
}

applyRandomColors();
