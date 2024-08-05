"use client";

import Card from "./Card";

const images = [
	{
		icon: "01hero.jpg",
		title: "Hero One",
		year: "2024",
		type: "Adventure",
	},
	{
		icon: "02hero.jpg",
		title: "Hero Two",
		year: "2023",
		type: "Mystery",
	},
	{
		icon: "03hero.jpg",
		title: "Hero Three",
		year: "2022",
		type: "Sci-Fi",
	},
	{
		icon: "04hero.jpg",
		title: "Hero Four",
		year: "2021",
		type: "Fantasy",
	},
	{
		icon: "05hero.jpg",
		title: "Hero Five",
		year: "2020",
		type: "Drama",
	},
];

const CardScrollSection = () => {
	return (
		<section className="relative flex flex-col gap-[10vh] py-[10vh]">
			{images.map((img, idx) => (
				<Card
					key={idx}
					imgUrl={`/${img.icon}`}
					title={img.title}
					year={img.year}
					type={img.type}
				/>
			))}
		</section>
	);
};

export default CardScrollSection;
