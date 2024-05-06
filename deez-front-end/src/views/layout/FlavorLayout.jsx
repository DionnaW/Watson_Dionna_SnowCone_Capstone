import React from 'react';

function FlavorLayout() {
  return (
    <div className={style.flavorContainer}>
      <div className={style.flavorBottle}>
        <img src="bottle1.jpg" alt="Flavor 1" width="100" height="200" />
        <div className={style.flavorName}>Flavor 1</div>
      </div>
      <div className={style.flavorBottle}>
        <img src="bottle2.jpg" alt="Flavor 2" width="100" height="200" />
        <div className={style.flavorName}>Flavor 2</div>
      </div>
      <div className={style.flavorBottle}>
        <img src="bottle60.jpg" alt="Flavor 60" width="100" height="200" />
        <div className={style.flavorName}>Flavor 60</div>
      </div>
    </div>
  );
}

export default FlavorLayout;