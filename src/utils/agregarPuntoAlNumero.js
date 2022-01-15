export const agregarPuntoAlNumero = (number) => {
  return [...String(number)]
    .reverse()
    .map((e, i) => (i !== 0 && i % 3 === 0 ? [e, "."] : e))
    .reverse()
    .flat()
    .join("");
};
