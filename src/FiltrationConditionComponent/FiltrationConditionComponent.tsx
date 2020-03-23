import cn from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import * as React from "react";
import { FilterDetails } from "../FilterDetails";
import { FilterWrapperContext } from "../FilterWrapper";
import { IconSvg } from "../IconSvg";
import { FiltrationConditionComponentContext } from "./FiltrationConditionComponentContext";
import { CallbackProps, StateProps } from "./types";

import { withOutsideClick } from "../HOCs";
import "./FiltrationConditionComponent.scss";

type Props = StateProps & CallbackProps;

const WithOutsideClickFilterDetails = withOutsideClick(FilterDetails);

export const FiltrationConditionComponent: React.FC<Props> = ({
	filterablePropertyName,
	filtrationMethodName,
	filtrationMethodParametersComponent,
	linkedConditionComponent,
	state,
	helpComponent,
	editorComponent,
	onConditionStateToggle,
	withAlert,
	onConditionCopy,
	onConditionRemove
}) => {
	const refContent = React.createRef<HTMLDivElement>();
	const [popoverFilterAction, setPopoverFilterAction] = useState<
		React.ReactNode
	>(null);
	const [popoversChildren, setPopoversChildren] = useState<React.ReactNode>(
		null
	);
	const [showPopover, setShowPopover] = useState(false);
	const context = useContext(FilterWrapperContext);
	const shouldRerenderBrackets = useRef(false);

	useEffect(
		() => {
			if (context) {
				if (shouldRerenderBrackets.current) {
					context.rerenderBrackets();
				} else {
					shouldRerenderBrackets.current = true;
				}
			}
		},
		[showPopover, filtrationMethodName]
	);

	const renderPopover = (
		children: React.ReactNode,
		filterAction: React.ReactNode,
		shoudShowSegment: boolean
	) => {
		setPopoverFilterAction(filterAction);
		setPopoversChildren(children);
		setShowPopover(shoudShowSegment);
	};

	const onConditionCopyClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onConditionCopy();
	};

	const onConditionRemoveClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onConditionRemove();
	};

	const editModeContent = (
		<WithOutsideClickFilterDetails
			onClickOutside={onConditionStateToggle}
			helpCaption={filterablePropertyName}
			helpComponent={helpComponent}
			editorComponent={editorComponent}
			onClose={onConditionStateToggle}
			viewMode="edit"
		/>
	);

	return (
		<FiltrationConditionComponentContext.Provider value={renderPopover}>
			<li
				className={cn("kit-filtration-condition", {
					"kit-filtration-condition_edit": state === "edit"
				})}
			>
				<div
					className={cn("kit-filtration-condition__item-text", {
						"kit-filtration-condition__item-text_edit":
							state === "edit",
						"kit-filtration-condition__item-text_linked-condition-edit":
							state === "linkedConditionEdit",
						"kit-filtration-condition__item-text_read-only":
							state === "readOnly",
						"kit-filtration-condition__item-text_shaded":
							state === "shaded",
						"kit-filtration-condition__item-text_view":
							state === "view"
					})}
				>
					<div className="kit-filtration-condition__drag-and-drop" />
					<div
						ref={refContent}
						className="kit-filtration-condition__content"
						onClick={onConditionStateToggle}
					>
						<b>{filterablePropertyName}</b>
						{filtrationMethodName && (
							<span
								className={cn({
									"kit-filtration-condition_with-alert": withAlert
								})}
							>
								{filtrationMethodName}
							</span>
						)}
						{filtrationMethodParametersComponent}
					</div>
					<button
						type="button"
						className="kit-filtration-condition__copy"
						onClick={onConditionCopyClick}
					>
						<IconSvg type="duplicate" />
					</button>
					<button
						type="button"
						className="kit-filtration-condition__remove"
						onClick={onConditionRemoveClick}
					>
						<IconSvg type="trash" />
					</button>
					{state === "edit" && editModeContent}
				</div>
				{showPopover && (
					<div className="kit-filtration-condition__popover">
						{popoverFilterAction}
						{popoversChildren}
					</div>
				)}
				{linkedConditionComponent}
			</li>
		</FiltrationConditionComponentContext.Provider>
	);
};
