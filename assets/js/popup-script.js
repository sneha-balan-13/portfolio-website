document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  const navButtons = document.querySelectorAll('.nav-btn');
  const popups = document.querySelectorAll('.popup');
  const popupContainer = document.getElementById('popupContainer');

  let sidebarOpened = false;

  // Open sidebar on hover or click
  navToggle.addEventListener('mouseenter', () => {
    sidebar.classList.add('open');
    sidebarOpened = true;
  });

  navToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOpened = sidebar.classList.contains('open');
  });

  // Close sidebar when mouse leaves it
  sidebar.addEventListener('mouseleave', () => {
    if (sidebarOpened) {
      sidebar.classList.remove('open');
      sidebarOpened = false;
    }
  });

  // Popup handling logic
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-section');
      const targetPopup = document.getElementById(targetId);
      const isVisible = targetPopup.classList.contains('show');

      popups.forEach(popup => popup.classList.remove('show'));

      if (!isVisible) {
        targetPopup.classList.add('show');
        mainContent.style.display = 'none';
      } else {
        targetPopup.classList.remove('show');
        mainContent.style.display = 'block';
      }
    });
  });

  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popups.forEach(popup => popup.classList.remove('show'));
      mainContent.style.display = 'block';
    }
  });
});

  // Dismiss popup on outside click
  popupContainer.addEventListener('click', (e) => {
    if (e.target === popupContainer) {
      popups.forEach(popup => popup.classList.remove('show'));
      mainContent.style.display = 'block';
    }
  });

  // Tab logic
  window.showTab = function(tabName) {
    const sections = document.querySelectorAll('.project-section');
    const buttons = document.querySelectorAll('.tab-button');
    sections.forEach(section => section.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
  };

  // Tile toggle
  window.toggleTile = function(tile) {
    const allTiles = document.querySelectorAll('.project-tile');
    allTiles.forEach(t => {
      if (t !== tile) t.classList.remove('active');
    });
    tile.classList.toggle('active');
  };

  // Contact form handler
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");
  const successAnimation = document.getElementById("successAnimation");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          if (successAnimation) successAnimation.style.display = "block";
          status.textContent = "Message sent successfully!";
          status.style.color = "green";
          form.reset();

          setTimeout(() => {
            if (successAnimation) successAnimation.style.display = "none";
            status.textContent = "";
          }, 4000);
        } else {
          throw new Error("Network error");
        }
      } catch (error) {
        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "red";
      }
    });
  }


function openPopup(id) {
  document.getElementById(id).style.display = 'flex';
  // Close popup when clicked outside the content
  document.getElementById(id).addEventListener('click', function (e) {
    if (e.target.classList.contains('project-popup')) {
      e.target.style.display = 'none';
    }
  });
}