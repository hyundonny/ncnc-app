interface Warning {
  title: string;
  contents: string[];
}

export const modifyWarning = (warning: string): Warning[] => {
  return warning
    .split('\n\n')
    .map(str => str.split('\n'))
    .map(arr =>
      arr.reduce(
        (result, current, idx) => {
          if (idx === 0) result.title = current;
          else result.contents.push(current.replace(' - ', ''));
          return result;
        },
        { title: '', contents: [] } as Warning,
      ),
    );
};
