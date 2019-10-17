import * as React from "react";

import { ISvgProps } from "./index";

export const SegmentEdit = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 10 * 1.5 : 10}
		height={size === "large" ? 10 * 1.5 : 10}
		viewBox="0 0 10 10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={className}
	>
		<g clipPath="url(#clip0)">
			<path
				opacity="0.75"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.61899 0.116144C6.68364 0.180769 6.72393 0.265768 6.73305 0.35672C6.74216 0.447673 6.71953 0.538977 6.66899 0.615144L6.61899 0.677144L2.89899 4.39514C2.98799 4.53514 3.02999 4.65514 3.06699 4.76114C3.10417 4.89611 3.17828 5.01802 3.28099 5.11314C3.37604 5.21524 3.49754 5.28898 3.63199 5.32614C3.74199 5.36514 3.86999 5.41014 4.01699 5.50714C4.03443 5.44655 4.06714 5.39146 4.11199 5.34714L7.34699 2.11214C7.38159 2.0728 7.42389 2.04098 7.47128 2.01864C7.51867 1.9963 7.57014 1.98392 7.62251 1.98226C7.67487 1.98061 7.72702 1.98972 7.77572 2.00902C7.82443 2.02833 7.86866 2.05742 7.90567 2.0945C7.94268 2.13158 7.97169 2.17586 7.99091 2.2246C8.01012 2.27334 8.01913 2.32551 8.01738 2.37787C8.01563 2.43023 8.00316 2.48168 7.98073 2.52903C7.9583 2.57637 7.9264 2.61862 7.88699 2.65314L4.65399 5.88814C4.60941 5.93288 4.55444 5.96586 4.49399 5.98414C4.59399 6.13114 4.63899 6.26014 4.67799 6.37114C4.71457 6.50509 4.78761 6.62626 4.88899 6.72114C4.98356 6.82333 5.10477 6.8971 5.23899 6.93414C5.34199 6.97014 5.45899 7.01114 5.59499 7.09514L9.32299 3.37514C9.39292 3.30665 9.48564 3.26632 9.58342 3.26188C9.68121 3.25743 9.7772 3.28918 9.85306 3.35105C9.92891 3.41292 9.97931 3.50058 9.99461 3.59726C10.0099 3.69394 9.98904 3.79288 9.93599 3.87514L9.88499 3.93714L5.94999 7.86314C5.92447 7.88896 5.89553 7.91117 5.86399 7.92914L5.81399 7.95214L0.666991 9.97214C0.59605 9.99994 0.518646 10.0069 0.443887 9.99219C0.369128 9.97748 0.300123 9.94173 0.244991 9.88914L0.194991 9.82914L0.0699911 9.64814C0.0109486 9.56194 -0.0120222 9.45606 0.00599111 9.35314L0.0269911 9.27714L2.03499 4.18014C2.04832 4.14655 2.06615 4.11493 2.08799 4.08614L2.12399 4.04514L6.05699 0.116144C6.1316 0.041766 6.23264 0 6.33799 0C6.44334 0 6.54439 0.041766 6.61899 0.116144V0.116144ZM2.44599 5.30014L0.993991 8.99214L4.68199 7.54514C4.55403 7.47172 4.4369 7.38085 4.33399 7.27514C4.07099 7.01114 3.99699 6.80014 3.93699 6.63014C3.89199 6.50114 3.86299 6.41614 3.72499 6.27914C3.58699 6.14014 3.50099 6.11114 3.37299 6.06514C3.20299 6.00514 2.99099 5.93114 2.72699 5.66714C2.61565 5.55904 2.52096 5.43502 2.44599 5.29914V5.30014Z"
				fill="currentColor"
			/>
		</g>
		<defs>
			<clipPath id="clip0">
				<rect width="10" height="10" fill="white" />
			</clipPath>
		</defs>
	</svg>
);