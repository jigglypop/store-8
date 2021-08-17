// 금액 점 찍어주는 함수
export const dot = (nums: number) => {
  if (nums < 0) {
    return '-' + Math.abs(nums).toLocaleString('eu-AU');
  } else {
    return '' + Math.abs(nums).toLocaleString('eu-AU');
  }
};
