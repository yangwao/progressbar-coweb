import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
} from "semantic-ui-react";
import styled from "styled-components";
import JoinUs from '../JoinUs/JoinUs';
import pbHeroImg from "../../../static/bigimgs/pbwhenitwasfull.jpg"

const LandingHeroWrapper = styled.div`
  background-image: url(${pbHeroImg});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: #000;
`;

const LandingHero = ({ mobile }) => (
  <LandingHeroWrapper>
    <Container
      text
      style={{
        paddingTop: mobile ? "1.5em" : "3em",
        paddingBottom: mobile ? "1.5em" : "3em"
      }}
    >
      <Header
        as="h1"
        content="Progressbar"
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0
        }}
      />
      <Header
        as="h2"
        content="Your new favorite coworking, hackerspace & hangout zone in downtown Bratislava."
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
      <JoinUs />
    </Container>
  </LandingHeroWrapper>
);


LandingHero.propTypes = {
  mobile: PropTypes.bool
};

export default LandingHero;
