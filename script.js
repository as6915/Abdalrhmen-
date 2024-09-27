// script.js

// تغيير الألوان عند الضغط على الزر
document.getElementById('colorToggle').addEventListener('click', function() {
    document.body.classList.toggle('gold-theme');
});

// التحريك عند التمرير
window.addEventListener('scroll', function() {
    const lessonsSection = document.querySelector('.lessons');
    const scrollPosition = window.scrollY;

    if (scrollPosition + window.innerHeight >= lessonsSection.offsetTop) {
        lessonsSection.classList.add('fade-in');
    }
});

// إضافة تأثيرات إضافية عند تحميل الصفحة
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('slide-in');
});
