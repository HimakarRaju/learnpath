import * as React from "react";
import { Link } from "wouter";




export default function Home() {
 
  return (
    <>
      <h1 className="title">Hello</h1>
      <h2>Dear Reader</h2>
     
     
      <div className="instructions">
        
        <h2>Using this Page</h2>
         <div className="navigation">
       <ul>
        <li>{" "}
          <Link href="/corejava">CORE JAVA</Link></li>
         <li>{" "}
          <Link href="/oracle">ORACLE</Link></li>
         <li>{" "}
          <Link href="/uitechnologies">UI TECHNOLOGIES</Link></li>
        </ul>
           <p>More Coming Soon...</p>
      </div>
        
        <p>This Page is for Notes related to JAVA FULLSTACK DEVELOPMENT.<br/>
          See more info in the{" "}
          <Link href="/about">About</Link> page.
        </p>
      </div>
    </>
  );
}
