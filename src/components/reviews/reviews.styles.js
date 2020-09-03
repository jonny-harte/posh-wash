import { css } from "@emotion/core"

export const reviews = theme => css`
  margin-left: auto;
  margin-right: auto;

  blockquote {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: ${theme.baseSpacing()} 0;

    > div {
      align-items: center;
      display: flex;
      flex: 1;
    }
  }

  footer {
    margin-top: ${theme.baseSpacing()};
  }

  .swiper-pagination-bullets {
    bottom: 0;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 10px;

    > * {
      width: 100%;
    }
  }
`
export const star = () => css`
  height: 20px;
  width: 20px;

  polygon {
    fill: transparent;
    stroke: #fff;
  }

  &:not(:first-of-type) {
    margin-left: 10px;
  }

  &.fill {
    polygon {
      fill: #fff;
    }
  }
`
