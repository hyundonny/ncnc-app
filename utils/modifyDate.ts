export const modifyDate = (date: string) => {
  return `${new Intl.DateTimeFormat('ko-KR').format(new Date(date))} 까지`;
};
