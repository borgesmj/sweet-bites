export const encodeUrl = (producName) => {
  producName = producName
    .trim()
    .toLowerCase()
    .replace(/[/*+.:_,;'¿?¡!@]/g, "")
    .replace("á", "a")
    .replace("é", "e")
    .replace("í", "i")
    .replace("ó", "o")
    .replace("ú", "u")
    .replace("ñ", "n")
    .replace(/\s/g, "-");

  return producName;
};
