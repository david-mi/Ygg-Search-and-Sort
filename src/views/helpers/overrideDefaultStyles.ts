export function overrideDefaultStyles() {
  const header = document.querySelector("header[role='header']") as HTMLElement
  header.style.zIndex = "21474836"
}