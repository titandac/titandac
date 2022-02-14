import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'TitansDAC',
    author: {
      name: 'TitansDAC',
      link: 'https://github.com/titandac',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  return {
    app,
    themeManager,
    languageManager,
  }
}
