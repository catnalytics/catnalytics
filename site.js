(() => {
  const column = document.querySelector('.heroA__phone');
  const fan = document.querySelector('.fanA');
  function fitPhones() {
    if (!column || !fan) return;
    const scale = Math.min(1, Math.max(.1, (column.clientWidth - 32) / fan.offsetWidth));
    fan.style.transform = `scale(${scale})`;
    column.style.height = `${Math.round(500 * Math.max(scale, .75))}px`;
  }
  fitPhones();
  if (window.ResizeObserver && column) new ResizeObserver(fitPhones).observe(column);
  window.addEventListener('resize', fitPhones);
})();
