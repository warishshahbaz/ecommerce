import {css} from 'styled-components'

export const mobile = (Props) => {
    return css`
        @media only screen and (max-width:400px) {
            ${Props}
        }
    `
}