import * as React from "react";
import { animated } from "react-spring";
import { Link } from "wouter";




export default function Home() {
 
  return (
    <>
      <h1 className="title">Hello</h1>
      <h2>Dear Reader</h2>
     
      <div className="navigation">
       <ul>
        <li>{" "}
          <Link href="/corejava">CORE JAVA</Link></li>
        </ul>
      </div>
      <div className="instructions">
        <h2>Using this Page</h2>
        <p>This Page is for Notes related to JAVA FULLSTACK DEVELOPMENT.<br/>
          See more info in the{" "}
          <Link href="/about">About</Link> page.
        </p>
      </div>
    </>
  );
}
