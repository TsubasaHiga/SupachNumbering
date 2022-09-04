const GetSha256 = async (text: string, hashLength: number = 0) => {
  const uint8 = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  const hash = Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('')
  return hashLength > 0 ? hash.slice(0, hashLength) : hash
}

export default GetSha256
