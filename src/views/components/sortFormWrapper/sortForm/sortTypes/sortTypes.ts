import { createCustomElement } from "@utils/createCustomElement"
import { createCheckboxInputWrapperElement } from "../shared/checkboxInputWrapper/checkboxInputWrapper"
import styles from "./sortTypes.module.css"
import type { SortType } from "types";

export const sortData: { name: SortType; label: string }[] = [
  { name: "name", label: "Nom" },
  { name: "comments", label: "Commentaires" },
  { name: "publish_date", label: "Date de publication" },
  { name: "size", label: "Taille" },
  { name: "completed", label: "Téléchargements" },
  { name: "seed", label: "Seed" },
  { name: "leech", label: "Leech" }
];

const sortTypesCheckboxesWrapper = sortData.map(({ name, label }) => createCheckboxInputWrapperElement({ name, label }))
export const sortTypesCheckboxes = sortTypesCheckboxesWrapper.map((sortTypeCheckboxWrapper) => {
  return sortTypeCheckboxWrapper.querySelector("input") as HTMLInputElement
})

export const sortTypesElement = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.sortTypes]],
  childrens: sortTypesCheckboxesWrapper
}))