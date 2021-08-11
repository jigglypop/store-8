export const createToast = (message:string) => {
    const toasts = document.getElementById("toasts");
  
    const note = document.createElement("div");
    note.classList.add("toast");
    note.innerHTML = `<strong>${message}</strong> 완료!`;
    toasts?.appendChild(note);
    setTimeout(() => {
      note.remove();
    }, 2000);
};

