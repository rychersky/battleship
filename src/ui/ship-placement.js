import './ship-placement.css';

const placementState = {
  orientation: 'horizontal',
  shipsLeft: [5, 4, 3, 2, 1],
  chosenCoordinates: [],
};

export function shipPlacement() {
  createGrid();
  document.addEventListener('keydown', handleSpacebar);

  const squares = document.querySelectorAll('.placement-square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', handleMouseEnter);
    square.addEventListener('mouseleave', handleMouseLeave);
    square.addEventListener('click', handleClick);
  });
}

function createGrid() {
  const main = document.querySelector('main');
  main.innerHTML = /* html */ `
    <div class="ship-placement">
      <h2>Place your ships</h2>
      <p>(press <code>spacebar</code> to rotate orientation)</p>
      <div class="placement-board">
        <div class="placement-grid"></div>        
      </div>
    </div>
  `;

  for (let y = 9; y > 0; y--) {
    for (let x = 1; x < 10; x++) {
      const square = document.createElement('div');
      square.classList.add('placement-square');
      square.dataset.x = x;
      square.dataset.y = y;
      document.querySelector('.placement-grid').appendChild(square);
    }
  }
}

function handleClick(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  const validSquare = ![...square.classList].some(
    (className) =>
      className === 'placement-invalid' || className === 'placement-ship'
  );
  if (validSquare) {
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('placement-ship');
    }
    placementState.chosenCoordinates.push({
      x: square.dataset.x,
      y: square.dataset.y,
      length: placementState.shipsLeft[0],
      orientation: placementState.orientation,
    });
    placementState.shipsLeft.shift();
  }
}

function handleMouseEnter(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  if (
    mainAxisCoord > 9 - (shipLength - 1) ||
    square.classList.contains('placement-ship')
  ) {
    square.classList.add('placement-invalid');
    return;
  } else {
    // validity check loop
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      if (sq.classList.contains('placement-ship')) {
        square.classList.add('placement-invalid');
        return;
      }
    }
    // applying styling if valid
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.add('placement-hover');
    }
  }
}

function handleMouseLeave(e) {
  const square = e.target;
  const [mainAxis, mainAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['x', Number(square.dataset.x)]
      : ['y', Number(square.dataset.y)];
  const [secondaryAxis, secondaryAxisCoord] =
    placementState.orientation === 'horizontal'
      ? ['y', Number(square.dataset.y)]
      : ['x', Number(square.dataset.x)];
  const shipLength = placementState.shipsLeft[0];

  square.classList.remove('placement-invalid');
  if (mainAxisCoord <= 9 - (shipLength - 1)) {
    for (let i = mainAxisCoord; i < mainAxisCoord + shipLength; i++) {
      const sq = document.querySelector(
        `.placement-grid div[data-${mainAxis}="${i}"][data-${secondaryAxis}="${secondaryAxisCoord}"]`
      );
      sq.classList.remove('placement-hover');
    }
  }
}

function handleSpacebar(e) {
  if (e.code === 'Space') {
    placementState.orientation =
      placementState.orientation === 'horizontal' ? 'vertical' : 'horizontal';
  }
  const squares = document.querySelectorAll('.placement-square');
  squares.forEach((square) => square.classList.remove('placement-hover'));
}
