export const telAlert = e => {
  e.preventDefault()
  // TODO: Add custom modal instead of window.alert.
  // eslint-disable-next-line no-alert
  window.alert("Posh Wash is currently closed. Please email instead.")
}

export default telAlert
