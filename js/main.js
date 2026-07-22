document.addEventListener("DOMContentLoaded", () => {
    initBackToTop();
    initAutoSidebar();
    initSidebarDrawer();

    if (typeof initActiveSidebarLink === "function") {
        initActiveSidebarLink();
    }

    initVocabularyPage();
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
/**
 * Khởi tạo trang sổ tay từ vựng.
 * Hàm sẽ tự dừng nếu trang hiện tại không phải trang từ vựng.
 */
function initVocabularyPage() {
    console.log("Dữ liệu từ vựng:", window.lessonData);
    const lessonList = document.getElementById("lessonList");
    const modal = document.getElementById("vocabModal");
    const modalDate = document.getElementById("modalDate");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const closeModalButton = document.getElementById("closeModal");

    const lessons = window.lessonData;

    if (
        !lessonList ||
        !modal ||
        !modalDate ||
        !modalTitle ||
        !modalContent ||
        !closeModalButton ||
        !Array.isArray(lessons)
    ) {
        return;
    }

    /**
     * Đếm tổng số từ trong một buổi học.
     */
    function getWordCount(lesson) {
        const nounCount = Object.values(lesson.nouns)
            .reduce((total, words) => {
                return total + words.length;
            }, 0);

        return (
            nounCount +
            lesson.verbs.length +
            lesson.adjectives.length +
            lesson.others.length
        );
    }

    /**
     * Hiển thị các buổi học bên ngoài trang.
     */
    function renderLessonCards() {
        lessonList.innerHTML = lessons.map(lesson => `
            <button
                class="lesson-card"
                type="button"
                data-lesson-id="${lesson.id}"
                aria-label="Mở từ vựng ngày ${lesson.date}: ${lesson.title}"
            >
                <time
                    class="lesson-date"
                    datetime="${lesson.id}"
                >
                    ${lesson.date}
                </time>

                <h2 class="lesson-title">
                    ${lesson.title}
                </h2>

                <p class="lesson-note">
                    ${lesson.note}
                </p>

                <span class="lesson-meta">
                    <span>
                        ${getWordCount(lesson)} từ đã ghi
                    </span>

                    <span class="open-label">
                        Mở sổ →
                    </span>
                </span>
            </button>
        `).join("");
    }

    /**
     * Hiển thị danh sách danh từ trong từng cột.
     */
    function renderWordItems(words) {
        if (!words.length) {
            return `
                <p class="empty-text">
                    Chưa ghi từ nào.
                </p>
            `;
        }

        return `
            <ul class="word-list">
                ${words.map(item => `
                    <li class="word-item">
                        <span class="german-word">
                            ${item.word}
                        </span>

                        <span class="word-meaning">
                            ${item.meaning}
                        </span>

                        ${
                            item.extra
                                ? `
                                    <span class="word-extra">
                                        ${item.extra}
                                    </span>
                                `
                                : ""
                        }
                    </li>
                `).join("")}
            </ul>
        `;
    }

    /**
     * Hiển thị danh từ theo der, die và das.
     */
    function renderNouns(nouns) {
        return `
            <section class="word-section">
                <h3 class="section-heading">
                    Danh từ (Nomen)
                </h3>

                <div class="noun-columns">
                    <div class="gender-column der">
                        <h4 class="gender-title">
                            der · Giống đực
                        </h4>

                        ${renderWordItems(nouns.der)}
                    </div>

                    <div class="gender-column die">
                        <h4 class="gender-title">
                            die · Giống cái
                        </h4>

                        ${renderWordItems(nouns.die)}
                    </div>

                    <div class="gender-column das">
                        <h4 class="gender-title">
                            das · Giống trung
                        </h4>

                        ${renderWordItems(nouns.das)}
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * Hiển thị bảng động từ, tính từ hoặc từ khác.
     */
    function renderTableSection(title, words, columns) {
        if (!words.length) {
            return "";
        }

        return `
            <section class="word-section">
                <h3 class="section-heading">
                    ${title}
                </h3>

                <div class="simple-table-wrap">
                    <table class="word-table">
                        <thead>
                            <tr>
                                ${columns.map(column => `
                                    <th>${column.label}</th>
                                `).join("")}
                            </tr>
                        </thead>

                        <tbody>
                            ${words.map(item => `
                                <tr>
                                    ${columns.map(column => `
                                        <td>
                                            ${item[column.key] || "—"}
                                        </td>
                                    `).join("")}
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            </section>
        `;
    }

    /**
     * Mở modal của buổi học được chọn.
     */
    function openLesson(lessonId) {
        const lesson = lessons.find(item => {
            return item.id === lessonId;
        });

        if (!lesson) {
            return;
        }

        modalDate.textContent =
            `Buổi học ngày ${lesson.date}`;

        modalTitle.textContent =
            lesson.title;

        modalContent.innerHTML = `
            ${renderNouns(lesson.nouns)}

            ${renderTableSection(
                "Động từ (Verben)",
                lesson.verbs,
                [
                    {
                        key: "word",
                        label: "Động từ"
                    },
                    {
                        key: "meaning",
                        label: "Nghĩa"
                    },
                    {
                        key: "example",
                        label: "Ví dụ"
                    }
                ]
            )}

            ${renderTableSection(
                "Tính từ (Adjektive)",
                lesson.adjectives,
                [
                    {
                        key: "word",
                        label: "Tính từ"
                    },
                    {
                        key: "meaning",
                        label: "Nghĩa"
                    },
                    {
                        key: "example",
                        label: "Ví dụ"
                    }
                ]
            )}

            ${renderTableSection(
                "Từ và cụm từ khác",
                lesson.others,
                [
                    {
                        key: "word",
                        label: "Từ / Cụm từ"
                    },
                    {
                        key: "meaning",
                        label: "Nghĩa"
                    },
                    {
                        key: "example",
                        label: "Ví dụ"
                    }
                ]
            )}
        `;

        modal.showModal();
    }

    /**
     * Mở modal khi bấm vào một buổi học.
     */
    lessonList.addEventListener("click", event => {
        const card = event.target.closest(".lesson-card");

        if (!card) {
            return;
        }

        openLesson(card.dataset.lessonId);
    });

    /**
     * Đóng bằng nút X.
     */
    closeModalButton.addEventListener("click", () => {
        modal.close();
    });

    /**
     * Đóng khi bấm vào vùng tối bên ngoài modal.
     */
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.close();
        }
    });

    renderLessonCards();
}