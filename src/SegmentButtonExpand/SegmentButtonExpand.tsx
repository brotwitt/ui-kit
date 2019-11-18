import cn from "classnames";
import * as React from "react";
import { IconSvg } from "../IconSvg";
import { SegmentButtonExpandProps as Props } from "./types";

import "./SegmentButtonExpand.scss";

export class SegmentButtonExpand extends React.Component<Props> {
	public filterAction = () => {
		const { filterActionCaption, filterActionClick } = this.props;

		return (
			<button
				className="kit-segment-button-expand__button-filter"
				type="button"
				onClick={filterActionClick}
			>
				<IconSvg type="filter" />
				{filterActionCaption}
			</button>
		);
	};

	public render() {
		const { children, onClick, isOpen, filterActionShow } = this.props;

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
				<div
					className={cn("kit-segment-button-expand__popover", {
						"kit-segment-button-expand__popover_show": isOpen
					})}
				>
					{filterActionShow && this.filterAction()}
					{children}
				</div>
			</>
		);
	}
}
