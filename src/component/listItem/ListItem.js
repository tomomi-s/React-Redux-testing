import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({title, desc}) => {

	return (
		 title && 
			(
				<div data-test="listItemComponent">
					<h2 data-test="listItemTitle">{title}</h2>
					<div data-test="listItemDesc">{desc}</div>
					
				</div>
			)
		
	)
}

ListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string
}

export default ListItem