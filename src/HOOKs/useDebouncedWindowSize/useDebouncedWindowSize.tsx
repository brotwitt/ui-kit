import * as React from "react";

const getSize = () => {
	return {
		width:
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth,
		height:
			window.innerHeight ||
			document.documentElement.clientHeight ||
			document.body.clientHeight
	};
};

export function useDebouncedWindowSize(delay: number = 150) {
	const [windowSize, setWindowSize] = React.useState(getSize);

	React.useEffect(() => {
		let timeoutId: number;

		const resizeListener = () => {
			clearTimeout(timeoutId);

			timeoutId = window.setTimeout(
				() => setWindowSize(getSize()),
				delay
			);
		};

		window.addEventListener("resize", resizeListener);

		return () => {
			window.removeEventListener("resize", resizeListener);
		};
	}, []);

	return windowSize;
}
