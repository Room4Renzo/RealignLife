import { useState, useEffect } from "react";

const Parallax = () => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<section className="Parallax">
			<div
				className="Parallax-Background"
				style={{ transform: `translateY(${offsetY * 0.5}px)` }}
			></div>
		</section>
	);
};

export default Parallax;
