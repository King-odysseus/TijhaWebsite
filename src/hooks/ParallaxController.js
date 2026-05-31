const elements = new Map();
let rafId = null;
let io = null;

function ensureObserver() {
  if (io) return;
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        const cfg = elements.get(el);
        if (!cfg) continue;
        cfg.inView = entry.isIntersecting;
      }
    },
    { rootMargin: '200px' }
  );
}

function tick() {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  for (const [el, cfg] of elements) {
    if (!cfg.inView) continue;

    // Calculate parallax offset: element position relative to viewport × speed
    const rect = el.getBoundingClientRect();
    const offset = (rect.top - vh) * cfg.speed;

    el.style.transform = `translate3d(0, ${Math.round(offset)}px, 0)`;
  }

  rafId = requestAnimationFrame(tick);
}

function start() {
  if (rafId) return;
  ensureObserver();
  rafId = requestAnimationFrame(tick);
}

function stop() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

const ParallaxController = {
  register(el, config) {
    elements.set(el, { speed: config.speed, inView: false });
    ensureObserver();
    io.observe(el);
    if (elements.size === 1) start();
  },

  unregister(el) {
    elements.delete(el);
    if (io) io.unobserve(el);
    if (elements.size === 0) stop();
  },
};

export default ParallaxController;
