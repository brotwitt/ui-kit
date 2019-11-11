import * as React from "react";
import { Utils } from "src/FlatSelect/modules";
import { SelectDropMain, Textbox } from "..";
import {
	SelectionMode,
	SelectSearchListProps,
	SelectSearchListState
} from "./types";

export class SelectSearchList extends React.Component<
	SelectSearchListProps,
	SelectSearchListState
> {
	public state = {
		minimized: false
	};

	public render() {
		let clearFilter: JSX.Element = React.createElement("");
		let headerAddition: JSX.Element = React.createElement("");

		if (this.props.headerInfo) {
			if (this.props.clearFilterHandler) {
				clearFilter = (
					<span
						className="selectR-module-reset link-action link-action_grey"
						onClick={this.props.clearFilterHandler}
					>
						<span className="icon_close" />
						{this.props.resetFilterCaption}
					</span>
				);
			}
			headerAddition = (
				<div className="selectR-drop-module">
					<span className="selectR-module-state">
						{this.props.headerInfo}
					</span>
					{clearFilter}
				</div>
			);
		}

		let selectedComponents: JSX.Element = React.createElement("");
		let applyButton: JSX.Element = React.createElement("");

		if (
			this.props.selectionMode === SelectionMode.Multiple &&
			this.props.makeSelectedComponents
		) {
			const selectedChildren = this.props.makeSelectedComponents();
			if (selectedChildren.length !== 0) {
				let choisesClasses = "selectR-choices selectR-choices-inline";
				if (this.state.minimized) {
					choisesClasses =
						choisesClasses + " selectR-choices-inline-minimized";
				}
				const minimizeButtonClasses =
					"selectR-horizontal-extension-image " +
					(this.state.minimized
						? "selectR-horizontal-extension-image-open"
						: "selectR-horizontal-extension-image-close");
				selectedComponents = (
					<div className="selectR-drop-module selectR-drop-module-items">
						<ul className={choisesClasses}>{selectedChildren}</ul>
						<div
							className="selectR-horizontal-extension-button"
							onClick={this.onToggleChoices}
						>
							<div className={minimizeButtonClasses} />
						</div>
					</div>
				);
				applyButton = (
					<div className="selectR-drop-module">
						<button
							type="button"
							className="button button_blue button_middle button_primary"
							onClick={this.onApply}
						>
							{this.props.closeCaption}
						</button>
					</div>
				);
			}
		}

		return (
			<div className={this.props.className}>
				<div className="selectR-drop-header">
					<div className="selectR-search">
						<span className="selectR-input">
							<Textbox
								notFormControl={true}
								value={this.props.searchTextValue}
								onChange={this.props.onInputChange}
								shouldTextBeSelected={
									this.props.shouldSearchTextBeSelected
								}
							/>
						</span>
					</div>
					{headerAddition}
					{selectedComponents}
					{applyButton}
				</div>
				<SelectDropMain onScroll={this.props.onScroll}>
					{this.props.children}
				</SelectDropMain>
			</div>
		);
	}

	private onApply = () => {
		Utils.Instance.triggerEvent(document.body, "click");
	};

	private onToggleChoices = () => {
		this.setState({ minimized: !this.state.minimized });
	};
}
