// A small, progressively enhanced destination selector. All regions remain
// readable without JavaScript; interactive controls are revealed after setup.
const regions = [...document.querySelectorAll('[data-region]')];
const controls = document.querySelector('[data-region-controls]');
if (controls && regions.length) {
  const buttons = [...controls.querySelectorAll('button')];
  const activate = (id) => {
    regions.forEach(region => { region.hidden = region.id !== id; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.target === id)));
  };
  buttons.forEach(button => button.addEventListener('click', () => activate(button.dataset.target)));
  activate(buttons[0].dataset.target);
  controls.hidden = false;
}
