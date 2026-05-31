import { useRef, useEffect, useMemo } from 'react';
import ParallaxController from './ParallaxController';
import useReducedMotion from './useReducedMotion';
import useTouchDevice from './useTouchDevice';

function useParallax(options = {}) {
  const { speed = 0.3, disabled = false } = options;
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const touch = useTouchDevice();

  const shouldDisable = disabled || reduced || touch;
  const finalSpeed = shouldDisable ? 0 : speed;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ParallaxController.register(el, { speed: finalSpeed });

    return () => {
      ParallaxController.unregister(el);
      // Reset transform on unmount
      el.style.transform = '';
    };
  }, [finalSpeed]);

  const style = useMemo(
    () => ({
      willChange: shouldDisable ? undefined : 'transform',
    }),
    [shouldDisable]
  );

  return { ref, style };
}

export default useParallax;
