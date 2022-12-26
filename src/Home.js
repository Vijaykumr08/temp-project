import React from "react";

const Home = (props) => {
  const { title } = props;
  console.log(title);
  return (
    <div>
      <img src="Images/digital.png" alt="Wallpaper" />
      <h2>Hello Js</h2>
    </div>
  );
};

export default Home;
