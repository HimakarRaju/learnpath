import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import CoreJava from "../pages/corejava";
import Oracle from "../pages/oracle";
import UITech from "../pages/uitechnologies";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
	<Switch>
		<Route path="/" component={Home} />
		<Route path="/learnpath" component={Home} />
		<Route path="/about" component={About} />
		<Route path="/corejava" component={CoreJava} />
		<Route path="/oracle" component={Oracle} />
		<Route path="/uitechnologies" component={UITech} />
	</Switch>
);
