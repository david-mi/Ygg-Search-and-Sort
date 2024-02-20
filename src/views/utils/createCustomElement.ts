export type ElementAttributes = [string, string][]

type CreateCustomElementProps<T> = {
  tagName: T
  attributes?: ElementAttributes,
  childrens?: (HTMLElement | string)[]
}

export function createCustomElement<T extends keyof HTMLElementTagNameMap>(props: CreateCustomElementProps<T>) {
  const { childrens = [], tagName, attributes = [] } = props

  const element = document.createElement(tagName);

  for (const [name, value] of attributes) {
    element.setAttribute(name, value)
  }

  for (const children of childrens) {
    if (typeof children === "string") {
      element.insertAdjacentHTML("beforeend", children)
    } else {
      element.insertAdjacentElement("beforeend", children)
    }
  }
  return element;
}