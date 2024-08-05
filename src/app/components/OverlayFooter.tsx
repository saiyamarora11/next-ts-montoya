"use client";

type OverlayFooterProps = {
	title: string;
};

const OverlayFooter = ({ title }: OverlayFooterProps) => {
	return (
		<div className="overlay-footer">
			<button className="tag-overlay">2024</button>
			<h1 className="text-7xl font-bold">{title}</h1>
			<span className="tag-overlay">PHOTO</span>
		</div>
	);
};

export default OverlayFooter;