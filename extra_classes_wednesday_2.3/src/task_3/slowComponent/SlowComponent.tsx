// ORIGA------------------------
export const SlowComponent = () => {
  console.log('SlowComponent re-render...');

  let now = performance.now();

  while (performance.now() - now < 1000) {
    // Artificial delay -- do nothing for 100ms
  }

  console.log(now)

  return <p>I am a very slow component tree.</p>;
};


// memo-----------------------------------------------------
// import React, { memo } from 'react';
//
// export const SlowComponent = memo(() => {
//   console.log('SlowComponent re-render...');
//
//   let now = performance.now();
//
//   while (performance.now() - now < 1000) {
//     // Искусственная задержка - ничего не делаем в течение 100 мс
//   }
//
//   console.log(now);
//
//   return <p>I am a very slow component tree.</p>;
// });
