document.addEventListener("DOMContentLoaded", () => {
    initBackToTop();
    initAutoSidebar();
    initSidebarDrawer();
    initActiveSidebarLink();
});

/**
 * Hiển thị nút lên đầu trang khi người dùng cuộn xuống.
 */
function initBackToTop() {
    const button = document.querySelector(".to-top");

    if (!button) {
        return;
    }

    const updateButtonVisibility = () => {
        button.classList.toggle("show", window.scrollY > 300);
    };

    window.addEventListener("scroll", updateButtonVisibility, {
        passive: true
    });

    button.addEventListener("click", event => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    updateButtonVisibility();
}

/**
 * Tự động tạo mục lục từ các section trong nội dung chính.
 */
function initAutoSidebar() {
    const sidebar = document.getElementById("auto-sidebar");

    const sections = document.querySelectorAll(
        ".content-main .section-card[id]"
    );

    if (!sidebar || !sections.length) {
        return;
    }

    sidebar.innerHTML = "";

    sections.forEach((section, index) => {
        const titleElement = section.querySelector(
            ".section-title-vi"
        );

        if (!titleElement) {
            return;
        }

        const link = document.createElement("a");

        link.href = `#${section.id}`;
        link.textContent =
            `${index + 1}. ${titleElement.textContent.trim()}`;

        sidebar.appendChild(link);
    });
}

/**
 * Sidebar trượt từ bên trái trên tablet và điện thoại.
 */
function initSidebarDrawer() {
    const sidebar = document.getElementById("page-sidebar");
    const openButton = document.querySelector(".sidebar-toggle");
    const closeButton = document.querySelector(".sidebar-close");
    const overlay = document.querySelector(".sidebar-overlay");
    const sidebarPanel = sidebar?.querySelector(".sidebar-panel");

    const desktopMedia = window.matchMedia("(min-width: 861px)");

    if (!sidebar || !openButton || !closeButton || !overlay) {
        return;
    }

    let lastFocusedElement = null;

    function setSidebarOpen(isOpen) {
        if (desktopMedia.matches) {
            document.body.classList.remove("sidebar-open");

            openButton.setAttribute("aria-expanded", "false");
            sidebar.setAttribute("aria-hidden", "false");

            if (sidebarPanel) {
                sidebarPanel.open = true;
            }

            return;
        }

        document.body.classList.toggle("sidebar-open", isOpen);

        openButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        sidebar.setAttribute(
            "aria-hidden",
            String(!isOpen)
        );

        if (sidebarPanel) {
            sidebarPanel.open = true;
        }

        if (isOpen) {
            lastFocusedElement = document.activeElement;
            closeButton.focus();
        } else if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus();
        }
    }

    openButton.addEventListener("click", () => {
        setSidebarOpen(true);
    });

    closeButton.addEventListener("click", () => {
        setSidebarOpen(false);
    });

    overlay.addEventListener("click", () => {
        setSidebarOpen(false);
    });

    sidebar.addEventListener("click", event => {
        const link = event.target.closest(".sidebar-nav a");

        if (link && !desktopMedia.matches) {
            setSidebarOpen(false);
        }
    });

    document.addEventListener("keydown", event => {
        const isOpen =
            document.body.classList.contains("sidebar-open");

        if (event.key === "Escape" && isOpen) {
            setSidebarOpen(false);
        }
    });

    desktopMedia.addEventListener("change", () => {
        setSidebarOpen(false);
    });

    setSidebarOpen(false);
}
/**
 * Điều khiển sidebar theo kích thước màn hình.
 * Desktop: tự mở.
 * Mobile: mặc định đóng và tự đóng sau khi chọn mục.
 */
function initResponsiveSidebar() {
    const sidebarPanel = document.querySelector(".sidebar-panel");

    if (!sidebarPanel) {
        return;
    }

    const desktopMedia = window.matchMedia("(min-width: 861px)");

    const updateSidebarState = event => {
        if (event.matches) {
            sidebarPanel.open = true;
        } else {
            sidebarPanel.open = false;
        }
    };

    updateSidebarState(desktopMedia);

    desktopMedia.addEventListener("change", updateSidebarState);

    sidebarPanel.addEventListener("click", event => {
        const clickedLink = event.target.closest(".sidebar-nav a");

        if (!clickedLink || desktopMedia.matches) {
            return;
        }

        sidebarPanel.open = false;
    });
}