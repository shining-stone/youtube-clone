import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      나의 컴포넌트, 이름은 {name}. <br></br>
      태그 사이값은 children. {children} <br />
      좋아하는 숫자는 {favoriteNumber}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
