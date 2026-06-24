document.addEventListener("DOMContentLoaded", function () {
    
    // ===== १. प्रिमियम स्लाईडर इंजिन (High Fashion Carousel) =====
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.querySelector('.right-arrow');
    const prevBtn = document.querySelector('.left-arrow');
    let activeIdx = 0;

    function switchSlide(nextIndex) {
        slides[activeIdx].classList.remove('active');
        activeIdx = (nextIndex + slides.length) % slides.length;
        slides[activeIdx].classList.add('active');
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => switchSlide(activeIdx + 1));
        prevBtn.addEventListener('click', () => switchSlide(activeIdx - 1));
        setInterval(() => switchSlide(activeIdx + 1), 5000); // ५ सेकंदांचा ऑटो-बदल
    }

    // ===== २. तनिष्क पॅटर्न व्हीआयपी मॅनेजमेंट पॉप-अप =====
    const modalOverlay = document.getElementById('vipModal');
    const closeBtn = document.querySelector('.close-modal-btn');
    const triggerBtns = document.querySelectorAll('.action-modal-open');
    const serviceSelect = document.getElementById('vipServiceSelect');
    const vTitle = document.getElementById('vModalTitle');

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceType = this.getAttribute('data-service');
            modalOverlay.classList.add('open');
            
            if(serviceType === 'appointment') {
                vTitle.innerText = "VIP Private Lounge Visit";
                serviceSelect.value = "appointment";
            } else {
                vTitle.innerText = "HD Live Encryption Video Call";
                serviceSelect.value = "video";
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => modalOverlay.classList.remove('open'));
    }

    window.addEventListener('click', (e) => {
        if(e.target === modalOverlay) modalOverlay.classList.remove('open');
    });

    document.getElementById('vipForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("✨ ऐश्वर्या हाऊट जोयलेरी (Haute Joaillerie): तुमची लक्झरी वेळ यशस्वीरित्या आरक्षित झाली आहे. आमचे खाजगी व्यवस्थापक तुमच्याशी संपर्क साधतील.");
        modalOverlay.classList.remove('open');
        this.reset();
    });

    // ===== ३. प्रिमियम व्हर्च्युअल ट्राय-ऑन सिम्युलेटर (Virtual Try-On Feature) =====
    const tryOnButtons = document.querySelectorAll('.try-on-btn-card, .ui-btn[data-tooltip="Virtual Try-On"]');
    tryOnButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("📸 ऐश्वर्या एआय ट्राय-ऑन (AI Try-On) सिस्टीम सुरू होत आहे...\nतुमचा फ्रंट कॅमेरा सुरक्षितपणे उघडून हे दागिने तुमच्या चेहऱ्यावर/गळ्यात व्हर्च्युअली लावले जात आहेत. कृपया स्थिर रहा.");
        });
    });

    // ===== ४. ई-कॉमर्स व्हॉल्ट काउंटर (Vault Engine) =====
    let vaultItemsCount = 0;
    const vaultBadge = document.querySelector('.badge-count');
    const buyBtns = document.querySelectorAll('.add-to-vault-btn');

    buyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            vaultItemsCount++;
            vaultBadge.innerText = vaultItemsCount;
            
            // सूक्ष्म रॉयल स्केलिंग ॲनिमेशन
            vaultBadge.style.transform = "scale(1.4)";
            setTimeout(() => { vaultBadge.style.transform = "scale(1)"; }, 300);
            
            const pName = this.parentElement.querySelector('h4').innerText;
            alert(`🔒 ${pName} ची किंमत विनंती तुमच्या खाजगी लक्झरी व्हॉल्टमध्ये (Vault) जोडली गेली आहे.`);
        });
    });
});