import styles from "./sortForm.module.css"

type ArrowDirection = "up" | "down"

function createArrowSvg(direction: ArrowDirection) {
  const classNames = `${styles.arrowSvg} ${styles[direction]}`

  return `
  <svg xmlns="http://www.w3.org/2000/svg" class="${classNames}" viewBox="0 0 24 24">
    <path fill="currentColor" d="M11 18V9.825L7.4 13.4L6 12l6-6l6 6l-1.4 1.4L13 9.825V18h-2Z"/>
  </svg>
`
}

function createOrderButton(children: string) {
  return `
  <button class="${styles.orderButton}">
    ${children}
  </button>
  `
}

interface CheckBoxWrapperProps {
  label: string
  name: string
}

function createCheckboxWrapper({ name, label }: CheckBoxWrapperProps) {
  return `
  <div class="${styles.checkboxWrapper}">
    <label for="${name}">${label}</label>
    <input type="checkbox" name="${name}" id="${name}" />
  </div>
  `
}


export const sortForm = `
<div class="${styles.container}">
  <div class="${styles.sortType}">
    ${createCheckboxWrapper({ name: "name", label: "Nom" })}
    ${createCheckboxWrapper({ name: "comments", label: "Commentaires" })}
    ${createCheckboxWrapper({ name: "publish_date", label: "Date de publication" })}
    ${createCheckboxWrapper({ name: "size", label: "Taille" })}
    ${createCheckboxWrapper({ name: "completed", label: "Téléchargements" })}
    ${createCheckboxWrapper({ name: "seed", label: "Seed" })}
    ${createCheckboxWrapper({ name: "leech", label: "Leech" })}
  </div>
  ${createCheckboxWrapper({ name: "auto_toogle", label: "Auto-toggle" })}
  <div class="${styles.sortOrder}">
    ${createOrderButton(createArrowSvg("up"))}
    ${createOrderButton(createArrowSvg("down"))}
  </div>
</div>
`;