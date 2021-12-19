import React from "react";

function LinkList({ list, headline }) {
	return (
		<>
			<div className="list-link">
				{headline && <h3 className="list-link__headline">{headline}</h3>}
 			</div>
		</>
	);
}

export default LinkList;
