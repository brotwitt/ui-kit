import * as React from "react";
import { OverflowVisibleContainer } from "../../../OverflowVisibleContainer";
import { FilterAction } from "../../types";

import "./FilterActionsPopover.scss";

interface FilterActionsPopoverProps {
	filterActions: (FilterAction | any)[];
	filterActionsCaption: string;
}

interface State {
	isOpen: boolean;
}

const isFilterAction = (object: any): boolean => {
	const filterAction = object as FilterAction;
	return filterAction["key"] !== undefined
		&& filterAction["onClick"] !== undefined
		&& filterAction["name"] !== undefined;
}

export class FilterActionsPopover extends React.Component<
	FilterActionsPopoverProps,
	State
	> {
	public refElement = React.createRef<HTMLElement>();

	public state = {
		isOpen: false
	};

	public handleClickFilter = () => {
		this.setState(state => ({ isOpen: !state.isOpen }));
	};

	public hideListPopover = () => {
		this.setState(state => ({ ...state, isOpen: false }));
	}

	public render() {
		const { filterActions, filterActionsCaption } = this.props;

		const { isOpen } = this.state;

		return filterActions && filterActions.length ? (
			<div className="kit-filter-actions-popover">
				<span
					ref={this.refElement}
					className="kit-filter-actions-popover__title"
					onClick={this.handleClickFilter}
				>
					{filterActionsCaption}
				</span>
				{isOpen && (
					<OverflowVisibleContainer parentRef={this.refElement} onNeutralZoneClick={this.hideListPopover}>
						<ul className="kit-filter-actions-popover__list">
							{
								filterActions.map((item, index) => {
									if (isFilterAction(item)) {
										const { key, onClick, name } = item as FilterAction;
										return (
											<li
												className="kit-filter-actions-popover__item"
												key={key}
												onClick={() => {
													this.hideListPopover();
													onClick();
												}}
											>
												{name}
											</li>
										);
									}
									return (
										<li
											className="kit-filter-actions-popover__item"
											key={`kit-filter-actions-popover__item-key-${index}`}
											onClick={() => setTimeout(this.hideListPopover, 150)}
										>
											{item}
										</li>
									);
								})
							}
						</ul>
					</OverflowVisibleContainer>
				)}
			</div>
		) : null;
	}
}
