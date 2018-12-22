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

class App extends Component {
	constructor(props){
		super(props);
		this.state = {value : 0};
		
		this.changeTab = this.changeTab.bind(this);
	}
	
	render() {
		return (
			<div className="container-fluid">
			<div className="row">
				<div className="col">
					<h1>Marsh Media</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-2 bg-primary text-white">
					<ul className="nav flex-column">
						<li className="nav-item" >About Myself</li>
						<li className="nav-item" >Glace Bay Food Bank</li>
					</ul>
				</div>
				<div className="col-lg-10 bg-secondary text-white">
					<About />
				</div>
			</div>
			</div>
		);
	}
}

export default App;
