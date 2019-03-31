import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton, Menu, MenuItem, ClickAwayListener } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

import DoneAllIcon from '@material-ui/icons/DoneAll';

const styles = {
	header: {
		marginBottom: 20
	},
	title: {
		marginLeft: 20,
		flexGrow: 1
	}
};

class Header extends Component {
	state = {
		anchorEl: null,
		open: false
	};

	menuOpen = (e) => {
		this.setState({
			anchorEl: e.currentTarget,
			open: true
		});
	};

	menuClose = () => {
		this.setState({
			anchorEl: null,
			open: false
		});
	};

	render() {
		const anchorEl = this.state.anchorEl;

		return (
			<AppBar position="static" style={styles.header}>
				<Toolbar>
					<Badge color="secondary" badgeContent={this.props.todoList}>
						<DoneAllIcon />
					</Badge>

					<Typography variant="h6" color="inherit" style={styles.title}>
						Todo List {this.props.todoList}
					</Typography>


					<IconButton color="inherit" onClick={(e) => this.props.checkAll()}>
						<CheckBoxOutlinedIcon />
					</IconButton>

					<IconButton color="inherit" onClick={(e) => this.menuOpen(e)}>
						<MoreVertIcon />
					</IconButton>

					<ClickAwayListener onClickAway={this.menuClose}>
						<Menu anchorEl={anchorEl} open={this.state.open} onClose={this.menuClose}>
							<MenuItem
								onClick={() => {
									this.props.clearAll();
									this.menuClose();
								}}
							>
								Clear All Done
							</MenuItem>
						</Menu>
					</ClickAwayListener>

				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
