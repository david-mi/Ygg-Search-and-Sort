import styles from "./sortForm.module.css"
import { createCustomElement } from "../utils/createCustomElement"

type ArrowDirection = "up" | "down"

const sortTypesElement = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.sortTypes]],
  childrens: [
    { name: "name", label: "Nom" },
    { name: "comments", label: "Commentaires" },
    { name: "publish_date", label: "Date de publication" },
    { name: "size", label: "Taille" },
    { name: "completed", label: "Téléchargements" },
    { name: "seed", label: "Seed" },
    { name: "leech", label: "Leech" }
  ].map(({ name, label }) => createCheckboxWrapper({ name, label }))
}))

function createArrowSvg(direction: ArrowDirection) {
  const classNames = `${styles.arrowSvg} ${styles[direction]}`

  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="${classNames}" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11 18V9.825L7.4 13.4L6 12l6-6l6 6l-1.4 1.4L13 9.825V18h-2Z"/>
    </svg>
  `
}

const ascendantOrderButton = createCustomElement({
  tagName: "button",
  attributes: [
    ["class", styles.orderButton]
  ],
  childrens: [createArrowSvg("up")]
})

const descendantOrderButton = createCustomElement({
  tagName: "button",
  attributes: [
    ["class", styles.orderButton]
  ],
  childrens: [createArrowSvg("down")]
})

const sortOrderElement = createCustomElement({
  tagName: "div",
  attributes: [["class", styles.sortOrder]],
  childrens: [ascendantOrderButton, descendantOrderButton]
})

interface CheckBoxWrapperProps {
  label: string
  name: string
}

function createCheckboxWrapper({ name, label }: CheckBoxWrapperProps) {
  return createCustomElement((({
    tagName: "div",
    attributes: [["class", styles.checkboxWrapper]],
    childrens: [
      `<label for="${name}">${label}</label>`,
      createCustomElement((({
        tagName: "input",
        attributes: [
          ["type", "checkbox"],
          ["name", name],
          ["id", name]
        ]
      })))
    ]
  })))
}

export const sortFormElement = createCustomElement(({
  tagName: "form",
  attributes: [["class", styles.form]],
  childrens: [
    sortTypesElement,
    createCheckboxWrapper({ name: "auto_toogle", label: "Auto-toggle" }),
    sortOrderElement
  ]
}))