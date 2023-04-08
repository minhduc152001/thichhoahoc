export const allFieldsNotEmpty = (array) => {
  const allFieldsNotEmpty = array.every((obj) => {
    const values = Object.values(obj);
    return values.every((val) => val !== "");
  });
  return allFieldsNotEmpty; // will be true if all fields are not empty in all objects
};
