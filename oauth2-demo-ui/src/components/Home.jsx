import React from "react";

const Home = () => {
  const googleLogin = () => {
    window.open("http://localhost:8080/oauth2/authorization/google");
  };
  const githubLogin = () => {
    window.open("http://localhost:8080/oauth2/authorization/github");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={githubLogin}>Login with GitHub</button>
    </div>
  );
};

export default Home;
