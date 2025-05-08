
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector(".arrow-icon");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
  });
});



document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".card-hover-mouse");
    let ticking = false;

    function handleMove(e) {
      // Compatibilidade com toque e mouse
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const dx = clientX - (rect.left + rect.width / 2);
            const dy = clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            const threshold = 170;

            if (distance < threshold) {
              card.classList.add("active");
            } else {
              card.classList.remove("active");
            }
          });
          ticking = false;
        });

        ticking = true;
      }
    }

    // Atribui os dois eventos ao mesmo handler
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("touchmove", handleMove);
  });



  
  document.querySelectorAll("a[data-botao]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!primeiroBotaoClicado) {
        primeiroBotaoClicado = btn.getAttribute("data-botao");
        sessionStorage.setItem("utmBotao", primeiroBotaoClicado);
      }
    });
  });


  // Altera o link de checkout com a UTM antes de redirecionar
  document.getElementById("btn-checkout").addEventListener("click", (e) => {
    e.preventDefault();

    const baseUrl = "https://pay.kiwify.com.br/OHJ0pnm";
    const utm = sessionStorage.getItem("utmBotao") || "sem-clique-previo";

    const finalUrl = `${baseUrl}?utm_source=site&utm_medium=botao&utm_campaign=inscricao&utm_term=${utm}`;

    window.location.href = finalUrl;
  });