// 全局函数定义
function typeWriter(text, element, speed = 10) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function showModal(id, data) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    
    modalTitle.textContent = data.title;
    modal.style.display = 'block';
    
    // 使用打字机效果
    typeWriter(data.content, modalText);
    
    // 翻译模态框内容
    if (window.currentLang && window.currentLang !== 'en') {
        const translatedContent = translateModalContent(data.content, window.currentLang);
        data.content = translatedContent;
    }
}

// 主题切换功能
function initThemeSwitcher() {
    const themeBtn = document.querySelector('.theme-btn');
    const body = document.documentElement;
    
    // 如果本地存储中没有主题设置，默认使用 'hacker' 主题
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = savedTheme || 'hacker';
    
    // 初始化主题
    body.setAttribute('data-theme', currentTheme);
    
    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'hacker' ? 'math' : 'hacker';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // 重新初始化打字机效果
        if (document.querySelector('.modal').style.display === 'block') {
            const modalText = document.getElementById('modal-text');
            const content = modalText.textContent;
            typeWriter(content, modalText);
        }
    });
}

// DOMContentLoaded 事件处理
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded'); // 调试日志
    // 初始化主题切换器
    initThemeSwitcher();
    
    // 平滑滚动
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 技能条动画
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                skillBar.querySelector('.skill-fill').style.width = `${level}%`;
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });

    // 数学公式动画
    let angle = 0;
    function animateMathStyle() {
        const mathText = document.querySelector('.math-style');
        angle += 0.02;
        const scale = 1 + Math.sin(angle) * 0.02;
        mathText.style.transform = `scale(${scale})`;
        requestAnimationFrame(animateMathStyle);
    }
    animateMathStyle();

    // Matrix rain effect
    const canvas = document.getElementById('matrix-bg');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 12;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>~`|/\\';
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px Fira Code';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 40);

    // 响应窗口大小变化
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // 将 currentLang 设为全局变量
    window.currentLang = localStorage.getItem('preferred-language') || 'en';
    
    function updateLanguage(lang) {
        window.currentLang = lang;
        localStorage.setItem('preferred-language', lang);
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = key.split('.').reduce((obj, i) => obj[i], translations[lang]);
            if (translation) {
                element.textContent = translation;
            }
        });
    }

    // 初始化语言
    updateLanguage(window.currentLang);

    // 语言切换事件监听
    document.querySelectorAll('.lang-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = e.target.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // 模态框关闭事件监听
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('modal').style.display = 'none';
        }
    });
}); 