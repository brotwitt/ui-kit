import * as React from "react";

import { ISvgProps } from "./index";

export const PercentRound = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 18 * 1.5 : 18}
		height={size === "large" ? 18 * 1.5 : 18}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 18 18"
	>
		<path d="M12.717 4.622L4.62 12.715a.468.468 0 1 0 .663.663l8.097-8.093a.468.468 0 1 0-.663-.663zm2.65-1.986A8.947 8.947 0 0 0 9 0a8.946 8.946 0 0 0-6.367 2.636c-3.51 3.51-3.51 9.22 0 12.728A8.947 8.947 0 0 0 9 18a8.947 8.947 0 0 0 6.367-2.636c3.51-3.509 3.51-9.22 0-12.728zm-.663 12.065A8.017 8.017 0 0 1 9 17.063 8.016 8.016 0 0 1 3.296 14.7C.151 11.557.151 6.443 3.296 3.3A8.016 8.016 0 0 1 9 .938c2.154 0 4.18.838 5.704 2.36 3.145 3.145 3.145 8.26 0 11.403zm-3.265-4.658c-.373 0-.723.145-.987.408-.263.264-.409.614-.409.987s.145.722.41.986c.263.263.613.408.986.408s.723-.145.986-.408a1.396 1.396 0 0 0-.986-2.38zm.323 1.718a.468.468 0 0 1-.646 0 .453.453 0 0 1 0-.647.454.454 0 0 1 .646 0 .458.458 0 0 1 0 .647zM6.561 7.957c.373 0 .723-.145.987-.409.263-.263.408-.613.408-.986 0-.372-.145-.722-.408-.986-.264-.263-.614-.408-.987-.408s-.723.145-.986.408a1.384 1.384 0 0 0-.409.986c0 .373.145.723.408.986.264.264.614.409.987.409zm-.323-1.718a.454.454 0 0 1 .647 0 .455.455 0 0 1 0 .647.467.467 0 0 1-.647 0 .453.453 0 0 1-.134-.324c0-.122.047-.237.134-.323z" />
	</svg>
);
