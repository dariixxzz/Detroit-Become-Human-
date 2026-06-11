document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            if(document.body.classList.contains("light-theme")) {
                themeToggle.textContent = "Темна тема";
            } else {
                themeToggle.textContent = "Світла тема";
            }
        });
    }

    const addModuleBtn = document.getElementById("add-module-btn");
    const moduleInput = document.getElementById("module-input");
    const modulesList = document.getElementById("modules-list");

    if (addModuleBtn && moduleInput && modulesList) {
        addModuleBtn.addEventListener("click", () => {
            const moduleText = moduleInput.value.trim();
            if (moduleText !== "") {
                const li = document.createElement("li");
                li.innerHTML = `${moduleText} <button class="delete-btn">Видалити</button>`;
                modulesList.appendChild(li);
                moduleInput.value = ""; 
            }
        });

        modulesList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                e.target.parentElement.remove();
            }
        });
    }

    const form = document.getElementById("feedback-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            const nameInput = document.getElementById("username");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            if (nameInput.value.trim().length < 3) {
                document.getElementById("name-error").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("name-error").style.display = "none";
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                document.getElementById("email-error").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("email-error").style.display = "none";
            }

            if (messageInput.value.trim() === "") {
                document.getElementById("message-error").style.display = "block";
                isValid = false;
            } else {
                document.getElementById("message-error").style.display = "none";
            }

            if (isValid) {
                const modal = document.getElementById("success-modal");
                modal.style.display = "flex";
                form.reset(); 
            }
        });
    }

    const closeModal = document.querySelector(".close-modal");
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            document.getElementById("success-modal").style.display = "none";
        });
    }
});


$(document).ready(function () {
    
    $('.tab-link').click(function () {
        const tabId = $(this).attr('data-tab');

        $('.tab-link').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').removeClass('active').hide();
        $('#' + tabId).fadeIn(400).addClass('active');
    });

    $('.char-card').hover(
        function () {
            $(this).css({
                'transform': 'scale(1.03)',
                'border-color': '#00d2ff',
                'transition': 'all 0.3s ease'
            });
        },
        function () {
            $(this).css({
                'transform': 'scale(1)',
                'border-color': 'var(--border-color)'
            });
        }
    );
});