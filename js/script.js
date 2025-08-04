// ============== [1] TELA DE LOADING ============== //
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const skipButton = document.getElementById("skip-loading");
  
  // Função para esconder o loading
  const hideLoading = () => {
    loadingScreen.classList.add("fade-out");
    setTimeout(() => loadingScreen.remove(), 800);
  };

  // Timer automático (13 segundos)
  const loadingTimer = setTimeout(hideLoading, 13000);
  
  // ===== BOTÃO DINÂMICO "INICIAR AGORA" =====
  skipButton.addEventListener("click", function(e) {
    // Efeito visual ao clicar
    this.style.transform = "scale(0.95)";
    this.style.boxShadow = "0 2px 5px rgba(0, 255, 170, 0.2)";
    
    // Efeito de ripple (ondulação)
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    this.appendChild(ripple);
    
    // Posiciona o ripple no clique
    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    // Remove o ripple após animação
    setTimeout(() => ripple.remove(), 600);
    
    // Executa a ação principal
    clearTimeout(loadingTimer);
    hideLoading();
    
    // Opcional: Som de clique (descomente se quiser)
    // const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3');
    // clickSound.volume = 0.3;
    // clickSound.play();
  });
});

// ============== [2] SEU CÓDIGO ORIGINAL ============== //
document.addEventListener('DOMContentLoaded', function() {
  // 1. Atualiza o ano no copyright
  const year = new Date().getFullYear();
  document.querySelector('.copyright').textContent = `© ${year} EMANUEL`;
  
  // 2. Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Atualiza o link ativo
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // 3. Ativa links conforme scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});