import { useState, useEffect } from 'react';

function useTouchDevice() {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    setTouch(
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  return touch;
}

export default useTouchDevice;
