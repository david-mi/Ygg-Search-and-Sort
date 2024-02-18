import { createCustomElement } from "../../../../utils/createCustomElement"
import { createCheckboxInputWrapperElement } from "../shared/checkboxInputWrapper/checkboxInputWrapper"
import styles from "./sortTypes.module.css"

export const sortTypesElement = createCustomElement(({
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
  ].map(({ name, label }) => createCheckboxInputWrapperElement({ name, label }))
}))