const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const menuOverlay = document.querySelector(".menu-overlay");

function closeMenu() {
    if (!menuBtn || !navLinks || !menuOverlay) return;

    navLinks.classList.remove("show");
    menuOverlay.classList.remove("show");
    document.body.classList.remove("menu-open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && navLinks && menuOverlay) {
   menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuOverlay.classList.toggle("show", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});
    menuOverlay.addEventListener("click", closeMenu);

 navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = item.getAttribute("href");
        console.log("點到：", targetId);

        closeMenu();

        setTimeout(() => {
            window.location.hash = targetId;
        }, 100);
    });
});
}
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach((readMoreBtn) => {
    readMoreBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const articleMore = readMoreBtn.previousElementSibling;
        document.querySelectorAll(".article-more").forEach((otherArticle) => {
    if (otherArticle !== articleMore) {
        otherArticle.classList.remove("show");
    }
});

readMoreBtns.forEach((otherBtn) => {
    if (otherBtn !== readMoreBtn) {
        otherBtn.textContent = "閱讀更多 ▼";
    }
});
        articleMore.classList.toggle("show");

        const isOpen = articleMore.classList.contains("show");
        readMoreBtn.textContent = isOpen ? "收起內容 ▲" : "閱讀更多 ▼";adMoreBtn.textContent = isOpen ? "收起內容" : "閱讀更多";
    });
});
const bookingForm = document.querySelector(".booking-form");
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("success") === "1") {
    const successMessage = document.querySelector("#successMessage");
    successMessage.classList.add("show");
    successMessage.scrollIntoView({
    behavior: "smooth",
    block: "center"
});
    setTimeout(() => {
    successMessage.classList.remove("show");

    window.history.replaceState({}, document.title, window.location.pathname);
}, 8000);
}
const bookingBtn = document.querySelector(".booking-btn");
if (bookingForm && bookingBtn) {
    bookingForm.addEventListener("submit", () => {
        bookingBtn.textContent = "送出中…";
        bookingBtn.disabled = true;
    });
}
const backToTopBtn = document.querySelector(".back-to-top");

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
const readingProgress = document.querySelector(".reading-progress");

if (readingProgress) {
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / pageHeight) * 100;

        readingProgress.style.width = progress + "%";
    });
}

const bgMusic = document.querySelector("#bgMusic");
const musicBtn = document.querySelector("#musicBtn");

if (bgMusic && musicBtn) {
    bgMusic.volume = 0.25;

    musicBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = "🎵";
            musicBtn.classList.add("playing");
            musicBtn.setAttribute("aria-label", "暫停背景音樂");
        } else {
            bgMusic.pause();
            musicBtn.textContent = "🎵";
            musicBtn.classList.remove("playing");
            musicBtn.setAttribute("aria-label", "播放背景音樂");
        }
    });
}