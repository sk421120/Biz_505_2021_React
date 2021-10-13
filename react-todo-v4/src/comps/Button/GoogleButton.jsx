import React, { useEffect, useRef } from "react";
import { useUserContext } from "../../../../react-todo-v3-a/src/context";
import "../../css/GoogleButton.css";

function GoogleButton() {
  const buttonRef = useRef();

  const { setUser } = useUserContext();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const name = profile.getName();
    const image = profile.getImage();

    const Token = result.getAuthResponse().id_token;
    setUser({ userid: email, login_source: "GOOGLE" });
    alert(email + " Hello~");
  };

  /*
	public/index.html 파일에 script를 import 한다
	src="http://apis.google.com/js/api:client.js"
	*/
  const googleSDK_init = () => {
    if (!window.gapi) {
      alert("GOOGLE API NOT FOUND");
      return;
    }

    //   alert("GOOGLE API OK");
    // google API가 활성화되고 활성화된 API중에서 auth2가 loading(사용할 준비가 되면)
    window.gapi.load("auth2", async () => {
      const auth2 = await window.gapi.auth2.init({
        client_id:
          "143239812932-pq6856bf5pqql89i17a38vpl11ne8v5p.apps.googleusercontent.com",
        scope: "profile email",
      });

      if (auth2?.isSignedIn.get()) {
        console.log("Already Login Now");
        // 원하는 곳으로 redirect
      }

      // 	attachClickHandler
      //   auth2.attachClickHandler(buttonRef.current, {});
      await auth2.attachClickHandler(buttonRef.current, {}, googleResponse);
    });
  };

  useEffect(googleSDK_init, []);

  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("Logout OK");
  };

  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        <span className="icon"></span>
        <span className="buttonText">Google Login</span>
      </div>
      <span className="buttonText" onClick={logout}>
        Google Logout
      </span>
    </div>
  );
}

export default GoogleButton;
