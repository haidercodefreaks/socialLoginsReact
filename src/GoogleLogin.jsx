import React, { useEffect } from "react";

const GoogleLogin = () => {
  useEffect(() => {
    const loadGoogleScript = () => {
      // Check if gapi is already available
      if (window.gapi) {
        initGoogleSignIn();
        return;
      }

      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.onload = initGoogleSignIn;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const initGoogleSignIn = () => {
      gapi.load("auth2", () => {
        gapi.auth2.init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT,
        });
      });
    };

    loadGoogleScript();
  }, []);

  const handleSignIn = async () => {
    try {
      const auth2 = await gapi.auth2.getAuthInstance();
      const user = await auth2.signIn();
      console.log("User signed in:", user);
      // Handle the signed-in user here (send the returned data to the server)
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default GoogleLogin;
