import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import Container from "./chakra/container";
import './fonts.css';

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components: {
    Container,
  },
  breakpoints,
  config,
  fonts: {
    heading: `'Quizble', sans-serif`, // Customize where needed
    body: `'Quizble', sans-serif`,
  },
});

export default theme;
