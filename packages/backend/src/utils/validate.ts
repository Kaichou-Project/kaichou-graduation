// TODO for validate embed url format
export const isValidEmbedUrl = (videoEmbedUrl: string): boolean => {
  const REG = ''
  return !!videoEmbedUrl.match(REG)
}
