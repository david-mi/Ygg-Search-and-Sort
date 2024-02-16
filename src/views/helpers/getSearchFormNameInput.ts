export function getSearchFormNameInput(searchForm: HTMLFormElement) {
  return searchForm.querySelector("input[name='name']") as HTMLInputElement
}