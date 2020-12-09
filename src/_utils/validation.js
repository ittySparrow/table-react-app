export const allFieldsHasValues = (formData) => {
  return !Object.values(formData).includes('')
}
