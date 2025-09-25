particlesJS("particles-js", {
  "particles": {
    "number": { "value": 150, "density": { "enable": true, "value_area": 1000 } },
    "color": { "value": "#90C3C8" },
    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
    "opacity": { "value": 0.5, "random": false },
    "size": { "value": 2, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#90C3C8", "opacity": 0.5, "width": 1 },
    "move": { "enable": true, "speed": 1.2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "window",   // <--- use window so particle lib sees mouse globally
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": false, "mode": "push" },
      "resize": true
    },
    "modes": {
      "repulse": { "distance": 80, "duration": 0.8 },
      "push": { "particles_nb": 6 },
      "grab": { "distance": 180, "line_linked": { "opacity": 0.7 } }
    }
  },
  "retina_detect": true
});
