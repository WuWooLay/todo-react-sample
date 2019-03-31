import React from 'react';
import ListItems from './ListItems/ListItems';
import { List } from '@material-ui/core';

const Todo = (props) => {
	return (
		<List>
			{props.data.map((task) => (
				<ListItems
				 	key={task.id}
					task={task}
					remove={props.remove}
					done={props.done}
					undo={props.undo}
				/>
			))}
		</List>
	);
};

export default Todo;
