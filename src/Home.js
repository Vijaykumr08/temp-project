import React from "react";

const Home = (props) => {
  const { title } = props;
  console.log(title);
  return (
    <div>
      <img src="Images/digital.png" alt="Wallpaper" />
      <h2>Hello react</h2>
      <h2>second commit</h2>
      <h2>third commit</h2>
    </div>
  );
};

export default Home;
