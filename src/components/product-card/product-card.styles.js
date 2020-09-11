import { css } from "@emotion/core"

export const productCard = () => css`
  display: flex;
  flex-direction: column;
`

export const description = () => css`
  flex: 1;
`
export const price = theme => css`
  ${theme.heading};
  font-size: 12px;
  text-align: right;

  strong {
    font-size: 20px;
  }
`
