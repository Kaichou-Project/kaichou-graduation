export const findAttributeMessage = (obj: any): string => {
  if (typeof obj === 'string') return obj
  if (obj?.message) return obj.message
  if (obj?.msg) return obj.msg
  if (obj?.messages) return obj.messages
  if (obj?.error) return String(obj.error)
  if (obj?.errros) return String(obj.errros)
  return String(obj)
}
