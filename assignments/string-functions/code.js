const findFnord = (s) => {
  return s.indexOf("fnord")
}

const stringContains = (s1, s2) => {
  return s1.search(s2) != -1
}

const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const simplePigLatin = (s, num) => {
  return s.substring(num) + s.substring(0, num) + 'ay'
}

const isAllUpperCase = (s) => {
  return s.toUpperCase() === s
}

const sameIgnoringCase = (s1, s2) => {
  return s1.toLowerCase() === s2.toLowerCase()
}

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = (s) => {
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase()
}

const firstName = (s) => {
  return s.substring(0, s.indexOf(' '))
}

const lastName = (s) => {
  return s.substring(s.indexOf(' ') + 1)
}

const concatenate = (s1, s2) => {
  return s1 + s2
}

const firstCharacter = (s) => {
  return s[0]
}

const lastCharacter = (s) => {
  return s[s.length - 1]
}

const allButFirst = (s) => {
  return s.substring(1)
}

const firstThree = (s) => {
  return s.substring(0, 3)
}

const allButFirstAndList = (s) => {
  return s.substring(1, s.length - 1)
}

const lastThree = (s) => {
  return s.substring(s.length - 3)
}

const capitalize = (s) => {
  return s[0].toUpperCase() + s.substring(1).toLowerCase()
}

const capitalizeFirstThree = (s) => {
  return s.substring(0, 3).toUpperCase() + s.substring(3).toLowerCase()
}