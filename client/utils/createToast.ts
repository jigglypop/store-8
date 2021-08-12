export const createToast = (message: string) => {
  const toasts = document.querySelector("#toasts");
  const note = document.createElement("div");
  note.classList.add("toast");
  note.innerHTML = `<strong class="strong">${message}</strong> 완료!`;
  toasts?.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 2000);
};
