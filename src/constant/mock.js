export const FooterSiteMap = [
	{
		headline: "Get In Touch",
		dataList: [
			{
				slug: "/about-us",
				content: "About Us",
			},
			{
				slug: "/careers",
				content: "Careers",
			},
			{
				slug: "/press-release",
				content: "Press Releases",
			},
			{
				slug: "/blog",
				content: "Blog",
			},
		],
	},
	{
		headline: "Connections",
		dataList: [
			{
				slug: "https://fb.com",
				content: "Facebook",
			},
			{
				slug: "/careers",
				content: "Twitter",
			},
			{
				slug: "/press-release",
				content: "Instagram",
			},
			{
				slug: "/blog",
				content: "Youtube",
			},
			{
				slug: "/blog",
				content: "LinkedIn",
			},
		],
	},
	{
		headline: "Earnings",
		dataList: [
			{
				slug: "/about-us",
				content: "Become an Affiliate",
			},
			{
				slug: "/careers",
				content: "Advertise your product",
			},
			{
				slug: "/press-release",
				content: "Sell on Market",
			},
		],
	},
	{
		headline: "Account",
		dataList: [
			{
				slug: "/about-us",
				content: "Your account",
			},
			{
				slug: "/careers",
				content: "Returns Centre",
			},
			{
				slug: "/press-release",
				content: "100 % purchase protection",
			},
			{
				slug: "/blog",
				content: "Chat with us",
			},
			{
				slug: "/blog",
				content: "Help",
			},
		],
	},
];

export const productTags = [
	"Cherries",
	"Meat",
	"Seo tag",
	"Fish",
	"Seo tag",
	"Fresh food",
	"Lemons",
	"Beans",
	"Carrots",
	"Apples",
	"Garlic",
	"Mushrooms",
	"Tomatoes",
	"Chilli peppers",
	"Broccoli",
	"Watermelons",
	"Oranges",
	"Bananas",
	"Grapes",
];

export const getProductList = (count = 10) => {
	const listProduct = [];

	for (let index = 0; index < count / 2; index++) {
		const autoId = Math.floor(1000 + Math.random() * 9000);
		const originalPrice = Math.floor(1000 + Math.random() * 9000);
		const stock = Math.random(Math.random() * 500);
		const imgUrl = "https://picsum.photos/400";
		listProduct.push({
			autoId,
			slug: String(`Lorem ipsum dolor sit amet ${autoId}`).split(" ").join("-"),
			SKU: Math.floor(1000 + Math.random() * 9000),
			productName: `Lorem ipsum dolor sit amet ${index}`,
			originalPrice: {
				formatted: `${originalPrice} USD`,
				amount: originalPrice,
			},
			discountedPrice: {
				formatted: `0 USD`,
				amount: 0,
			},
			isPromotion: false,
			productDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel quam at arcu porttitor luctus ut quis metus. Aenean pulvinar a est vitae lacinia. Cras sit amet tempus ex. Etiam scelerisque cursus quam, ac porttitor leo dapibus at. Suspendisse potenti. Curabitur vulputate, justo id pharetra rutrum, risus mi faucibus nunc, sit amet pulvinar lorem lorem non massa. Morbi feugiat vel nulla id ullamcorper. Nullam fermentum eu tortor ac laoreet",
			rating: Math.random(Math.random() * 6),
			shipping: {
				isFreeShip: Math.random() < 0.5,
				shippingFee: {
					amount: 10,
					formatted: "10 USD",
				},
				deliveryTimeContent: "Delivery in 1 day",
				deliveryBy: "Europe ",
			},
			stock: {
				isInstock: stock === 0,
				amount: stock,
				formatted: `${stock} pcs`,
			},
			farm: {
				name: "Farm name",
			},
			fresheness: "New ",
			imgUrl,
		});
	}
	for (let index = count / 2; index < count; index++) {
		const originalPrice = Math.floor(1000 + Math.random() * 9000).toFixed();
		const stock = Math.random(Math.random() * 500);
		const autoId = Math.floor(1000 + Math.random() * 9000);
		const discountedPrice = (Math.random() * originalPrice).toFixed(2);
		const imgUrl = "https://picsum.photos/400";
		listProduct.push({
			autoId,
			SKU: Math.floor(1000 + Math.random() * 9000),
			slug: String(`Lorem ipsum dolor sit amet ${autoId}`).split(" ").join("-"),
			productName: `Lorem ipsum dolor sit amet ${index}`,
			originalPrice: {
				formatted: `${originalPrice} USD`,
				amount: originalPrice,
			},
			discountedPrice: {
				formatted: `${(originalPrice - discountedPrice).toFixed(2)} USD`,
				amount: (originalPrice - discountedPrice).toFixed(2),
			},
			isPromotion: true,
			productDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel quam at arcu porttitor luctus ut quis metus. Aenean pulvinar a est vitae lacinia. Cras sit amet tempus ex. Etiam scelerisque cursus quam, ac porttitor leo dapibus at. Suspendisse potenti. Curabitur vulputate, justo id pharetra rutrum, risus mi faucibus nunc, sit amet pulvinar lorem lorem non massa. Morbi feugiat vel nulla id ullamcorper. Nullam fermentum eu tortor ac laoreet",
			rating: Math.round(Math.random() * 6),
			shipping: {
				isFreeShip: Math.random() < 0.5,
				shippingFee: {
					amount: 10,
					formatted: "10 USD",
				},
				deliveryTimeContent: "Delivery in 1 day",
				deliveryBy: "Europe ",
			},
			stock: {
				isInstock: !(stock === 0),
				amount: stock,
				formatted: `${stock} pcs`,
			},
			farm: {
				name: "Farm name",
			},
			fresheness: "New ",
			imgUrl,
		});
	}

	return listProduct;
};
