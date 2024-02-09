import './play-game.scss';
import { Gameboard, Ship } from '../data/game';
import { shipPlacement } from './ship-placement';

let playerGameboard = new Gameboard();
let computerGameboard = new Gameboard();

export function playGame(shipsPlaced) {
  // clean state for new game if Player replays
  playerGameboard = new Gameboard();
  computerGameboard = new Gameboard();

  shipsPlaced.forEach((ship) => {
    const newShip = new Ship(ship.length, ship.orientation, ship.coordinates);
    playerGameboard.placeShip(newShip);
  });

  initPageElements();
  initComputerBoard();
  placeShipsOnPage('player', playerGameboard);
  playerTurn();
}

function computerTurn() {
  const title = document.querySelector('.game h2');
  title.innerHTML = `Computer's turn`;
  title.classList.remove('player-turn');
  title.classList.add('computer-turn');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.add('not-your-turn');
    sq.removeEventListener('click', playerClickHandler);
  });

  setTimeout(() => {
    let x = ((Math.random().toFixed(1) * 10) % 9) + 1;
    let y = ((Math.random().toFixed(1) * 10) % 9) + 1;

    while (playerGameboard.board[`x${x}-y${y}`].hit) {
      x = ((Math.random().toFixed(1) * 10) % 9) + 1;
      y = ((Math.random().toFixed(1) * 10) % 9) + 1;
    }

    playerGameboard.receiveAttack(x, y);
    const squareHit = document.querySelector(
      `.player .grid-square[data-x="${x}"][data-y="${y}"]`
    );

    if (playerGameboard.board[`x${x}-y${y}`].ship) {
      squareHit.classList.add('shot-hit');
    } else {
      squareHit.classList.add('shot-miss');
    }

    if (playerGameboard.checkGameEnd()) {
      gameOver('Computer');
    } else {
      playerTurn();
    }
  }, 1000);
}

function gameOver(winner) {
  const title = document.querySelector('.game h2');
  title.innerHTML = `${winner} wins!`;
  title.classList.remove('player-turn');
  title.classList.remove('computer-turn');
  title.classList.add('game-over');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.add('not-your-turn');
    sq.removeEventListener('click', playerClickHandler);
  });

  const restartButton = document.createElement('button');
  restartButton.classList.add('game-over-button');
  restartButton.type = 'button';
  restartButton.innerHTML = 'Play another game';
  restartButton.addEventListener('click', shipPlacement);
  document.querySelector('.game').appendChild(restartButton);
}

function initPageElements() {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
  <div class="game">
    <h2 class="player-turn">Player's turn</h2>
    <div class="game-boards">
      <div class="player">
        <h3>Player</h3>
        <div class="game-board">
          <div class="board-grid"></div>
        </div>
      </div>
      <div class="computer">
        <h3>Computer</h3>
        <div class="game-board">
          <div class="board-grid"></div>
        </div>
      </div>
    </div>
  </div>
`;

  for (let y = 9; y > 0; y--) {
    for (let x = 1; x < 10; x++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.dataset.x = x;
      square.dataset.y = y;
      document.querySelector('.player .board-grid').appendChild(square);
      document
        .querySelector('.computer .board-grid')
        .appendChild(square.cloneNode());
    }
  }
}

function initComputerBoard() {
  for (let i = 5; i > 0; i--) {
    const length = i;
    const orientation =
      (Math.random().toFixed(1) * 10) % 2 ? 'horizontal' : 'vertical';
    const coordinates = {
      x: ((Math.random().toFixed(1) * 10) % 9) + 1,
      y: ((Math.random().toFixed(1) * 10) % 9) + 1,
    };
    const ship = new Ship(length, orientation, coordinates);

    while (hasCollisonsOrOutOfBounds(ship)) {
      ship.coordinates.x = ((Math.random().toFixed(1) * 10) % 9) + 1;
      ship.coordinates.y = ((Math.random().toFixed(1) * 10) % 9) + 1;
    }

    computerGameboard.placeShip(ship);
  }

  function hasCollisonsOrOutOfBounds(ship) {
    const [mainAxis, mainAxisCoord] =
      ship.orientation === 'horizontal'
        ? ['x', ship.coordinates.x]
        : ['y', ship.coordinates.y];
    const [secondaryAxis, secondaryAxisCoord] =
      ship.orientation === 'horizontal'
        ? ['y', ship.coordinates.y]
        : ['x', ship.coordinates.x];
    const shipLength = ship.length;

    if (mainAxisCoord > 9 - (shipLength - 1)) {
      return true;
    }

    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const x = ship.orientation === 'horizontal' ? i : secondaryAxisCoord;
      const y = ship.orientation === 'horizontal' ? secondaryAxisCoord : i;
      const sq = computerGameboard.board[`x${x}-y${y}`];
      if (sq.ship) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function placeShipsOnPage(player, board) {
  board.ships.forEach((ship) => {
    const { x, y } = ship.coordinates;
    const length = ship.length;
    const orientation = ship.orientation;
    const [mainAxis, mainAxisCoord] =
      orientation === 'horizontal' ? ['x', x] : ['y', y];
    const [secondaryAxis, secondaryAxisCoord] =
      orientation === 'horizontal' ? ['y', y] : ['x', x];

    for (let i = mainAxisCoord; i < mainAxisCoord + length; i++) {
      const sq = document.querySelector(
        `.${player} .game-board div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('ship');
    }
  });
}

function playerClickHandler(e) {
  const square = e.target;
  const x = square.dataset.x;
  const y = square.dataset.y;
  const coordinateInfo = computerGameboard.board[`x${x}-y${y}`];
  if (!coordinateInfo.hit) {
    computerGameboard.receiveAttack(x, y);
    if (coordinateInfo.ship) {
      square.classList.add('shot-hit');
    } else {
      square.classList.add('shot-miss');
    }

    if (computerGameboard.checkGameEnd()) {
      gameOver('Player');
    } else {
      computerTurn();
    }
  }
}

function playerTurn() {
  const title = document.querySelector('.game h2');
  title.innerHTML = `Player's turn`;
  title.classList.remove('computer-turn');
  title.classList.add('player-turn');

  const boardSquares = document.querySelectorAll('.computer .grid-square');
  boardSquares.forEach((sq) => {
    sq.classList.remove('not-your-turn');
    sq.addEventListener('click', playerClickHandler);
  });
}
