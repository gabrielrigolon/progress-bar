import { renderProgress } from './progress.js';

const progressState = {
  current: 115,
  total: 1189
};

// regra de negócio
renderProgress(progressState);

// exemplo de atualização futura
function advance() {
  if (progressState.current < progressState.total) {
    progressState.current++;
    renderProgress(progressState);
  }
}

window.exportImage = async function () {
  const node = document.getElementById('export-area');

  await document.fonts.ready;

  htmlToImage.toPng(node, {
    pixelRatio: 2,
    cacheBust: true,
  })
  .then((dataUrl) => {
    const link = document.createElement('a');
    link.download = 'progresso.png';
    link.href = dataUrl;
    link.click();
  })
  .catch((err) => {
    console.error('Erro ao gerar imagem', err);
  });
};

window.setMode = function (mode) {
  const exportArea = document.getElementById('export-area');

  if (mode === 'story') {
    exportArea.classList.add('story');
  } else {
    exportArea.classList.remove('story');
  }
};
