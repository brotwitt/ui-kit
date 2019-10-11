import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export class SegmentButtonExpand extends React.Component<Props> {
	public render() {
		const { children, onClick, isOpen } = this.props;

		return (
			<>
				<button
					className={cn("kit-segment-button-expand", {
						"kit-segment-button-expand_open": isOpen
					})}
					type="button"
					onClick={onClick}
				>
					<IconSvg type="segment-expand" />
				</button>
				{isOpen && (
					<div className="kit-segment-button-expand__popover">
						{children}
					</div>
				)}
			</>
		);
	}
}
