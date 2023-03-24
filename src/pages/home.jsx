import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";




export default function Home() {
 
  return (
    <>
      <h1 className="title">Hello</h1>
    
     
        
     
      <div className="navigation">
       
      </div>
      <div className="instructions">
        <h2>Using this project</h2>
        <p>
          This is the Glitch <strong>Hello React</strong> project. You can use
          it to build your own app. See more info in the{" "}
          <Link href="/about">About</Link> page.
        </p>
      </div>
    </>
  );
}
