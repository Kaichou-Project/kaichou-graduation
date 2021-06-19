export function formDataToObject(formData: FormData) {
  const obj = {}
  formData.forEach(function (value, key) {
    obj[key] = value
  })
  return obj
}
