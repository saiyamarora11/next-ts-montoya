"use client";
import React from "react";
import { ShareIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="flex w-full items-center justify-between bg-black p-4 text-white">
			<div
				className="flex cursor-pointer items-center space-x-4"
				onClick={scrollToTop}>
				<span>
					<ChevronUpIcon className="size-5 text-white" />
				</span>
				<span>Back Top</span>
			</div>
			<div>2024 © ClaPat. All rights reserved.</div>
			<div className="flex items-center space-x-4">
				<span>Follow Us</span>
				<span>
					<ShareIcon className="size-5 text-white" />
				</span>
			</div>
		</footer>
	);
};

export default Footer;
