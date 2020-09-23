/** @jsx jsx */
import { jsx } from "@emotion/core"

// import * as styles from "./contact-details.styles"

import AnchorLink from "../anchor-link/anchor-link.component"

const ContactDetails = () => (
  <article>
    <h1>Contact Details</h1>
    <dl>
      <dt>Telephone</dt>
      <dd>
        <AnchorLink
          className="p-tel"
          href="tel:+442072624050"
          title="Telephone Number"
        >
          020 7262 4050
        </AnchorLink>
      </dd>

      <dt>Email</dt>
      <dd>
        <AnchorLink
          className="u-email"
          href="mailto:info@poshwash.london"
          title="Email Address"
        >
          info@poshwash.london
        </AnchorLink>
      </dd>
    </dl>
    <h1>Socialise</h1>
    <dl>
      <dt>Facebook</dt>
      <dd>
        <AnchorLink
          href="https://www.facebook.com/poshwash.london"
          title="Like us on Facebook"
        >
          @poshwash.london
        </AnchorLink>
      </dd>

      <dt>Instagram</dt>
      <dd>
        <AnchorLink
          href="https://www.instagram.com/poshwash.london"
          title="Follow us on Instagram"
        >
          @poshwash.london
        </AnchorLink>
      </dd>

      <dt>Twitter</dt>
      <dd>
        <AnchorLink
          href="https://twitter.com/Posh_Wash"
          title="Follow us on Twitter"
        >
          @poshwash.london
        </AnchorLink>
      </dd>
    </dl>
  </article>
)

export default ContactDetails
