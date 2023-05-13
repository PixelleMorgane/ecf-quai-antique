import { MantineThemeOverride } from "@mantine/core";

const myTheme: MantineThemeOverride = {
  colors: {
    primary: [
      "#F1F2F4",
      "#D6D9E0",
      "#BCC1CC",
      "#A2A9B8",
      "#8891A5",
      "#6E7991",
      "#586074",
      "#424857",
      "#2C303A",
      "#16181D"
    ],
    secondary: [
      "#F2F2F2",
      "#DBDBDB",
      "#C4C4C4",
      "#ADADAD",
      "#969696",
      "#808080",
      "#666666",
      "#4D4D4D",
      "#333333",
      "#1A1A1A"
    ],
  },
  
  fontFamily: "'Montserrat', sans-serif",
  fontSizes: {
    xs: 13,
    sm: 14,
    md: 15,
    lg: 17,
    xl: 19
  },
  // lineHeight: "19px",
  headings: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 500,
    sizes: {
      h1: { fontSize: 38 },
      h2: { fontSize: 30 },
      h3: { fontSize: 22 },
      h4: { fontSize: 17 },
      h5: { fontSize: 15 }
    }
  },
  
  other: {
    defaultText: {
      desktop: "lg",
      mobile: "sm",
    }
  }  
};


export default myTheme