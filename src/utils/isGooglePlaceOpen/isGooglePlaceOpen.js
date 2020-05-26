export const isValidDate = date => {
  if (date === undefined) {
    throw new Error("isValidDate requires a date argument.")
  }

  // Return true if valid date object supplied.
  return date instanceof Date
}

export const setGooglePlaceTimeFormat = (hour, minute) => {
  if (hour === undefined || minute === undefined) {
    throw new Error(
      "setGooglePlaceTimeFormat requires an hour and minute arguments."
    )
  }

  // Combine hours and minutes with no separator.
  // If minutes less than 10 add leading zero (Same as Google).
  return +`${hour}${minute < 10 ? `0${minute}` : minute}`
}

export const getBusinessHours = (date, periods) => {
  // Check if date is valid and periods object supplied.
  if (!isValidDate(date)) {
    throw new Error("getBusinessHours requires a valid date.")
  }
  if (typeof periods !== "object") {
    throw new Error("getBusinessHours requires a periods object.")
  }

  // Get date's day of the week. Sunday - Saturday : 0 - 6.
  const dayOfWeek = date.getDay()

  // Find day object that matches date's day of the week.
  return periods.find(obj => obj.close.day === dayOfWeek)
}

export const isGooglePlaceOpen = (date, periods) => {
  // Check if date is valid.
  if (!isValidDate(date)) {
    return false
  }

  // Get date's opening and closing times object.
  const businessHours = getBusinessHours(date, periods)

  // If no times returned then must be closed.
  if (businessHours === undefined) {
    return false
  }

  // Convert times to integers so they can be compared.
  const closeTime = +businessHours.close.time
  const openTime = +businessHours.open.time

  // Get time right now in the same format as google place data.
  const timeNow = setGooglePlaceTimeFormat(date.getHours(), date.getMinutes())

  // If its before opening time and after closing return false.
  return timeNow > openTime && timeNow < closeTime
}
