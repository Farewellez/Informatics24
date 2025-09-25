function animateBinaryToText(el, text, opts = {}) {
  el.innerHTML = ""; // clear
  const chars = Array.from(text);

  let totalDelay = 0;

  chars.forEach((ch) => {
    const charCode = ch.charCodeAt(0);
    const base = opts.base || 16; // default hex if not given
    const codeStr = charCode.toString(base);

    // binary often needs padding (8 bits), hex needs 2 chars
    const padLength = base === 2 ? 8 : 2;
    const encoded = codeStr.padStart(padLength, "0");

    // temporary span
    const bitSpan = document.createElement("span");
    bitSpan.className = "binary-bitspan";
    el.appendChild(bitSpan);

    // type bits/hex digits
    for (let i = 0; i < encoded.length; i++) {
      const b = encoded[i];
      setTimeout(() => {
        bitSpan.textContent += b;
      }, totalDelay + i * opts.bitDelay);
    }

    // after reveal -> swap with actual char
    const afterDelay = totalDelay + encoded.length * opts.bitDelay + opts.revealDelay;
    setTimeout(() => {
      const charSpan = document.createElement("span");
      charSpan.className = "binary-char";
      charSpan.textContent = ch;

      el.replaceChild(charSpan, bitSpan);

      requestAnimationFrame(() => {
        charSpan.classList.add("visible");
      });
    }, afterDelay);

    totalDelay = afterDelay + opts.bitsPerCharDelay;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Home title → Hexadecimal
  const homeEl = document.getElementById("binary-title");
  animateBinaryToText(homeEl, "Hello Friends", {
    base: 16,           // HEX
    bitDelay: 100,
    bitsPerCharDelay: 140,
    revealDelay: 220
  });

  // About title → Binary (when scrolled into view)
  const aboutEl = document.getElementById("about-title");
  window.addEventListener("scroll", () => {
    const rect = aboutEl.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8 && aboutEl.innerHTML === "") {
      animateBinaryToText(aboutEl, "About", {
        base: 2,          // BINARY
        bitDelay: 80,
        bitsPerCharDelay: 120,
        revealDelay: 200
      });
    }
  });
});
