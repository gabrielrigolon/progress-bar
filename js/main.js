import { renderProgress } from './progress.js';

const progressState = {
  current: 94,
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
