import { sortForm } from "../components/sortForm/sortForm";

export function toggleSortFormDisplayMode() {
  const currentSortFormDisplayValue = sortForm.style.display

  sortForm.style.display = currentSortFormDisplayValue === "grid"
    ? "none"
    : "grid"
}