export function formatYggHostname() {
  const { hostname } = location
  return `www3.${hostname.replace(/.+(?=ygg)/, "")}`
}

export function getSearchForms() {
  return document.querySelectorAll<HTMLFormElement>(`form[action='https://${formatYggHostname()}/engine/search']`)
}