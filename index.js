const lengthCheck = (val) => {
  if (val.length >= 8) return true

  return false
}

const lowerCheck = (val) => {

  for (let i = 0; i < val.length; i++) {
    let character = val.charAt(i)

    if (character.toUpperCase() !== character && character === character.toLowerCase()) return true
  }

  return false
}

console.log(lowerCheck('PASSWORd'))

const upperCheck = (val) => {

  for (let i = 0; i < val.length; i++) {
    let character = val.charAt(i)

    if (character.toLowerCase() !== character && character === character.toUpperCase()) return true
  }

  return false
}

console.log(upperCheck('passworD'))

const numCheck = (val) => {

  for (let i = 0; i < val.length; i++) {
    if (!isNaN(val.charAt(i)) && val[i] !== ' ') return true
  }

  return false
}

console.log(numCheck('password1'))

const charCheck = (val) => {
  const specialChars = "!@#$%&*()'+,-./:;<=>?[]^_`~{|}";

  for (let i = 0; i < val.length; i++) {
    if (specialChars.indexOf(val[i]) >= 0) return true
  }

  return false
}

console.log(charCheck('password@'))

const validatePassword = (val) => {
  if (lengthCheck(val) && lowerCheck(val) && upperCheck(val) && numCheck(val) && charCheck(val)) return true

  return false
}

module.exports = validatePassword
