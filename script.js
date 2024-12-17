document.addEventListener("DOMContentLoaded", () => {
  // Reveal hidden section
  document.getElementById("reveal-btn").addEventListener("click", function () {
    document.getElementById("surprise").classList.remove("hidden");
  });

  // Add sparkles effect
  document.getElementById("sparkle-btn").addEventListener("click", function () {
    const sparklesContainer = document.getElementById("sparkles");
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random()}s`;
      sparklesContainer.appendChild(sparkle);

      // Remove sparkles after animation
      setTimeout(() => sparkle.remove(), 1500);
    }
  });
});
