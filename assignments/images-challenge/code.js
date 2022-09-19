//let radius = 20
let amountCircles = 9

/*
const lineOfCircles = (radius) => {
  const diameter = 2*radius
  const dist = Math.floor(width/diameter)*diameter
  const extra = width-dist
  let x = 0
  while (x < width-extra){ 
    drawFilledCircle(x+radius+extra/2, height/2, radius, 'red')
    x += diameter
  }
}
lineOfCircles (radius);
*/

/*
const lineOfAltCircles = (radius) => {
  const diameter = 2 * radius
  const dist = Math.floor(width / diameter) * diameter
  const extra = width - dist
  let color = 'blue'
  let x = 0
  while (x < width - extra) {
    if (color === 'red') {
    color = 'blue'
    } else {
    color = 'red'
    }
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, color)
    x += diameter
  }
}
lineOfAltCircles (radius);
*/

/*
const fillWithCircles = (radius) => {
  const diameter = 2*radius
  const xdist = Math.floor(width/diameter)*diameter
  const xextra = width-xdist
  const ydist = Math.floor(height/diameter)*diameter
  const yextra = height-ydist
  let y = 0
  while (y < height-yextra) {
    let x = 0
    while (x < width-xextra) {
      drawCircle(x+radius+xextra/2, y+radius+yextra/2, radius, 'blue')
      x += diameter
    }
    y += diameter
  }
}
fillWithCircles (radius);
*/

const concentricCircles = (amountCircles) => {
  drawFilledCircle (width/2, height/2, width/2, 'blue')
  const radiuses = (width/2)/(amountCircles-1)
  let p = 0
  let color = 'red'
  let x = 0
  while (x < width/2) {
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
    drawFilledCircle(width/2, height/2, width/2-p, color)
    p += radiuses
  }
}
concentricCircles (amountCircles);