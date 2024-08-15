"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Bars2Icon } from "@heroicons/react/24/solid";

const Header = () => {
	return (
		<header className="header">
			<div className="flex items-center">
				<div className="relative !h-14 !w-14">
					<Image src={Logo} alt="Logo" fill objectFit="contain" />
				</div>
			</div>
			<div className="flex items-center space-x-8 text-sm">
				<span className="hidden sm:block">Menu</span>
				<button>
					<Bars2Icon className="size-6 text-white" />
				</button>
			</div>
		</header>
	);
};

export default Header;
