const GetSha256 = async (text: string) => {
  const uint8 = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', uint8)
  const hash = Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('')
  return hash
}

export default GetSha256
