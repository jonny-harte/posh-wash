import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import { useGooglePlacesData, useMenuJson } from "../../hooks"
import { getMenuItemByURL, isGooglePlaceOpen } from "../../utils"

import * as styles from "./business-hours.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

// TODO: Add manual dates from google like christmas and maybe add a manual override field too.
export const PureBusinessHours = ({ isOpen, menu, today, weekdayText }) => {
  const mailtoLink = getMenuItemByURL(menu, "mailto")
  const telLink = getMenuItemByURL(menu, "tel")

  return (
    <section css={styles.businessHours}>
      <h1>
        We`re <strong>{isOpen ? `open` : `closed`}</strong> Right&nbsp;Now
      </h1>
      <p>
        <AnchorLink
          href={isOpen ? telLink.href : mailtoLink.href}
          title={isOpen ? telLink.title : mailtoLink.title}
        >
          {isOpen ? "Call" : "Email"} us
        </AnchorLink>{" "}
        to book an appointment or feel free to turn up and book on arrival.
      </p>
      <p>Our usually business hours are:</p>
      <dl>
        {weekdayText.map(text => {
          const split = text.split(": ")
          const isToday = split[0].includes(today)

          return (
            <div key={uuidv4()} css={styles.dayOfWeek(isToday)}>
              <dt>{split[0]}</dt>
              <dd>{split[1]}</dd>
            </div>
          )
        })}
      </dl>
    </section>
  )
}

export const BusinessHours = props => {
  const [isOpen, setOpen] = useState(false)

  const {
    allMenuContactJson: { nodes: menuContact },
  } = useMenuJson()

  const {
    allGooglePlacesPlace: {
      edges: [
        {
          node: {
            opening_hours: { periods, weekday_text: weekdayText },
          },
        },
      ],
    },
  } = useGooglePlacesData()

  const today = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      const date = new Date()
      setOpen(isGooglePlaceOpen(date, periods))
    }, 1000)
    return () => {
      window.clearInterval(timer)
    }
  })

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <PureBusinessHours
      {...props}
      isOpen={isOpen}
      menu={menuContact}
      weekdayText={weekdayText}
      today={today}
    />
  )
  /* eslint-enable react/jsx-props-no-spreading */
}

PureBusinessHours.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  today: PropTypes.string.isRequired,
  weekdayText: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default BusinessHours
