import * as React from "react";
/* ADD IMPORTS FROM TODO ON THE NEXT LINE */


/**
* The About function defines the component that makes up the About page
* This component is attached to the /about path in router.jsx
*/

export default function About() {
  /* DECLARE STYLE AND TRIGGER FOR WIGGLE EFFECT FROM TODO ON NEXT LINE */
  
  return (
    <div className="page">
      {/* REPLACE H1 ELEMENT BELOW WITH CODE FROM TODO */}
      <h1 className="title">
        About this site
      </h1>
      {/* REPLACE OPENING P TAG BELOW WITH CODE FROM TODO */}
      <p>
        <strong>Welcome to the Learn Path where you can instantly check various notes and codes of Programming Languages in JAVA FULLSTACK DEVELOPMENT</strong>
      </p>
      <p>
        <em>
          If you're completely new to React, learning the{" "}
          <a href="https://reactjs.org/docs/hello-world.html">main concepts</a>{" "}
          will get you off to a great start.
        </em>
      </p>
      <p>
        This page is a great spot to tell the world a few details about JAVA FULLSTACK DEVELOPMENT
      </p>

      <p>
        {" "}
        The Glitch community is glad to welcome you, and the Internet is better
        when it's made by real people. We can't wait to see what you create!
      </p>
      <p>
        Built with <a href="https://reactjs.org/">React</a> and{" "}
        <a href="https://vitejs.dev/">Vite</a> on{" "}
        <a href="https://glitch.com/">Glitch</a>.
      </p>
    </div>
  );
}
