(() => {
  const initializeCarousel = (root) => {
    if (root.dataset.carouselInitialized === "true") return;
    root.dataset.carouselInitialized = "true";

    const slides = Array.from(root.querySelectorAll("[data-carousel-slide]"));
    const dots = Array.from(root.querySelectorAll("[data-carousel-dot]"));
    const previousButton = root.querySelector("[data-carousel-previous]");
    const nextButton = root.querySelector("[data-carousel-next]");
    const toggleButton = root.querySelector("[data-carousel-toggle]");
    const toggleIcon = toggleButton?.querySelector("[data-carousel-toggle-icon]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const autoAdvanceDelay = 3000;

    if (slides.length < 2 || !previousButton || !nextButton || !toggleButton) return;

    let currentIndex = 0;
    let intervalId;
    let preloadTimeoutId;
    let paused = reducedMotion;

    const updateToggle = () => {
      toggleButton.setAttribute("aria-label", paused ? "Play carousel" : "Pause carousel");
      toggleButton.title = paused ? "Play" : "Pause";
      if (toggleIcon) toggleIcon.textContent = paused ? "\u25b6" : "\u2016";
    };

    const loadSlideImage = (index) => {
      const image = slides[index]?.querySelector("img[data-src]");
      if (!image) return;
      image.src = image.dataset.src;
      delete image.dataset.src;
    };

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      loadSlideImage(currentIndex);
      window.clearTimeout(preloadTimeoutId);
      preloadTimeoutId = window.setTimeout(() => {
        loadSlideImage((currentIndex + 1) % slides.length);
      }, 250);
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === currentIndex;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
        const link = slide.querySelector("a");
        if (link) link.tabIndex = active ? 0 : -1;
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === currentIndex;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
    };

    const stop = () => {
      window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const start = () => {
      stop();
      if (paused) return;
      intervalId = window.setInterval(() => {
        if (!root.isConnected) {
          stop();
          return;
        }
        showSlide(currentIndex + 1);
      }, autoAdvanceDelay);
    };

    const move = (offset) => {
      showSlide(currentIndex + offset);
      start();
    };

    previousButton.addEventListener("click", () => move(-1));
    nextButton.addEventListener("click", () => move(1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => {
      showSlide(index);
      start();
    }));

    toggleButton.addEventListener("click", () => {
      paused = !paused;
      updateToggle();
      start();
    });

    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", (event) => {
      if (!root.contains(event.relatedTarget)) start();
    });
    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    });

    let touchStartX;
    root.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0]?.clientX;
    }, { passive: true });
    root.addEventListener("touchend", (event) => {
      if (touchStartX === undefined) return;
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 50) move(distance > 0 ? -1 : 1);
      touchStartX = undefined;
    }, { passive: true });

    showSlide(0);
    updateToggle();
    start();
  };

  const initializeAll = () => {
    document.querySelectorAll("[data-ecos-carousel]").forEach(initializeCarousel);
  };

  if (typeof document$ !== "undefined") {
    document$.subscribe(initializeAll);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAll, { once: true });
  } else {
    initializeAll();
  }
})();
