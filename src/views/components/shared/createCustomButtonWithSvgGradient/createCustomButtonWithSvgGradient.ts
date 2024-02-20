import { createCustomElement, type ElementAttributes } from "@views/utils/createCustomElement";
import { createCustomSvgWithGradient, type CustomSvgWithGradientProps } from "../createCustomSvgWithGradient/createCustomSvgWithGradient";
import styles from "./customButtonWithSvgGradient.module.css"

interface CustomButtonWithSvgGradientProps extends CustomSvgWithGradientProps {
  attributes?: ElementAttributes
}

export function createCustomButtonWithSvgGradient({ attributes = [], ...svgProps }: CustomButtonWithSvgGradientProps) {
  const attributesWithMergedClassNames = attributes.map<[string, string]>(([name, value]) => {
    return name === "class"
      ? ["class", `${styles.customButtonWithSvgGradient} ${value}`]
      : [name, value]
  })

  return createCustomElement(({
    tagName: "button",
    attributes: attributesWithMergedClassNames,
    childrens: [createCustomSvgWithGradient(svgProps)]
  }))
}