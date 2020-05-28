import PropTypes from "prop-types";
import React from "react";

interface HomeProps {
  title?: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
  return <div>{title}</div>;
};

Home.propTypes = {
  title: PropTypes.string,
};

export default Home;
