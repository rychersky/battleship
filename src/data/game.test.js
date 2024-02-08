const { Gameboard, Ship } = require('./game');

describe('Ship', () => {
  test('hit() adds hits and checks length', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toEqual(1);
    ship.hit();
    expect(ship.hits).toEqual(2);
    expect(ship.sunk).toBeTruthy;
  });
});

describe('Gameboard', () => {
  describe('placeShip()', () => {
    test('horizontal', () => {
      const board = new Gameboard();
      const ship = new Ship(2, 'horizontal', { x: 2, y: 2 });
      const expected = mockBoard();
      ['x2-y2', 'x3-y2'].forEach((coord) => {
        expected[coord].ship = ship;
      });
      board.placeShip(ship);
      expect(board.board).toEqual(expected);
    });

    test('vertical', () => {
      const board = new Gameboard();
      const ship = new Ship(2, 'vertical', { x: 2, y: 2 });
      const expected = mockBoard();
      ['x2-y2', 'x2-y3'].forEach((coord) => {
        expected[coord].ship = ship;
      });
      board.placeShip(ship);
      expect(board.board).toEqual(expected);
    });
  });

  test('receiveAttack()', () => {
    const board = new Gameboard();
    const ship = new Ship(2, 'horizontal', { x: 2, y: 2 });
    board.placeShip(ship);
    const firstAttack = board.receiveAttack(2, 2);
    expect(firstAttack).toBeFalsy();
    const secondAttack = board.receiveAttack(3, 2);
    expect(secondAttack).toBeTruthy();
  });
});

function mockBoard() {
  return {
    'x1-y1': { ship: null, hit: false },
    'x1-y2': { ship: null, hit: false },
    'x1-y3': { ship: null, hit: false },
    'x1-y4': { ship: null, hit: false },
    'x1-y5': { ship: null, hit: false },
    'x1-y6': { ship: null, hit: false },
    'x1-y7': { ship: null, hit: false },
    'x1-y8': { ship: null, hit: false },
    'x1-y9': { ship: null, hit: false },
    'x2-y1': { ship: null, hit: false },

    'x2-y2': { ship: null, hit: false },
    'x2-y3': { ship: null, hit: false },
    'x2-y4': { ship: null, hit: false },
    'x2-y5': { ship: null, hit: false },
    'x2-y6': { ship: null, hit: false },
    'x2-y7': { ship: null, hit: false },
    'x2-y8': { ship: null, hit: false },
    'x2-y9': { ship: null, hit: false },

    'x3-y1': { ship: null, hit: false },
    'x3-y2': { ship: null, hit: false },
    'x3-y3': { ship: null, hit: false },
    'x3-y4': { ship: null, hit: false },
    'x3-y5': { ship: null, hit: false },
    'x3-y6': { ship: null, hit: false },
    'x3-y7': { ship: null, hit: false },
    'x3-y8': { ship: null, hit: false },
    'x3-y9': { ship: null, hit: false },

    'x4-y1': { ship: null, hit: false },
    'x4-y2': { ship: null, hit: false },
    'x4-y3': { ship: null, hit: false },
    'x4-y4': { ship: null, hit: false },
    'x4-y5': { ship: null, hit: false },
    'x4-y6': { ship: null, hit: false },
    'x4-y7': { ship: null, hit: false },
    'x4-y8': { ship: null, hit: false },
    'x4-y9': { ship: null, hit: false },

    'x5-y1': { ship: null, hit: false },
    'x5-y2': { ship: null, hit: false },
    'x5-y3': { ship: null, hit: false },
    'x5-y4': { ship: null, hit: false },
    'x5-y5': { ship: null, hit: false },
    'x5-y6': { ship: null, hit: false },
    'x5-y7': { ship: null, hit: false },
    'x5-y8': { ship: null, hit: false },
    'x5-y9': { ship: null, hit: false },

    'x6-y1': { ship: null, hit: false },
    'x6-y2': { ship: null, hit: false },
    'x6-y3': { ship: null, hit: false },
    'x6-y4': { ship: null, hit: false },
    'x6-y5': { ship: null, hit: false },
    'x6-y6': { ship: null, hit: false },
    'x6-y7': { ship: null, hit: false },
    'x6-y8': { ship: null, hit: false },
    'x6-y9': { ship: null, hit: false },

    'x7-y1': { ship: null, hit: false },
    'x7-y2': { ship: null, hit: false },
    'x7-y3': { ship: null, hit: false },
    'x7-y4': { ship: null, hit: false },
    'x7-y5': { ship: null, hit: false },
    'x7-y6': { ship: null, hit: false },
    'x7-y7': { ship: null, hit: false },
    'x7-y8': { ship: null, hit: false },
    'x7-y9': { ship: null, hit: false },

    'x8-y1': { ship: null, hit: false },
    'x8-y2': { ship: null, hit: false },
    'x8-y3': { ship: null, hit: false },
    'x8-y4': { ship: null, hit: false },
    'x8-y5': { ship: null, hit: false },
    'x8-y6': { ship: null, hit: false },
    'x8-y7': { ship: null, hit: false },
    'x8-y8': { ship: null, hit: false },
    'x8-y9': { ship: null, hit: false },

    'x9-y1': { ship: null, hit: false },
    'x9-y2': { ship: null, hit: false },
    'x9-y3': { ship: null, hit: false },
    'x9-y4': { ship: null, hit: false },
    'x9-y5': { ship: null, hit: false },
    'x9-y6': { ship: null, hit: false },
    'x9-y7': { ship: null, hit: false },
    'x9-y8': { ship: null, hit: false },
    'x9-y9': { ship: null, hit: false },
  };
}
