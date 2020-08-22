const getMenuItemByURL = (menu, term) => {
  const link = menu.find(menuItem => {
    return menuItem.href.includes(term)
  })
  return link
}

export default getMenuItemByURL
