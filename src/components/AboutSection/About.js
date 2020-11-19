import React from "react";
import HeroSection from "../HeroSection";
import {homeObjTwo} from '../Store'

function About() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default About;

