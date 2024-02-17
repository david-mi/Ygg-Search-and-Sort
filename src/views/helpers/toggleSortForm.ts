import { sortForm } from "../components/sortForm/sortForm";
import { toggleCloseSortFormBackgroundDisplayMode } from "./toggleSortFormCloseBackgroundDisplayMode";

export function toggleSortFormDisplayMode() {
  const currentSortFormDisplayValue = sortForm.style.display

  sortForm.style.display = currentSortFormDisplayValue === "grid"
    ? "none"
    : "grid"

  toggleCloseSortFormBackgroundDisplayMode()
}