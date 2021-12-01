import { css } from 'styled-components'

export const xsmall = props => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `
}

export const small = props => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `
}

export const medium = props => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `
}

export const large = props => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `
}

export const xlarge = props => {
  return css`
    @media only screen and (max-width: 1400px) {
      ${props}
    }
  `
}
