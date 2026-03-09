import React from "react";

interface ILandingLayout {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: ILandingLayout) => {
  return <>{children}</>;
};

export default LandingLayout;
