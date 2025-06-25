function sha512(str) {
  return crypto.subtle
    .digest("SHA-512", new TextEncoder("utf-8").encode(str))
    .then(buf => Array.from(new Uint8Array(buf)).map(x => x.toString(16)).join(""));
}