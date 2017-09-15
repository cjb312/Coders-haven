// packages
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// components / styles
import Posts from "./views/posts";
import CreateArticle from "./views/createArticle";
import App from "./components/App";

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Posts}/>
		<Route path="/posts/create" component={CreateArticle}/>
	</Route>

)

export default Routes
