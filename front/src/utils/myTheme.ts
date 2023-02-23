import { MantineThemeOverride } from "@mantine/core";

const myTheme: MantineThemeOverride = {
  colors: {
    primary: ["#20232a"],
    secondary: ["#fefefe"],
    tertiary: ["#D4AE26"],
    text: ["#444"]
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
      h1: { fontSize: "38px" },
      h2: { fontSize: "30px" },
      h3: { fontSize: "22px" },
      h4: { fontSize: "17px" },
      h5: { fontSize: "15px" }
    }
  },
  
  other: {
    defaultText: {
      desktop: "lg",
      mobile: "sm",
    },
  }  
};


export default myTheme