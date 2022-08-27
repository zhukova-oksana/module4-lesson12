'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

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

    return function start() {
      const indexWord = getRandomIntInclusive(0, 2);
      // console.log('indexWord', indexWord);

      let answerPlayer = prompt(`${FIGURES_RUS.join(',')}?`);
      // console.log('answerPlayer', answerPlayer);

      if ((answerPlayer === null)) {
        return alert(`Конец игры!\n
        СЧЕТ Вы ${result.player}: Компьютер ${result.computer}`);
      }

      const indexFind = FIGURES_RUS.indexOf(answerPlayer.toLowerCase(), 0);
      // console.log('find', indexFind);
      let sequel = true;

      if (indexFind === -1) {
        answerPlayer = prompt(`${FIGURES_RUS.join(',')}?`);
        return answerPlayer;
      }

      switch (true) {
        case indexWord === indexFind:
          alert('Ничья!');
          sequel = confirm('Продолжим?');
          break;
        case (((indexFind === 0) && (indexWord === 1)) || ((indexFind === 1) && (indexWord === 2)) || ((indexFind === 2) && (indexWord === 0))):
          alert(`Вы ${FIGURES_RUS[indexFind]}\nКомп ${FIGURES_RUS[indexWord]}\nВы выиграли`);
          result.player += 1;
          sequel = confirm('Продолжим?');
          break;
        default:
          alert(`Вы ${FIGURES_RUS[indexFind]}\nКомп ${FIGURES_RUS[indexWord]}\nКомп выиграл`);
          result.computer += 1;
          sequel = confirm('Продолжим?');
          break;
      }

      if (sequel === false) {
        return alert(`Конец игры!\n
        СЧЕТ Вы ${result.player}: Компьютер ${result.computer}`);
      }

      return start();
    };
  };

  window.RPS = game;
})();
