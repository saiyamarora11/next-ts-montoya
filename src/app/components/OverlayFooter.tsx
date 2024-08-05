"use client";

type OverlayFooterProps = {
	title: string;
};

const OverlayFooter = ({ title }: OverlayFooterProps) => {
	return (
		<div className="overlay-footer">
			<button className="tag-overlay">2024</button>
			<h1 className="overlay-title-style">{title}</h1>
			<span className="tag-overlay">PHOTO</span>
		</div>
	);
};

export default OverlayFooter;
