import React, {Component} from "react";


const pyramidify = (str) => {
	let pyramidString = "";
	if (str === "") {
		pyramidString = "";
		return "";
	} else {
		//for (let i = 0; i < str.length; i++) {
		for (let i = str.length -1; i >= 0; i--) {
			if (str !== "") {
				pyramidString = pyramidString + str.slice(i) + "\n";
			}
		}
		return pyramidString;
	}
};

class Pyramid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: props.input
		};

		//this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		if (nextProps.input !== this.state.input) {
			this.setState({input: nextProps.input});
		}
	}

	render() {
		return (
			<>
				<div>Pyramid</div>
				<textarea
					rows="10"
					cols="50"
					value={pyramidify(this.state.input)}
					className="pyramid_textarea passive_textarea"
				>
			</textarea>
			</>
		);
	}
};

export default Pyramid;
