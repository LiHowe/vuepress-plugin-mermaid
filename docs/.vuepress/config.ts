import { MermaidPlugin, Themes, registerTheme } from '../../lib/node'

const cc = registerTheme('fire', {
  background: '#393E46',
  fontSize: '14px',
  primaryColor: '#393E46',
  // noteBkgColor: '#00ADB5',
  noteTextColor: '#393E46',
  darkMode: false,
  lineColor: '#EEEEEE',
  actorBorder: '#EEEEEE',
  primaryTextColor: '#EEEEEE',
  attributeBackgroundColorOdd: '#43484e',
  attributeBackgroundColorEven: '#393E46'
  // primaryBorderColor: '#EEEEEE',
  // git0: '#D6E4E5',
  // git1: '#D6E4E5',
  // git2: '#D6E4E5',
  // git3: '#D6E4E5',
  // git4: '#D6E4E5',
  // git5: '#D6E4E5',
  // git6: '#D6E4E5',
  // git7: '#D6E4E5',
})

export default {
  plugins: [
    MermaidPlugin({
      theme: cc,
      darkTheme: Themes.ocean,
    })
  ]
}
