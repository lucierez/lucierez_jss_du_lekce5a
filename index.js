const updateSkill = (id, level) => {
  const postup = document.querySelector(`#${id} .skill__progress`);
  const hodnota = document.querySelector(`#${id} .skill__value`);
  hodnota.textContent = `${level} / 100`;
  postup.style.width = `${level}%`;
};

const skillHtml = Number(prompt('Jaká je vaše znalost HTML? (ohodnoťte na stupnici od 0 až 100)'));
const skillCss = Number(prompt('Jaká je vaše znalost CSS? (ohodnoťte na stupnici od 0 až 100)'));
const skillJS = Number(prompt('Jaká je vaše znalost Javascriptu? (ohodnoťte na stupnici od 0 až 100)'));

updateSkill('skill1', skillHtml);
updateSkill('skill2', skillCss);
updateSkill('skill3', skillJS);