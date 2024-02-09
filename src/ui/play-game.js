import './play-game.scss';
import { Gameboard, Ship } from '../data/game';

const playerGameboard = new Gameboard();
const computerGameboard = new Gameboard();

document.addEventListener('click', () => console.log(computerGameboard));

export function playGame(shipsPlaced) {
  shipsPlaced.forEach((ship) => {
    const newShip = new Ship(ship.length, ship.orientation, ship.coordinates);
    playerGameboard.placeShip(newShip);
  });

  initPageElements();
  initComputerBoard();
  placeShipsOnPage('player', playerGameboard);
  // placeShipsOnPage('computer', computerGameboard);
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
