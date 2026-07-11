export const COLOR = {
  BLUE_DARK: "#2B7FFF",
  BLUE_LIGHT: "#EFF6FF",
  BLUE_BORDER: "#8EC5FF",

  GREEN_DARK: "#00C951",
  GREEN_LIGHT: "#F0FDF4",
  GREEN_BORDER: "#B9F8CF",

  ORANGE_DARK: "#FF6900",
  ORANGE_LIGHT: "#FFF7ED",
  ORANGE_BORDER: "#FFD7A8",

  PURPLE_DARK: "#AD46FF",
  PURPLE_LIGHT: "#F3E8FF",

  RED_DARK: "#FB2C36",
  RED_LIGHT: "#FFE2E2",

  GRAY_900: "#101828",
  GRAY_700: "#364153",
  GRAY_600: "#4A5565",
  GRAY_500: "#6A7282",
  GRAY_200: "#EBE6E7",
  GRAY_100: "#F6F3F4",
  GRAY_50: "#FBF9FA",

  PLACEHOLDER_COLOR: "#6A7282",

  BLACK: "#000",
  WHITE: "#FFF",
}

export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 16,
  XL: 32
}

export const FONT_SIZE = {
  XS: 12,
  SM: 14,
  BASE: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
  XXXL: 32,
}

export const LINE_HEIGHT = {
  XS: 14,
  SM: 16,
  BASE: 20,
  LG: 24,
  XL: 26,
  XXL: 30,
  XXXL: 40,
}

export const FONT_WEIGHT = {
  REGULAR: "400" as const,
  MEDIUM: "500" as const,
  SEMI_BOLD: "600" as const,
  BOLD: "700" as const
}

export const SPACING = {
  XM: 4,
  SM: 8,
  SSM: 12,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 64
}

export const SHADOW = {
  SM: {
    offsetX: 0,
    offsetY: 10,
    blurRadius: 15,
    spreadDistance: -3,
    color: 'rgba(0, 0, 0, 0.1)',
    inset: false,
  },
  LG: {
    offsetX: 0,
    offsetY: 25,
    blurRadius: 50,
    spreadDistance: -12,
    color: 'rgba(0, 0, 0, 0.25)',
    inset: false,
  }
}