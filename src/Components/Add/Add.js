import React, { Component } from 'react';

import { Paper, InputBase, IconButton } from '@material-ui/core';

import PlayListAddIcon from '@material-ui/icons/PlaylistAdd';

const styles = {
	input: {
		flexGrow: 1,
		padding: 10
	},
	container: {
		display: 'flex'
	}
};

class Add extends Component {
	input = React.createRef();

	render() {
		return (
			<Paper elevation={1} style={styles.container}>
				<InputBase
					style={styles.input}
					inputRef={this.input}
					placeholder="New Task"
					onKeyDown={(e) => {
						if (e.which === 13) {
							this.props.add(this.input.current.value);
							this.input.current.value = '';
							this.input.current.focus();
						}
					}}
				/>
				<IconButton
					onClick={() => {
						this.props.add(this.input.current.value);
						this.input.current.value = '';
						this.input.current.focus();
					}}
				>
					<PlayListAddIcon />
				</IconButton>
			</Paper>
		);
	}
}

export default Add;
