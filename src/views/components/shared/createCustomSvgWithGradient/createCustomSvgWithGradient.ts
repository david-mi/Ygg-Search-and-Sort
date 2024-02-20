import styles from "./customSvgWithGradient.module.css"

export interface CustomSvgWithGradientProps {
  paths: string[],
  svgClassName?: string
}

let gradientIdCounter = 0;

export function createCustomSvgWithGradient({
  paths,
  svgClassName
}: CustomSvgWithGradientProps) {
  const gradientId = `gradient-${gradientIdCounter++}`;

  function replacePathsFillProperty(fillValue: `url(#${string})`) {
    return paths.reduce((pathsToString, path) => {
      return pathsToString += path
        .replace(/fill=.+?\s/, "")
        .replace(/<path\s/, `<path fill="${fillValue}" `)
    }, "")
  }

  return `
  <svg class="${svgClassName} ${styles.customSvgWithGradient}" viewBox="0 0 24 24">
      ${replacePathsFillProperty(`url(#${gradientId})`)}
      <defs>
        <linearGradient 
          id="${gradientId}"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
          >
          <stop offset="0%"/>
          <stop offset="100%"/>
        </linearGradient>
      </defs>
  </svg>
  `
}