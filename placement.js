window.onload = () => {
  placeCursor(); 
};

function placeCursor() 
{ 
  const raycaster = document.querySelector('[ar-raycaster]');
  const cursor = document.querySelector('#cursor');
  raycaster.addEventListener('raycaster-intersection', (event) => {
    cursor.setAttribute('position', event.detail.intersections[0].point);
  });
}

window.unload = () => {
  clearInterval(t);
};

const scene = document.querySelector('a-scene');
scene.addEventListener('loaded', onSceneLoaded);
myVar = setInterval(placeCursor, 1000);