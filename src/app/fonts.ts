import { Six_Caps, Poppins } from "next/font/google";

const sixCaps = Six_Caps({
	subsets: ["latin"],
	weight: ["400"],
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const globalStyles = `
  :root {
    --font-six-caps: ${sixCaps.style.fontFamily};
    --font-poppins: ${poppins.style.fontFamily};
  }
`;

export { sixCaps, poppins };
