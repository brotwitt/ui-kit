import * as React from "react";
import { SelectDropMain } from "..";
import { neutralZoneClass } from "../../../HOCs";
import { Textbox } from "../../../Textbox";
import { DropdownContext } from "../Dropdown";
import { SelectionMode, SelectSearchListProps } from "./types";

export const SelectSearchList: React.FC<SelectSearchListProps> = ({
	headerInfo,
	clearFilterHandler,
	resetFilterCaption,
	selectionMode,
	makeSelectedComponents,
	closeCaption,
	className,
	searchTextValue,
	onInputChange,
	shouldSearchTextBeSelected,
	onScroll,
	children,
	getChildRef
}) => {
	const [minimized, setMinimized] = React.useState<boolean>(false);
	const context = React.useContext(DropdownContext);

	let clearFilter: JSX.Element = React.createElement("div");
	let headerAddition: JSX.Element = React.createElement("div");
	let selectedComponents: JSX.Element = React.createElement("div");
	let applyButton: JSX.Element = React.createElement("div");

	const onToggleChoices = () => {
		setMinimized(prevMinimized => !prevMinimized);
	};

	const onCloseDropdown = () => {
		if (context) {
			context.onCloseDropdown();
		}
	};

	const getRefDropMain = (ref: React.RefObject<HTMLElement>) => {
		if (getChildRef) {
			getChildRef(ref);
		}
	};

	if (headerInfo) {
		if (clearFilterHandler) {
			clearFilter = (
				<span
					className="kit-selectR-module-reset link-action link-action_grey"
					onClick={clearFilterHandler}
				>
					<span className="icon_close" />
					{resetFilterCaption}
				</span>
			);
		}
		headerAddition = (
			<div className="kit-selectR-drop-module">
				<span className="kit-selectR-module-state">{headerInfo}</span>
				{clearFilter}
			</div>
		);
	}

	if (selectionMode === SelectionMode.Multiple && makeSelectedComponents) {
		const selectedChildren = makeSelectedComponents();
		if (selectedChildren.length !== 0) {
			let choisesClasses =
				"kit-selectR-choices kit-selectR-choices-inline";
			if (minimized) {
				choisesClasses =
					choisesClasses + " kit-selectR-choices-inline-minimized";
			}
			const minimizeButtonClasses =
				"kit-selectR-horizontal-extension-image " +
				(minimized
					? "kit-selectR-horizontal-extension-image-open"
					: "kit-selectR-horizontal-extension-image-close");
			selectedComponents = (
				<div className="kit-selectR-drop-module kit-selectR-drop-module-items">
					<ul className={choisesClasses}>{selectedChildren}</ul>
					<div
						className="kit-selectR-horizontal-extension-button"
						onClick={onToggleChoices}
					>
						<div className={minimizeButtonClasses} />
					</div>
				</div>
			);
			applyButton = (
				<div className="kit-selectR-drop-module">
					<button
						onClick={onCloseDropdown}
						type="button"
						className="button button_blue button_middle button_primary"
					>
						{closeCaption}
					</button>
				</div>
			);
		}
	}

	return (
		<div className={className}>
			<div className="kit-selectR-drop-header">
				<div className="kit-selectR-search">
					<span className="kit-selectR-input">
						<Textbox
							notFormControl={true}
							value={searchTextValue}
							onChange={onInputChange}
							shouldTextBeSelected={shouldSearchTextBeSelected}
							className={neutralZoneClass}
							autoFocus={true}
						/>
					</span>
				</div>
				{headerAddition}
				{selectedComponents}
				{applyButton}
			</div>
			<SelectDropMain getChildRef={getRefDropMain} onScroll={onScroll}>
				{children}
			</SelectDropMain>
		</div>
	);
};
