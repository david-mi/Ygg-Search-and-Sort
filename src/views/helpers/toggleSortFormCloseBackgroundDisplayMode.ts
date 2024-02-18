import { closeSortFormBackground } from "../components/closeSortFromBackground/closeSortFormBackground"

export function toggleCloseSortFormBackgroundDisplayMode() {
  const currentCloseFormBackgroundDisplayMode = closeSortFormBackground.style.display

  closeSortFormBackground.style.display = currentCloseFormBackgroundDisplayMode === "block"
    ? "none"
    : "block"
}