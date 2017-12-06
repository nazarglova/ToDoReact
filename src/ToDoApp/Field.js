import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import addNewItem from './../actions/addNewItem';


class Field extends React.Component {
	constructor(props) {
		super();
		this.state = {
			disableButton: true,
		};
	}

	handleChange(event) {
		this.setState({
			disableButton: (event.target.value !== '') ? false : true
		});
	};

	handleReset() {
		this.setState({disableButton: true});
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.addNewItem(this.props.items, e.target.newList.value);
		e.target.reset();
	}

	render() {
		return (
			<form className="add-to-do-container"
				  onSubmit={e => this.handleSubmit(e)}
				  onReset={e => this.handleReset(e)}>
				<input
					name={'newList'}
					onChange={e => this.handleChange(e)}
					disabled={!this.props.canAddItem}
				/>
				<button
					type="submit"
					disabled={this.state.disableButton || !this.props.canAddItem}
				>
					add
				</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		canAddItem: state.items.canAddItem
	}
};
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addNewItem,
	}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Field);