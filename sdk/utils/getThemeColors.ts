import { themeBlue, themeGreen, themeOrange, themePurple, themeRed } from "@/style/themeColors"

export const getThemeColors = (color: ThemeColorsEnum) => {
  switch (color) {
    case 'orange':
      return themeOrange
    case 'blue':
      return themeBlue
    case 'purple':
      return themePurple
    case 'red':
      return themeRed
    default:
      return themeGreen
  }
}