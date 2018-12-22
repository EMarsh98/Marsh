import React, { Component } from 'react';
import './App.css';

function About(){
	return(
		<div className="container">
		<div className="row">
			<div className="col">
				<h1>The name is Ethan Marsh</h1>
			</div>
		</div>
		<div className="row">
			<div className="col">
				<h5>I am a fullstack web developer by trade. I have recently graduated from Nova Scotia Community College and I am excited to show the industry what I am made of. I have worked extensivly with bootstrap.</h5>
			
				<h2>EthanMarsh@mail.com</h2>
				<h2>(902) 565 2740</h2>
			</div>
		</div>
		</div>
	);
}

function FoodBank(){
	return(
		<div className="container">
		<div className="row">
			<div className="col">
				<h1>The Glace Bay Food Bank</h1>
				<h4>This was a project assigned to myself and a team of other students at NSCC. We had to develop a website for a local foodbank. While I helped create the design of the site, my main responsibility was to make the site mobile friendly</h4>
				<a href="http://glacebayfoodbank.seaside.ns.ca" className="btn btn-primary">Check it out</a>
			</div>
		</div>
		</div>
	);
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {tab : 0};
		
		this.changeTab = this.changeTab.bind(this);
	}
	
	changeTab(num){
		this.setState({tab : num});
	}
	
	render() {
		return (
			<div id="main" className="container-fluid">
			<div className="row">
				<div className="col">
					<h1>Marsh Media</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-2 bg-primary text-white">
					<ul className="nav flex-column">
						<li className={this.state.tab === 0 ? "nav-item select" : "nav-item"} onClick={() => this.changeTab(0)} >About Myself</li>
						<li className={this.state.tab === 1 ? "nav-item select" : "nav-item"} onClick={() => this.changeTab(1)}>Glace Bay Food Bank</li>
					</ul>
				</div>
				<div id="main" className="col-lg-10 bg-secondary text-white">
					{this.state.tab === 0 ? <About /> : null}
					{this.state.tab === 1 ? <FoodBank /> : null}
				</div>
			</div>
			</div>
		);
	}
}

export default App;
