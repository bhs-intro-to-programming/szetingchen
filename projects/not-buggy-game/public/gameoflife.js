

const pixSizeFactor =20
const timeTillUpdate = 10

const declareAr = (pixSizeFactor) => {
  const array = []
  for (let y = 0; y < Math.floor(height / pixSizeFactor)+2; y++) {
    array.push([])
    for (let x = 0; x < Math.floor(width / pixSizeFactor)+2; x++) {
      array[y].push(0)
    }
  }
  return array
}

const randomPopulate = (percent, screenAr) => {
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      if (Math.random() <= percent) {
        screenAr[y][x] = 1
      }
    }
  }
}

const display = (screenAr, color) => {
  const widthPix = pixSizeFactor;
  const heightPix = pixSizeFactor;
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      if (screenAr[y][x] === 1) {
        drawFilledRect((x-1) * pixSizeFactor, (y-1) * pixSizeFactor, widthPix, heightPix, color)
      }
    }
  }
}

const declareNextGen = (screenAr) => {
  const tempScreenAr = JSON.parse(JSON.stringify(screenAr));
  for (let y = 1; y < screenAr.length-1; y++) {
    for (let x = 1; x < screenAr[0].length-1; x++) {
      let sum = 0
      //counts the number of alive cells around the curent cell including itself
      for(let yOffset = -1; yOffset<=1; yOffset++){
        for(let xOffset = -1; xOffset<=1; xOffset++){
          sum+=screenAr[y-yOffset][x-xOffset]
        }
      }

      //if the number of alive cells is 3 then set the current cell alive
      if(sum===3){
        tempScreenAr[y][x]=1
      }
      //if the number of alive cells is 4 don't change the current cell
      //otherwise kill the current cell
      else if(sum!=4){
        tempScreenAr[y][x]=0
      }
    }
  }
  return tempScreenAr;
}

let screenAr = declareAr(pixSizeFactor)
randomPopulate(0.5, screenAr)



let next = 0;
const drawFrame = (time) => {
  if(time>next){
    clear();
    screenAr = declareNextGen(screenAr);
    display(screenAr);
    next+=timeTillUpdate;
  }
}
animate(drawFrame)