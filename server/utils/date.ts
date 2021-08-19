function leftPad(value: number) {
  if (value >= 10) return value;
  return `0${value}`;
}
export function dateStringFormat(d: Date, infix: string = '-'): string {
  return [d.getFullYear(), leftPad(d.getMonth() + 1), leftPad(d.getDate())].join(infix);
}
