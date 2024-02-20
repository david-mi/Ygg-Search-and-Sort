import { createCustomElement } from "@utils/createCustomElement"
import { createCustomSvgWithGradient } from "@views/components/shared/createCustomSvgWithGradient/createCustomSvgWithGradient"
import styles from "./closeButton.module.css"

export const closeSortFormButton = createCustomElement(({
  tagName: "button",
  attributes: [["class", styles.closeButton], ["type", "button"]],
  childrens: [
    createCustomSvgWithGradient({
      paths: [
        `<path fill="currentColor" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/>`
      ],
      gradient: {
        startColor: "#cbd1da",
        endColor: "#cbd1da",
        orientation: "horizontal"
      },
    }),
  ]
}))