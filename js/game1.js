'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock','scissors','paper'];

  const WORDS_RUS = ['Конец игры', 'СЧЕТ', 'Вы', 'Компьютер', 'Ничья', 'Продолжим', 'выиграл', 'ПОБЕДА'];
  const WORDS_ENG = ['End of the game', 'SCORE', 'You', 'Computer', 'Draw', 'Let\'s continue', 'won', 'VICTORY'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;
    const langWords = language === 'EN' || language === 'ENG' ? WORDS_ENG : WORDS_RUS;

    return function start() {
      const indexWord = getRandomIntInclusive(0, 2);
      // console.log('indexWord', indexWord);

      const answerPlayer = prompt(`${lang.join(',')}?`);
      // console.log('answerPlayer', answerPlayer);

      if ((answerPlayer === null)) {
        return alert(`${langWords[0]}!\n
        ${langWords[1]} ${langWords[2]} ${result.player}: ${langWords[3]} ${result.computer}`);
      }

      let indexFind = lang.indexOf(answerPlayer.toLowerCase(), 0);
      let sequel = true;

      const correctAnswer = (index) => {
        if (index === -1) {
          const answer = prompt(`${lang.join(',')}?`);
          index = lang.indexOf(answer.toLowerCase(), 0);
          correctAnswer(index);
        } else {
          return indexFind = index;
        }
      };
      correctAnswer(indexFind);

      switch (true) {
        case indexWord === indexFind:
          alert(`${langWords[4]}!`);
          sequel = confirm(`${langWords[5]}?`);
          break;
        case (((indexFind === 0) && (indexWord === 1)) || ((indexFind === 1) && (indexWord === 2)) || ((indexFind === 2) && (indexWord === 0))):
          alert(`${langWords[2]} ${lang[indexFind]}\n${langWords[3]} ${lang[indexWord]}\n${langWords[7]}!`);
          result.player += 1;
          sequel = confirm(`${langWords[5]}?`);
          break;
        default:
          alert(`${langWords[2]} ${lang[indexFind]}\n${langWords[3]} ${lang[indexWord]}\n${langWords[3]} ${langWords[6]}`);
          result.computer += 1;
          sequel = confirm(`${langWords[5]}?`);
          break;
      }

      if (sequel === false) {
        // return alert(`Конец игры!\n
        // СЧЕТ Вы ${result.player}: Компьютер ${result.computer}`);
        return alert(`${langWords[0]}!\n
        ${langWords[1]} ${langWords[2]} ${result.player}: ${langWords[3]} ${result.computer}`);
      }

      return start();
    };
  };

  window.RPS = game;
})();
