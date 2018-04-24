import { css } from 'styled-components'

export const COLORS = {
  background: '#fbf9f6',
  gray: '#343e47',
  primary: '#017ab8',
  primaryLight: '#3cabe5',
  secondary: '#df3e06'
}

export const MEDIA = {
  medium: (...args) =>
    console.log(css(...args)) ||
    css`
      @media (max-width: 1000px) {
        ${css(...args)}
      }
    `,
  small: (...args) =>
    console.log(css(...args)) ||
    css`
      @media (max-width: 600px) {
        ${css(...args)}
      }
    `
}

export const LINKS = {
  okc: 'http://www.okcupid.com',
  lightyear: 'http://www.lightyear.io',
  bitywmf: 'http://www.bitchithoughtyouwasmyfriend.com',
  songranks: 'http://www.songranks.com',
  sadgoetz: 'http://www.sadgoetz.com',

  blogDirectories: 'https://tech.okcupid.com/how-okcupid-organizes-its-multi-page-react-app/',
  blogLocalhost: 'https://tech.okcupid.com/working-on-okcupid-in-production-with-webpack-and-localhost/'
}
