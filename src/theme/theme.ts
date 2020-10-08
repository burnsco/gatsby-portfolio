export const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading"
}
export const commonButtonStyles = {
  py: 2,
  px: 3,
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: `pointer`,
  fontSize: `100%`,
  lineHeight: `inherit`
}

export const buttons = {
  source: {
    ...commonButtonStyles,
    backgroundColor: "white",
    color: "text",
    border: "3px solid #e7e7e7",

    ":hover": {
      backgroundColor: "#e7e7e7"
    }
  }
}

export const theme = {
  useCustomProperties: true,
  useBorderBox: true,
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: [
      null,
      "#FFFFFF",
      "#f7fafc",
      "#edf2f7",
      "#e2e8f0",
      "#cbd5e0",
      "#a0aec0",
      "#718096",
      "#4a5568",
      "#2d3748",
      "#1a202c"
    ],
    accent: "rgba(243,147, 55,1)",
    accent2: "rgba(255,193,135,1)",
    accent3: "rgba(255,172, 93,1)",
    accent4: "rgba(215,113, 16,1)",
    accent5: "rgba(169, 84,  3,1)",
    grayDark: "#2d3748",
    hotgradient:
      "background-image: linear-gradient(to right, rgb(250, 112, 154) 0%, rgb(254, 225, 64) 100%)",
    hotpink: "rgb(250, 112, 154)",
    hero1: "#292a2d",
    hero2: "#3b3d42",
    primary: "#292a2d",
    secondary: "#3b3d42",
    muted: "#e2e8f0",
    success: "#9ae6b4",
    info: "#63b3ed",
    warning: "#faf089",
    danger: "#feb2b2",
    light: "#f7fafc",
    dark: "#2d3748",
    textMuted: "#718096",
    eerieblack: "#252323",
    contact: "#003459",
    text: "rgba(80, 81, 79, 1)",
    background: "#FFFFFF",
    bone: "#DAD2BC",
    platinum: "#EDE6E3",
    gainsboro: "#DADAD9",
    blackolive: "#36382E",
    highlight: "#F9FBFB",
    footer: "#F5F1ED",
    slategray: "#70798C",
    grullo: "#A99985",
    skyblue: "#5BC3EB",
    blueDark: "rgba(25, 130, 196, 1)",
    carolinablue: "#00A5E0",
    lightblue: "#39A9DB",
    bluegreen: "#40BCD8",
    bluegreenlight: "#60cde5",
    orangesoda: "#F06449",
    saffron: "#F39237",
    persianred: "#D63230",
    coolred: "#f55555"
  },
  layout: {
    container: {
      maxWidth: "1200px",
      mx: ["1em", "2em"]
    },
    about: {
      bg: "#FFFFFF"
    },
    projects: {
      bg: "#F8F9FA"
    },
    miniapps: {
      bg: "#F8F9FA"
    },
    contact: {
      bg: "secondary"
    },
    footer: {
      px: 4,
      py: 3,
      bg: "blackolive",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  fonts: {
    sans:
      '"Inter UI",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
    mono:
      '"SF Mono","Roboto Mono",Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body:
      '"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    heading: "inherit",
    monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontWeights: {
    body: 400,
    bold: 600,
    heading: 700,
    display: 900
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.25rem",
    "2.5rem",
    "3rem",
    "3.5rem",
    "4.5rem",
    "5.5rem",
    "6.5rem"
  ],
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    heading: "-0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    body: "1.625",
    heading: "1.25"
  },
  sizes: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    px: "1px",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    container: 1300,
    header: 800,
    full: "100%",
    screenHeight: "100vh",
    screenWidth: "100vw"
  },
  shadows: {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    default: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
    none: "none"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ["40em", "52em", "64em", "80em"],
  imageStyles: {
    Hero: {
      WebkitBoxShadow:
        "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)",
      boxShadow:
        "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)",
      borderRadius: "50%",
      transform: `rotate(-35deg)`,
      position: "absolute",
      top: "unset",
      bottom: 0,
      right: 0,
      width: "100%",
      objectFit: "contain",
      objectPosition: "center",
      userSelect: "none",
      transition: "transform .5s, filter 1.5s ease-in-out"
    }
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      color: "saffron",
      fontSize: [7, 8],
      fontWeight: "display",
      letterSpacing: "tight"
    },
    subDisplay: {
      variant: "textStyles.heading",
      color: "#f6f6f6",
      fontSize: [2, 3],
      fontWeight: "body",
      letterSpacing: "tight"
    },
    projectTitle: {
      variant: "textStyles.heading",
      fontSize: [6, 7],
      color: "black",
      p: 5,
      letterSpacing: "tight"
    }
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px"
  },
  borders: {
    thick: "2px solid var(--theme-ui-colors-text, black)",
    thin: "1px solid var(--theme-ui-colors-text, black)"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    p: {
      color: "text",
      fontSize: [0, 1]
    },
    a: {
      color: "primary",
      textDecoration: "none"
    },
    h1: {
      fontFamily: "heading",
      lineHeight: "heading",
      color: "saffron",
      fontSize: [7, 8],
      fontWeight: "display",
      letterSpacing: "tight"
    },
    h2: {
      fontFamily: "heading",
      lineHeight: "heading"
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [4, 5]
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [3, 4]
    },
    h5: {
      fontFamily: "heading",
      lineHeight: "heading",
      color: "#f6f6f6",
      fontSize: [2, 3],
      fontWeight: "body",
      letterSpacing: "tight"
    },
    h6: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [1, 2]
    },
    img: {
      maxWidth: "100%",
      height: "auto"
    }
  },
  images: {
    avatar: {
      width: 140,
      height: 140,
      objectFit: "cover",
      objectPosition: "50% 50%",
      WebkitBoxShadow:
        "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)",
      boxShadow:
        "0 0 1px 11px rgba(80, 81, 79, .15), 0 0 1px 22px rgba(80, 81, 79, .1)",
      borderRadius: "9999px",
      transform: `rotate(-35deg)`
    },
    icon: {
      width: 5,
      height: 5,
      borderRadius: 99999
    }
  },
  alerts: {
    primary: {
      color: "background",
      bg: "primary"
    },
    muted: {
      color: "text",
      bg: "muted"
    }
  },
  badges: {
    primary: {
      color: "secondary",
      bg: "primary",
      fontSize: ["8px", "10px"]
    },
    outline: {
      p: [0, 1],
      px: [0, 2],
      m: [2, 0],
      fontSize: ["8px", "10px"],
      color: "black",
      border: "2px dashed",
      borderColor: "gray.5",
      bg: "gray.3"
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)"
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
      transition: "all 0.3s ease",
      "&:hover": {
        border: "1px solid",
        borderColor: "gray.6"
      }
    }
  },
  buttons: {
    ...buttons,
    demo: {
      cursor: "pointer",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 2,
      outline: "none",
      bg: `blue.5`,
      width: "100%",
      borderRadius: "sm",
      transition: "all 0.3s ease",
      "&:hover": {
        transition: "0.2s ease-in",
        bg: "blue.4"
      }
    },
    source: {
      cursor: "pointer",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: 2,
      outline: "none",
      bg: `indigo.3`,
      width: "100%",
      borderRadius: "sm",
      transition: "all 0.3s ease",
      "&:hover": {
        transition: "0.2s ease-in",
        bg: "persianred"
      }
    }
  },
  forms: {
    label: {
      fontSize: 1,
      color: "muted"
    },
    input: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderImageSlice: "1",
      borderImageSource: (themes: any) =>
        `linear-gradient(to left, ${themes.colors.info}, ${themes.colors.warning})`,
      color: "white",
      outline: "none",
      bg: "secondary",
      mb: 3
    },
    textarea: {
      borderWidth: "3px",
      borderStyle: "solid",
      borderImageSlice: "1",
      borderImageSource: (themes: any) =>
        `linear-gradient(to left, ${themes.colors.info}, ${themes.colors.warning})`,
      color: "white",
      outline: "none",
      bg: "secondary",
      mb: 3
    }
  },
  links: {
    color: "primary",
    nav: {
      fontSize: [1, 2],
      textDecoration: "none",
      p: 2,
      "&:hover": {
        transition: "0.2s ease-in",
        color: "saffron"
      }
    }
  }
}

module.exports = theme
