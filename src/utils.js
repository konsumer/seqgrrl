// zero-padded 2-digit hex num
export const toHex = num => num.toString(16).padStart(2, '0').toUpperCase()

// use for demo-content
export const randHex = () => toHex(Math.random() * 16) | 0
