document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".plus-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productcard = btn.closest(".productcard");
      const name = productcard.querySelector(".name").textContent;
      const priceText = productcard.querySelector(".price").textContent;

      const price = parseInt(priceText.replace(/\D/g, ""));

      const userName = prompt("Ismingizni kiriting:");
      if (!userName) return;

      const countStr = prompt(`${userName}, nechta "${name}" buyurtma qilasiz?`);
      const count = parseInt(countStr);

      if (isNaN(count) || count <= 0) return;

      const total = price * count;

      alert(`${userName}, siz ${count} ta "${name}" buyurtma berdingiz.\nUmumiy summa: ${total.toLocaleString()} so‘m`);
    });
  });
});
