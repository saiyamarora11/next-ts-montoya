import Card from "@/app/components/Card";
import HeroSection from "@/app/components/HeroSection";

const images = [
	"img1.jpg",
	"img2.jpg",
	"img3.jpg",
	"img4.jpg",
	"img5.jpg",
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center">
			<HeroSection />
			<section className="relative flex flex-col gap-[10vh] py-[10vh]">
				{images.map((img, idx) => (
					<Card key={idx} imgUrl={`/${img}`} />
				))}
			</section>
		</main>
	);
}
