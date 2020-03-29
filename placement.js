window.onload = () => {
  onSceneLoaded(); 
};
  
  
  function onSceneLoaded() 
  { 
    const raycaster = document.querySelector('[ar-raycaster]');
    const cursor = document.querySelector('#cursor');
    raycaster.addEventListener('raycaster-intersection', (event) => {
      cursor.setAttribute('position', event.detail.intersections[0].point);
    });
  }

  const scene = document.querySelector('a-scene');
  scene.addEventListener('loaded', onSceneLoaded);