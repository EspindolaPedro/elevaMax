
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  gsap.from("img[alt='Logo ElevaMax']", {
    opacity: 0,
    y: -60,
    scale: 0.95,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from("h1", {
    opacity: 0,
    y: 10,
    skewY: 4,
    duration: 1,
    delay: 0.1,
    ease: "power3.out"
  });

  gsap.utils.toArray("h2, h3").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      scale: 1,
      duration: 0.8,
      delay: i * 0.01,
      ease: "power3.out",
      scrub: true
    });
  });

  gsap.utils.toArray("p").forEach((p, i) => {
    gsap.from(p, {
      scrollTrigger: {
        trigger: p,
        start: "top 90%",
      },
      opacity: 0,
      y: 25,
      duration: 0.6,
      delay: i * 0.02,
      ease: "power2.out"
    });
  });

  gsap.utils.toArray(".card-hover-mouse").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 95%",
        toggleActions: "play none none reverse",
        scrub: true,
        onEnter: () => card.classList.add("active"),
        onLeave: () => card.classList.remove("active"),
      },
      opacity: 0,
      y: 60,
      rotate: 1,
      scale: 0.98,
      duration: 0.9,
      delay: i * 0.4,
      ease: "power3.out"
    });
  });

  gsap.from("a.inline-flex", {
    scrollTrigger: {
      trigger: "a.inline-flex",
      start: "top 85%",
    },
    opacity: 0,
    y: 20,
    scale: 0.9,
    duration: 0.3,
    delay: 0.1,
    ease: "back.out(1.7)"
  });



  gsap.to("#timeline-line", {
    scrollTrigger: {
      trigger: "#timeline-line",
      start: "top center",
      end: "bottom bottom",
      scrub: true,
    },
    scaleY: 0.99,
    transformOrigin: "top",
    ease: "none"
  });

  // Animação de entrada dos itens
  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        scrub: true
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out",

    });
  });


  gsap.utils.toArray(".op").forEach((el, i) => {
    const fromX = i % 2 === 0 ? -50 : 50;
    gsap.fromTo(el,
      { opacity: 0, filter: "blur(10px)", x: fromX },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 50%",
          scrub: true,
          toogleAction: "play none none reverse"
        }
      }
    );
  });



});
