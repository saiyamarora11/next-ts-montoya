"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";

const Header = () => {
	return (
		<header className="sticky top-0 z-[99] flex w-full items-center justify-between bg-black px-10 py-4 text-white">
			<div className="flex items-center">
				<div className="relative !h-12 !w-12">
					<Image src={Logo} alt="Logo" fill objectFit="contain" />
				</div>
			</div>
			<div className="text-md flex items-center space-x-4">
				<span>Menu</span>
				<button>
					<Bars2Icon className="size-6 text-white" />
				</button>
			</div>
		</header>
	);
};

export default Header;
