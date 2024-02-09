import './main.scss';
import { shipPlacement } from './ui/ship-placement';
import { playGame } from './ui/play-game';

// shipPlacement();
playGame([
  {
    coordinates: {
      x: 2,
      y: 9,
    },
    length: 5,
    orientation: 'horizontal',
  },
  {
    coordinates: {
      x: 2,
      y: 7,
    },
    length: 4,
    orientation: 'horizontal',
  },
  {
    coordinates: {
      x: 2,
      y: 5,
    },
    length: 3,
    orientation: 'horizontal',
  },
  {
    coordinates: {
      x: 2,
      y: 3,
    },
    length: 2,
    orientation: 'horizontal',
  },
  {
    coordinates: {
      x: 2,
      y: 1,
    },
    length: 1,
    orientation: 'horizontal',
  },
]);
