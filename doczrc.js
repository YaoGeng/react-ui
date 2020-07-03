// doczrc.js

import { css } from 'docz-plugin-css'

export default {
    title: 'NE-react-ui',
    description: 'A Design UI library for React',
    plugins: [
        css({
            preprocessor: 'postcss'
        })
    ]
}