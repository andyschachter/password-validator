const lengthCheck = (val) => {
  if (val.length >= 8) return true

  return false
}

const validatePassword = (val) => {
  if (lengthCheck(val)) return true

  return false
}

module.exports = validatePassword
