const makeRow = () => {
  return Array(3).fill('')
}

const makeBoard = () => {
  return Array(3).fill(Array(3).fill(''))
}

const makeMove = (mark, row, column) => {
  return ({ mark, row, column })
}

const placeMark = (arr, obj) => {
  arr[obj.row][obj.column] = obj.mark
}

const allTheSame = (arr) => {
  if (arr[0] === arr[1]) {
    if (arr[1] === arr[2]) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

const extractColumn = (arr, x) => {
  return ([arr[0][x], arr[1][x], arr[2][x]])
}

const recordMove = (arr, obj) => {
  arr.push(obj)
}