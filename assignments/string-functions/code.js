const findFnord = (s) => {
  return s.search("fnord")
}

const stringContains = (s1, s2) => {
  return s1.search(s2) != -1
}

const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length/2)+s.substring(0, s.length/2)
}