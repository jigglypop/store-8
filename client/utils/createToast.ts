// 토스트
export const createToast = (message: string) => {
  // toasts아이디 셀렉트 하고 새로 div 만들어서 appendchild(2000초 후에 없어짐)
  const toasts = document.querySelector('#toasts');
  const note = document.createElement('div');
  note.classList.add('toast');
  note.innerHTML = `<strong class="strong">${message}</strong> 완료!`;
  toasts?.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 2000);
};
