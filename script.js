const counterButtons = document.querySelectorAll('.counter-button');

counterButtons.forEach(button => {
  button.addEventListener('click', () => {
    let currentCount = parseInt(button.textContent);
    currentCount++;
    button.textContent = currentCount;
  });
});

