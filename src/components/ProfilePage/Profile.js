import React from "react";
import HeroSection from "../HeroSection";
import { homeObjFour } from "../Store";

function Profile() {
  return (
    <>
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Profile;
