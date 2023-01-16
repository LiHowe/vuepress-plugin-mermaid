import { MermaidPlugin, Themes, registerTheme } from '../../lib/node'

const cc = registerTheme('fire', {
  background: '#EFF5F5',
  fontSize: '14px',
  primaryColor: '#EFF5F5',
  noteBkgColor: '#497174',
  noteTextColor: '#333',
  darkMode: true,
  lineColor: '#EB6440',
  primaryBorderColor: '#D6E4E5',
  primaryTextColor: '#497174',
  git0: '#D6E4E5',
  git1: '#D6E4E5',
  git2: '#D6E4E5',
  git3: '#D6E4E5',
  git4: '#D6E4E5',
  git5: '#D6E4E5',
  git6: '#D6E4E5',
  git7: '#D6E4E5',
})

export default {
  plugins: [
    MermaidPlugin({
      theme: cc,
      darkTheme: cc,
    })
  ]
}
