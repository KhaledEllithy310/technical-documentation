const allCodes = document.querySelectorAll("code");
allCodes.forEach((code) => {
  let spanClip = document.createElement("span");
  spanClip.style.position = "absolute";
  spanClip.style.top = "0px";
  spanClip.style.right = "0px";
  spanClip.style.cursor = "pointer";
  spanClip.title = "Copy to clipboard";
  spanClip.innerHTML = '<i class="fa-solid fa-clipboard"></i>';
  code.appendChild(spanClip);
  spanClip.addEventListener("click", () => {
    copyContent(code.innerHTML);
  });
});

const copyContent = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    Swal.fire({
      title: "success",
      text: "copied to clipboard",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
  } catch (e) {
    Swal.fire({
      title: "Error",
      text: "Failed to copy to clipboard",
      icon: "error",
      timer: 1000,
    });
  }
};
