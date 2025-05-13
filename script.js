document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });

  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    console.log("Hovered over the box!");
  });

  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });

  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Secret double click revealed!");
  });

  document.getElementById("colorBtn").addEventListener("click", () => {
    const btn = document.getElementById("colorBtn");
    btn.textContent = "Text Changed!";
    btn.style.backgroundColor = "lightgreen";
  });

  const images = [
    "https://via.placeholder.com/300x200",
    "https://via.placeholder.com/300x200/ff7f7f",
    "https://via.placeholder.com/300x200/7f7fff"
  ];
  let currentImg = 0;

  document.getElementById("nextImg").addEventListener("click", () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById("galleryImg").src = images[currentImg];
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".tabContent")
        .forEach((tc) => (tc.style.display = "none"));
      document.getElementById(tab.dataset.target).style.display = "block";
    });
  });

  document.getElementById("password").addEventListener("input", () => {
    const feedback = document.getElementById("passwordFeedback");
    if (document.getElementById("password").value.length >= 8) {
      feedback.textContent = "✅ Good password length";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Password too short";
      feedback.style.color = "red";
    }
  });

  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
  });
});
