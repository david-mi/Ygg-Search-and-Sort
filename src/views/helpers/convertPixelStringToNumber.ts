export function convertPixelStringToNumber(pixelString: `${number}px`) {
  return parseInt(pixelString.replace("px", ""), 10)
}