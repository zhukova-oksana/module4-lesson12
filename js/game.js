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
      const hiddenWord = FIGURES_RUS[getRandomIntInclusive(0, 2)];

      // console.log('hiddenWord', hiddenWord);

      const answerPlayer = prompt(`${FIGURES_RUS.join(',')}?`);
      // console.log('answerPlayer', answerPlayer);

      if ((answerPlayer === null)) {
        return alert(`Конец игры!\n
        СЧЕТ Вы ${result.player}: Компьютер ${result.computer}`);
      }

      const findMatch = (arr, x) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].indexOf(x) === 0) {
            return arr[i];
          }
        }
        return false;
      };

      const choicePlayer = findMatch(FIGURES_RUS, answerPlayer.toLowerCase());
      let sequel = true;

      switch (true) {
        case (choicePlayer === hiddenWord):
          alert(`Компьютер: ${hiddenWord} \n Вы: ${choicePlayer}\n Ничья!`);
          sequel = confirm(`Продолжим?`);
          break;
        case ((choicePlayer === 'ножницы') && (hiddenWord === 'камень')) ||
        ((choicePlayer === 'бумага') && (hiddenWord === 'ножницы')) ||
        ((choicePlayer === 'камень') && (hiddenWord === 'бумага')):
          alert(`Компьютер: ${hiddenWord}
Вы: ${choicePlayer}\n Компьютер победил!`);
          result.computer += 1;
          sequel = confirm(`Продолжим?`);
          break;
        case ((choicePlayer === 'камень') && (hiddenWord === 'ножницы')) ||
        ((choicePlayer === 'ножницы') && (hiddenWord === 'бумага')) ||
        ((choicePlayer === 'бумага') && (hiddenWord === 'камень')):
          alert(`Компьютер: ${hiddenWord}
Вы: ${choicePlayer}\n Вы победили!`);
          result.player += 1;
          sequel = confirm(`Продолжим?`);
          break;
      }

      if (sequel === false) {
        return alert(`Конец игры!\n
СЧЕТ \nВы ${result.player}: Компьютер ${result.computer}`);
      }

      return start();
    };
  };

  window.RPS = game;
})();
