export function getFormData(element: HTMLFormElement) {
  const formData = new FormData(element)
  return formDataToObject(formData)
}

export function formDataToObject(formData: FormData) {
  const obj = {}
  formData.forEach(function (value, key) {
    obj[key] = value
  })
  return obj
}
