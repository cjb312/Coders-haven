import React from "react";
require("../css/style.scss");
import Header from "../components/header";
import Footer from "../components/footer";

class Posts extends React.Component {
	// a discussion board tutorial
	// https://www.youtube.com/watch?v=NMiYaaB0-fI
	constructor(props) {
		super(props);
		const articles = [

		];
		const comments = [

		];

		this.state = { articles: articles, comments: comments };
	}

	componentDidMount() {
		fetch('/api/getposts')
			.then(res => res.json())
			.then(articles => {
				this.setState({articles});
				console.log(articles);
			});
	}


	render() {
		let articles = this.state.articles


		const spanStyle = {
			color: "#00BCD4",
			marginRight: "4px"
		};

		console.log("Here are the articles nerd " , articles);
		return (
			<div className="container">
				<div className="container">
					<p className="article-header article-header-lg"> All Posts </p>
				</div>
				<h2 className="article-header article-header-sm"> All posts, organized by most recent.</h2>
				<div>
					{articles.map(articles =>
						<div id="articleSection" className="article-container" key={articles.id}>
							<div className="article-header-container">
								<p className="article-static article-title-static"> Title: </p>
								<p className="article-dynamic article-title-dynamic"> {articles.title} </p>
							</div>
							<p className="article-author"> <span style={spanStyle}> Author: </span> {articles.author} </p>
							<p className="article-date"> <span style={spanStyle}> Date posted: </span> {articles.date} </p>
							<div className="article-body-container well">
								<p className="article-dynamic article-body"> {articles.body} </p>
							</div>
						</div>
					)}
					<div className="push"></div>
				</div>
			</div>
		)
	}
}


export default Posts;
