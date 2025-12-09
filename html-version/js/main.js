// Main JavaScript for Sabrina Alvim Website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations on scroll
  initScrollAnimations();
  
  // Initialize logo carousel
  initLogoCarousel();
  
  // Initialize form handlers if on impressos page
  initFormHandlers();
  
  // Smooth scroll for anchor links
  initSmoothScroll();
});

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Logo Carousel
function initLogoCarousel() {
  const track = document.querySelector('.logo-track');
  if (!track) return;
  
  // Clone items for infinite scroll
  const trackInner = track.querySelector('.logo-track-inner');
  if (trackInner) {
    const clone = trackInner.cloneNode(true);
    track.appendChild(clone);
  }
}

// Form Handlers
function initFormHandlers() {
  // Service selection
  const serviceOptions = document.querySelectorAll('.service-option');
  const conditionalSections = document.querySelectorAll('.conditional-section');
  
  serviceOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active from all
      serviceOptions.forEach(opt => opt.classList.remove('active'));
      // Add active to clicked
      this.classList.add('active');
      
      // Hide all conditional sections
      conditionalSections.forEach(section => section.style.display = 'none');
      
      // Show relevant section
      const service = this.dataset.service;
      const targetSection = document.getElementById(`section-${service}`);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
      
      // Update hidden input
      const serviceInput = document.getElementById('servico');
      if (serviceInput) {
        serviceInput.value = this.querySelector('span').textContent;
      }
    });
  });
  
  // Option items (cards, quantities, etc)
  document.querySelectorAll('.option-group').forEach(group => {
    const items = group.querySelectorAll('.option-item');
    items.forEach(item => {
      item.addEventListener('click', function() {
        // If single select group
        if (!group.classList.contains('multi-select')) {
          items.forEach(i => i.classList.remove('active'));
        }
        this.classList.toggle('active');
        
        // Update related input
        const inputId = group.dataset.input;
        if (inputId) {
          const input = document.getElementById(inputId);
          if (input) {
            if (group.classList.contains('multi-select')) {
              const activeItems = group.querySelectorAll('.option-item.active');
              input.value = Array.from(activeItems).map(i => i.dataset.value || i.textContent.trim()).join(', ');
            } else {
              input.value = this.dataset.value || this.textContent.trim();
            }
          }
        }
      });
    });
  });
  
  // Form submission
  const quoteForm = document.getElementById('quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      let message = '*Orçamento Impressos*\n\n';
      
      message += `*Nome:* ${formData.get('nome')}\n`;
      message += `*WhatsApp:* ${formData.get('whatsapp')}\n`;
      message += `*Email:* ${formData.get('email')}\n`;
      message += `*Serviço:* ${formData.get('servico')}\n`;
      
      const servico = formData.get('servico');
      
      if (servico === 'Cartão de visitas') {
        message += `*Modelo:* ${formData.get('cardModel') || ''}\n`;
        message += `*Quantidade:* ${formData.get('cardQuantity') || ''}\n`;
      } else if (servico === 'Banner') {
        message += `*Tamanho:* ${formData.get('bannerSize') || ''}\n`;
      } else if (servico === 'Panfletos') {
        const qty = formData.get('panfletoQuantity') || formData.get('panfletoCustomQuantity') || '';
        message += `*Quantidade:* ${qty}\n`;
      } else if (servico === 'Adesivos') {
        message += `*Quantidade:* ${formData.get('adesivosQuantity') || ''}\n`;
        message += `*Tamanho:* ${formData.get('adesivosSize') || ''}\n`;
        message += `*Tipo:* ${formData.get('adesivosType') || ''}\n`;
      }
      
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/31994216833?text=${encodedMessage}`, '_blank');
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Toast notification
function showToast(title, message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Add toast styles dynamically
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  .toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    padding: 1rem 1.5rem;
    background: var(--card);
    border: 1px solid var(--primary);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-neon);
    transform: translateX(150%);
    transition: transform 0.3s ease;
    z-index: 9999;
  }
  
  .toast.show {
    transform: translateX(0);
  }
  
  .toast strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--foreground);
  }
  
  .toast p {
    color: var(--muted-foreground);
    font-size: 0.875rem;
    margin: 0;
  }
`;
document.head.appendChild(toastStyles);
