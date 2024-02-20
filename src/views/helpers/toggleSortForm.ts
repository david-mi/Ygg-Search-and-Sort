import { sortForm } from "@components/sortFormWrapper/sortForm/sortForm";

export function toggleSortFormDisplayMode() {
  const currentSortFormDisplayValue = sortForm.style.display

  if (currentSortFormDisplayValue === "flex") {
    sortForm.style.display = "none"
    document.removeEventListener("click", toggleSortFormDisplayMode)
  } else {
    sortForm.style.display = "grid"
    document.addEventListener("click", toggleSortFormDisplayMode)
  }
}