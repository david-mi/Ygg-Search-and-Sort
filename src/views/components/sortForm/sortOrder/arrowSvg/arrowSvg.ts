import styles from "./arrowSvg.module.css"

type ArrowDirection = "up" | "down"

export function createArrowSvgHtml(direction: ArrowDirection) {
  const classNames = `${styles.arrowSvg} ${styles[direction]}`

  return `
  <svg xmlns="http://www.w3.org/2000/svg" class="${classNames}" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 18V9.825L7.4 13.4L6 12l6-6l6 6l-1.4 1.4L13 9.825V18h-2Z"/>
  </svg>
`
}