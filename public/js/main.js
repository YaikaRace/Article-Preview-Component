const SHARE_BUTTON = document.querySelector('[data-id="share-button"]');

SHARE_BUTTON.addEventListener("click", function (event) {
  if (document.querySelector('[data-id="share-button"].active')) {
    SHARE_BUTTON.classList.remove("active");
  } else{
    SHARE_BUTTON.classList.add("active");
  }
});
