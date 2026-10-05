const button = document.querySelector('.flip-card');
const front = document.getElementById('postcard-front');
const back = document.getElementById('postcard-back');
if (button && front && back) {
  back.hidden = true;
  button.hidden = false;
  button.addEventListener('click', () => {
    const showBack = button.getAttribute('aria-pressed') !== 'true';
    front.hidden = showBack;
    back.hidden = !showBack;
    button.setAttribute('aria-pressed', String(showBack));
    button.textContent = showBack ? 'Back to the photograph ↻' : 'Read the other side ↻';
  });
}
