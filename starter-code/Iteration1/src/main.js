class App extends React.Component{
	state={
		d1 : "Ironhack Founders",
		d2 : "Ironhack México",
		d3 : "IronHack París",
		im : "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4129/s1200/ironhack-campus-mexico-city.png",
		ip : "https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/3440/s1200/campus-spotlight-ironhack-paris.png",
		il : "http://www.elreferente.es/source//noticia/26868/Gonzalo_manrique_ironhack.jpg"
	}

	render(){
		const {im,d2,ip,il,d1,d3} = this.state;
		return (
			<div>
				<div id="main">
					<div className="col">
						<img src={ip}/>
						<p>{d3}</p>
					</div>
					<div className="col">
						<img src={il}/>
						<p>{d1}</p>
					</div>
					<div className="col">
						<img src={im}/>
						<p>{d2}</p>
					</div>	
				</div>	
			</div>
		);
	}
}


ReactDOM.render(<App/>,output);