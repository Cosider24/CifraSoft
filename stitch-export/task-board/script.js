document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.add('btn-press');
    setTimeout(() => btn.classList.remove('btn-press'), 120);
  });
});

const searchInput = document.querySelector('input[type="text"], input[type="search"]');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll('h4, p, span').forEach((el) => {
      const text = (el.textContent || '').toLowerCase();
      if (!q || text.includes(q)) {
        el.style.opacity = '1';
      } else if (el.tagName === 'H4') {
        el.style.opacity = '.45';
      }
    });
  });
}
