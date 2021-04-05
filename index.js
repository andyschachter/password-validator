const validatePassword = (val) => {
  let upper = 0
  let lower = 0
  let nums = 0
  let chars = 0

  for (let i = 0; i < val.length; i++) {
    upper += upperCheck(val, i)
    lower += lowerCheck(val, i)
    nums += numCheck(val, i)
    chars += charCheck(val, i)
  }

  if (upper > 0 && lower > 0 && chars > 0 && nums > 0 && val.length >= 8) {
    return true
  }

  return false
}

const lowerCheck = (val, i) => {
  let character = val.charAt(i)

  if (character.toUpperCase() !== character && character === character.toLowerCase()) {
    return 1
  }

  return 0
}

const upperCheck = (val, i) => {
  let character = val.charAt(i)

  if (character.toLowerCase() !== character && character === character.toUpperCase()) {
    return 1
  }

  return 0
}

const numCheck = (val, i) => {
  if (!isNaN(val[i]) && val[i] !== ' ') {
    return 1
  }

  return 0
}

const charCheck = (val, i) => {
  const specialChars = '!@#$%&*()\'+,-./:;<=>?[]^_`~{|}'

  if (specialChars.indexOf(val[i]) >= 0) {
    return 1
  }

  return 0
}

module.exports = validatePassword
