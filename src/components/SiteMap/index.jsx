import LinkList from "components/LinkList";
import Title from "components/Title";
import React from "react";
import "./style.scss";

function SiteMap({ data }) {
	return (
		<div className="sitemap">
			<Title tag="h2" content="Test" />
			<div className="inner">
				{data?.length > 0 &&
					data.map((item, index) => (
						<div className="sitemap-column" key={index}>
							{item?.dataList?.length > 0 && (
								<LinkList
									className="sitemap__links"
									list={item?.dataList.map((listItem) => ({
										...listItem,
										label: listItem?.content,
									}))}
									headline={item?.headline}
								/>
							)}
						</div>
					))}
			</div>
		</div>
	);
}

export default SiteMap;
