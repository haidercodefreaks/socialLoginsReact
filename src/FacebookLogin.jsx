import React from "react";
import FacebookLogin from "react-facebook-login";

const App = () => {
  const handleFacebookLogin = (response) => {
    if (response.accessToken) {
      fetch("http://localhost:5000/api/auth/login/facebook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: response.accessToken,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User data from server:", data);
          // Handle the user data as needed
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  };

  return (
    <div>
      <h1>Facebook Login Demo</h1>
      <FacebookLogin
        appId={process.env.REACT_APP_FB_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookLogin}
      />
    </div>
  );
};

export default App;
