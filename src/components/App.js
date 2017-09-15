// packages
import React, {Component} from "react";

// internal files
import Header from "./header";
import Footer from "./footer";



// no need for css in this file.

class App extends React.Component {

	render() {
		return (
			<div className= "App">
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App;

/* sept 7th
make a folder for the components that arent the header, footer and body and name it views.
in there. from the app.js you can have a state that renders different views kind of like what handlebars
does but the react components are your templates.
*/

/* sept 8th
in this file i have just the header footer and routes. in the routes folder i have all of the view components
ready to be rendered. need to test if this works
*/
