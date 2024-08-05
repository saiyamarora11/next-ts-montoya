"use client";

import Card from "./Card";

const images = [
	{
		icon: "01hero.jpg",
		title: "WHITE LINERS",
	},
	{
		icon: "02hero.jpg",
		title: "GREEN AUDIO",
	},
	{
		icon: "03hero.jpg",
		title: "NANOTECH",
	},
	{
		icon: "04hero.jpg",
		title: "COOL DUDE",
	},
	{
		icon: "05hero.jpg",
		title: "SPHERE DIGITAL",
	},
];

const CardScrollSection = () => {
	return (
		<section className="relative flex flex-col gap-[10vh] py-[10vh]">
			{images.map((img, idx) => (
				<Card key={idx} imgUrl={`/${img.icon}`} title={img.title} />
			))}
		</section>
	);
};

export default CardScrollSection;