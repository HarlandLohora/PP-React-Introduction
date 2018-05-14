class MainComponent extends React.Component{
	state={
		title: "Learn how to code with Ironhack",
		wallpaper: "http://www.mientrastantoenmexico.mx/wp-content/uploads/2017/08/851807-mexico-city-wallpaper.jpg"
	}
	render(){
		const {title,wallpaper} = this.state;
		return(
			<div>
				<h1>{title}</h1>
				<img src={wallpaper}/>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra in nisi id eleifend. Nullam nec massa egestas, placerat ipsum eu, sollicitudin mauris. In fringilla felis sit amet ipsum pharetra suscipit. Nulla nec lobortis leo. Praesent erat quam, accumsan vel facilisis viverra, sodales tempor neque. Donec non egestas risus. Aliquam vulputate ut sapien eget cursus. Sed sed nisl magna. Quisque et lacinia lectus. Nulla in leo commodo, porttitor dui id, ornare purus. Ut congue lectus ac felis pulvinar, ac volutpat turpis molestie. Duis justo massa, aliquam a lacinia at, sollicitudin eget metus.</p>
				<div className="comments">
					<h2>Comments</h2>
				</div>
				<CommentsComponent/>
			</div>
		);
	}
}

const CommentsComponent = ()=>{
	return (
		<div>
			<div className="form">
				<form>
				<h3>Add your comment</h3>
				<br/>
				<span>Name:</span>
				<br/>
				<input/>
				<br/>
				<span>Description</span>
				<br/>
				<textarea></textarea>
				<br/>
				<br/>
				<button>Comment</button>
				</form>
			</div>
		</div>
	);
}

ReactDOM.render(<MainComponent/>,output)