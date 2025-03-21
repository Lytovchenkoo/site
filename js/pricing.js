document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".pricing__tab");
  const cards = document.querySelectorAll(".pricing__card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("pricing__tab--active"));
      cards.forEach((c) => c.classList.remove("pricing__card--active"));

      this.classList.add("pricing__tab--active");
      document
        .querySelector(`.pricing__card[data-tab="${this.dataset.tab}"]`)
        .classList.add("pricing__card--active");
    });
  });
});
