// Customize Your Order
function selectOccasion(occasion) {
    const messageDiv = document.getElementById('customizeMessage');
    const selectedOccasion = document.getElementById('selectedOccasion');
    
    if (occasion === 'independence') {
        selectedOccasion.textContent = '🇯🇴 تم اختيار عيد الاستقلال! سيكون لديك كوكيز بتصميم خاص بألوان العلم الأردني';
    } else if (occasion === 'adha') {
        selectedOccasion.textContent = '🎊 تم اختيار عيد الأضحى! سيكون لديك كوكيز فاخر مع كتابة "مبروك" وتصاميم إسلامية';
    }
    
    messageDiv.style.display = 'block';
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

function orderCustomize() {
    const phone = '0780028321';
    const message = encodeURIComponent('مرحبا! أريد طلب كوكيز مخصص. هل يمكنني الحصول على المزيد من التفاصيل؟');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

// Smooth Scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .feature, .review-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle (if you want to add mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// QR Code Generator (optional - you can use an external QR code API)
function generateQRCode() {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(window.location.href)}`;
    console.log('QR Code URL:', qrCodeUrl);
    return qrCodeUrl;
}