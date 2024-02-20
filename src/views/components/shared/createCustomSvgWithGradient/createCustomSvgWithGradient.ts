import styles from "./customSvgWithGradient.module.css"

export interface CustomSvgWithGradientProps {
  paths: string[],
  gradient: {
    orientation: "horizontal" | "vertical"
    startColor: string,
    endColor: string
  },
  svgClassName?: string
}

let gradientIdCounter = 0;

export function createCustomSvgWithGradient({
  paths,
  gradient: { orientation = "vertical", startColor, endColor },
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
          x2="${orientation === "horizontal" ? "100%" : "0%"}"
          y2="${orientation === "vertical" ? "100%" : "0%"}" 
          gradientUnits="userSpaceOnUse"
          >
          <stop offset="0%" stop-color="${startColor}"/>
          <stop offset="100%" stop-color="${endColor}"/>
        </linearGradient>
      </defs>
  </svg>
  `
}