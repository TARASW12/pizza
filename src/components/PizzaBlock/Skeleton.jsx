import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="533" cy="287" r="74" />
    <circle cx="590" cy="242" r="36" />
    <circle cx="139" cy="139" r="139" />
    <rect x="0" y="289" rx="10" ry="10" width="280" height="38" />
    <rect x="0" y="342" rx="11" ry="11" width="280" height="88" />
    <rect x="0" y="451" rx="8" ry="8" width="90" height="27" />
    <rect x="63" y="475" rx="0" ry="0" width="1" height="1" />
    <rect x="127" y="437" rx="30" ry="30" width="152" height="50" />
  </ContentLoader>
);

export default Skeleton;
