<List className={classes.root}>
	{[ 0, 1, 2, 3 ].map((value) => (
		<ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
			<Checkbox checked={this.state.checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
			<ListItemText primary={`Line item ${value + 1}`} />
			<ListItemSecondaryAction>
				<IconButton aria-label="Comments">
					<CommentIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	))}
</List>;
