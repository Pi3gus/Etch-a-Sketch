const container = document.getElementById("container");

function createGrid(gridNumber){
  let gridArea = gridNumber * gridNumber;
  for(i = 1; i <= gridArea; i++){
    let cell = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
    container.insertAdjacentElement('beforeend', cell);
  };
  const gridCell = container.querySelectorAll('div');
  gridCell.forEach(gridCell => {gridCell.addEventListener('click', )});
};

createGrid(16);