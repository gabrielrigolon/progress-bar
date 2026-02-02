export function renderProgress({ current, total }) {
  const bar = document.getElementById('progressBar');
  const label = document.getElementById('progressLabel');
  const percentage = document.getElementById('percentage');

  const percent = Math.round((current / total) * 100);

  bar.style.width = `${percent}%`;
  label.textContent = `Desafio de Leitura da Bíblia • CCRV-JF `;
  percentage.textContent = `${percent}% concluído`
}
