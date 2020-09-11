/** @jsx jsx */
import { jsx } from "@emotion/core"

import * as styles from "./service-footer.styles"

const ServiceFooter = () => (
  <footer css={styles.footer}>
    <p css={styles.p}>
      * Prices and times are reviewed on an individual basis, and may vary based
      on the amount of work required.{" "}
      <strong>All prices are subject to VAT</strong>.
    </p>
  </footer>
)

export default ServiceFooter
