const imgs = document.querySelectorAll(".product__img");
imgs.forEach(function (img) {
  // похоже картина уже была прогруэена на момент когда мы ддобавляли листенер и соответсвенно мы егодобавляли слишком поздно.
  // поэтому я сразу же проверяю им всем размер, и потом если кто-то догружается.
  adoptImageSize(img);

  img.addEventListener("load", (e) => {
    adoptImageSize(img);
  });
});
// console.log(imgs);

function adoptImageSize(img) {
  if (img.clientWidth > img.parentElement.clientWidth) {
    img.style.width = "100%";
    img.style.height = "auto";
  }
}

const backdrop = document.querySelector(".backdrop");
document.querySelector(".connect").addEventListener("click", () => {
  backdrop.classList.toggle("backdrop--hidden");
});

backdrop.querySelector("form").addEventListener("submit", () => {
  const form = document.forms.feedback_form;
  const tel = form.elements.telephone_input;
  const mail = form.elements.email_input;
  const hasContact = tel.value || mail.value;
  if (hasContact) {
    backdrop.classList.toggle("backdrop--hidden");
  } else {
    alert("Суки, где блять хоть что-то?!");
  }
});

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    backdrop.classList.toggle("backdrop--hidden");
  }
});
