class Ship {
  constructor(length, orientation, coordinates) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.orientation = orientation;
    this.coordinates = coordinates;
  }

  hit() {
    if (!this.sunk) {
      this.hits++;
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
  }
}

class Gameboard {
  // 9 X X X X X X X X X X
  // 8 X X X X X X X X X X
  // 7 X X X X X X X X X X
  // 6 X X X X X X X X X X
  // 5 X X X X X X X X X X
  // 4 X X X X X X X X X X
  // 3 X X X X X X X X X X
  // 2 X X X X X X X X X X
  // 1 X X X X X X X X X X
  // O 1 2 3 4 5 6 7 7 8 9

  constructor() {
    this.board = {};
    this.ships = [];
    for (let x = 1; x < 10; x++) {
      for (let y = 1; y < 10; y++) {
        this.board[`x${x}-y${y}`] = { ship: null, hit: false };
      }
    }
  }

  checkGameEnd() {
    return this.ships.every((ship) => ship.sunk);
  }

  placeShip(ship) {
    const { x, y } = ship.coordinates;
    const isHorizontal = ship.orientation === 'horizontal';
    const mainCoord = isHorizontal ? x : y;
    this.ships.push(ship);
    for (let i = mainCoord; i < mainCoord + ship.length; i++) {
      this.board[`x${isHorizontal ? i : x}-y${isHorizontal ? y : i}`].ship =
        ship;
    }
  }

  receiveAttack(x, y) {
    const location = this.board[`x${x}-y${y}`];
    if (!location.hit) {
      location.hit = true;
      if (location.ship) {
        location.ship.hit();
      }
    }
  }
}

module.exports = { Gameboard, Ship };
