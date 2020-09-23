import { connect } from "react-redux"
import PropTypes from "prop-types"

/** @jsx jsx */
import { jsx } from "@emotion/core"

import {
  clearForm as clearFormAction,
  updateForm as updateFormAction,
  updateNotification as updateNotificationAction,
} from "../../state/app"

import * as styles from "./contact-form.styles"

const ContactForm = ({
  botField,
  name,
  email,
  message,
  notification,
  clearForm,
  updateForm,
  updateNotification,
}) => {
  const encode = data => {
    return Object.keys(data)
      .map(
        key => `${encodeURIComponent(key)} = ${encodeURIComponent(data[key])}`
      )
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        botField,
        name,
        email,
        message,
      }),
    })
      .then(() => {
        clearForm()
        updateNotification("Message received. We will be in contact shortly!")
      })
      .catch(error => {
        updateNotification(error)
      })
  }
  return (
    <article css={styles.contactForm}>
      <h1>Send Us a Message</h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{" "}
            <input
              id="bot-field"
              name="bot-field"
              onChange={e => updateForm(e.target)}
            />
          </label>
        </p>
        <p>
          <label css={styles.label} htmlFor="name">
            <span>Name:</span>{" "}
            <input
              css={styles.input}
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => updateForm(e.target)}
            />
          </label>
        </p>
        <p>
          <label css={styles.label} htmlFor="email">
            <span>Email:</span>{" "}
            <input
              css={styles.input}
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={e => updateForm(e.target)}
            />
          </label>
        </p>
        <p>
          <label css={styles.label} htmlFor="message">
            <span>Message:</span>{" "}
            <textarea
              css={styles.textarea}
              id="message"
              name="message"
              required
              value={message}
              rows="6"
              onChange={e => updateForm(e.target)}
            />
          </label>
        </p>
        <p css={styles.controls}>
          <button type="button" className="button" onClick={clearForm}>
            Reset
          </button>
          <button type="submit" className="button">
            Send
          </button>
        </p>
        <div css={styles.notification}>
          <p>{notification}</p>
        </div>
      </form>
    </article>
  )
}

ContactForm.propTypes = {
  botField: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired,
  clearForm: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
  updateNotification: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  const { app } = state
  return {
    botField: app.botField,
    name: app.name,
    email: app.email,
    message: app.message,
    notification: app.notification,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    clearForm: () => dispatch(clearFormAction()),
    updateForm: input => dispatch(updateFormAction(input)),
    updateNotification: message => dispatch(updateNotificationAction(message)),
  }
}
// eslint-disable-next-line react-redux/prefer-separate-component-file
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
