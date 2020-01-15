import * as React from "react";

import { ISvgProps } from "./index";

export const Coins = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 18 * 1.5 : 18}
		height={size === "large" ? 18 * 1.5 : 18}
		viewBox="0 0 18 18"
		className={className}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12.068 6.857l-.204.002V2.357C11.864.81 8.88 0 5.932 0 2.984 0 0 .81 0 2.357v8.572c0 1.547 2.984 2.357 5.932 2.357.069 0 .136-.004.204-.004v2.36C6.136 17.19 9.12 18 12.068 18 15.016 18 18 17.19 18 15.643V9.214c0-1.547-2.984-2.357-5.932-2.357zm-6.136-6c3.121 0 5.113.889 5.113 1.5 0 .612-1.992 1.5-5.113 1.5S.818 2.97.818 2.357c0-.611 1.992-1.5 5.114-1.5zM.818 3.613c1.088.726 3.11 1.101 5.114 1.101s4.025-.375 5.113-1.101V4.5c0 .612-1.992 1.5-5.113 1.5S.818 5.112.818 4.5zm0 2.143c1.088.726 3.11 1.101 5.114 1.101s4.025-.375 5.113-1.101v.887c0 .089-.054.178-.118.255-1.742.125-3.355.538-4.192 1.222a15.38 15.38 0 0 1-.803.023c-3.122 0-5.114-.889-5.114-1.5zm0 2.143C1.906 8.625 3.928 9 5.932 9l.227-.003a1.16 1.16 0 0 0-.023.217v1.068c-.068 0-.135.004-.204.004-3.122 0-5.114-.889-5.114-1.5zm5.114 4.53c-3.122 0-5.114-.889-5.114-1.5v-.888c1.088.727 3.11 1.102 5.114 1.102.069 0 .136-.003.204-.004v1.285c-.068.002-.135.005-.204.005zm6.136 4.714c-3.121 0-5.113-.889-5.113-1.5v-.887c1.088.726 3.108 1.101 5.113 1.101s4.026-.375 5.114-1.101v.887c0 .611-1.992 1.5-5.114 1.5zm0-2.143c-3.121 0-5.113-.888-5.113-1.5v-.887c1.088.726 3.108 1.101 5.113 1.101s4.026-.375 5.114-1.101v.887c0 .612-1.992 1.5-5.114 1.5zm0-2.143c-3.121 0-5.113-.888-5.113-1.5v-.887c1.088.726 3.108 1.101 5.113 1.101s4.026-.375 5.114-1.101v.887c0 .612-1.992 1.5-5.114 1.5zm0-2.143c-3.121 0-5.113-.888-5.113-1.5 0-.611 1.992-1.5 5.113-1.5s5.114.889 5.114 1.5c0 .612-1.992 1.5-5.114 1.5z" />
	</svg>
);
