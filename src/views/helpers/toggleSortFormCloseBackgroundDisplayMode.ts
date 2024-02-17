import { closeSortFormBackground } from "../components/sortForm/sortForm";

export function toggleCloseSortFormBackgroundDisplayMode() {
  const currentCloseFormBackgroundDisplayMode = closeSortFormBackground.style.display

  closeSortFormBackground.style.display = currentCloseFormBackgroundDisplayMode === "block"
    ? "none"
    : "block"
}