import React from 'react';
import Input from './Input';
import Button from './Button';

export default class Field extends React.Component {
	constructor(props) {
		super();
		this.state = {
			disableButton: true,
		}
	}

	handleChange(event) {
		this.setState({
			disableButton: (event.target.value !== '') ? false : true
		});
	};

	handleReset() {
		this.setState({disableButton: true});
	};

	render() {
		let {disabled} = this.props;
		return (
			<form className="add-to-do-container"
				  onSubmit={this.props.handleSubmit}
				  onReset={e => {this.handleReset(e)}}>
				<Input
					name={'newList'}
					hendleChange={e =>{ this.handleChange(e)}}
					disabled={disabled}
				/>
				<Button
					type="submit"
					value={'add'}
					disabled={this.state.disableButton || disabled}
				/>
			</form>
		)
	}
};
