import React from 'react';

import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	isCheck: {
		textDecoration: 'line-through'
	}
};

const ListItems = (props) => {
	return (
		<ListItem>
			<Checkbox
				checked={props.task.status}
				onChange={() => {
					props.task.status ? props.undo(props.task.id) : props.done(props.task.id);
				}}
			/>

			<ListItemText primary={`${props.task.name}`} style={props.task.status ? styles.isCheck : {}} />

			<ListItemSecondaryAction>
				<IconButton onClick={() => props.remove(props.task.id)}>
					<DeleteIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default ListItems;
