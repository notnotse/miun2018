// Import React
import React from "react";
import PropTypes from "prop-types";
import Logo from "../assets/logo.png";
import ElmLogo from "../assets/Elm_logo.png";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle/dist/spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
const Wrapper = (props) => (
  <div>
    <img
      src={Logo}
      style={{
        position: "fixed",
        zIndex: 1,
        width: "10vw",
        left: "2vw",
        top: "2vw"
      }}
    />
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Wrapper>
        <Deck
          transition={["zoom", "slide"]}
          transitionDuration={500}
          theme={theme}
          autoplay
        >
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Join us - we have cookies</Quote>
              <Cite>!NOT Consulting</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>JavaScript, Java, Elm, Bash, Python, Lua or ...?</Quote>
              <Cite>!NOT Consulting</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Do you like maps and spatial information?</Quote>
              <Cite>!NOT Consulting</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>We 💚 Open Source</Quote>
              <Cite>github.com/notnotse</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>We hire talent not knowledge</Quote>
              <Cite>notnot.se/jobs</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Want to pick you own computer?</Quote>
              <Cite>notnot.se/jobs</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>We love food and code</Quote>
              <Cite>!NOT Consulting</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Are you a maker or a mender?</Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>
                <span style={{ fontFamily: "monospace" }}>.smoosh()</span> it!
              </Quote>
              <Cite>github.com/staltz/prevent-smoosh</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image src={ElmLogo} height={"20vw"} />

            <Heading size={3} textColor="primary">
              We run Elm<br /> in production
            </Heading>
            <Text textColor="tertiary">elm-lang.org</Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>Fork and improve this presentation at</Quote>
              <br />
              <Heading size={5} textColor="tertiary">
                github.com/notnotse/miun2018
              </Heading>
            </BlockQuote>
          </Slide>
        </Deck>
      </Wrapper>
    );
  }
}
