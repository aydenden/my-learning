export const a = () => {
  return {
    a: 1,
    b: 2,
  };
};

const b = () => {
  const a = 1;
  const b = 2;
  const c = 3;

  const a1 = () => {
    return a + b;
  };

  const a2 = () => {
    return a + b + c;
  };

  const a3 = a1() + a2();

  return a3;
};
