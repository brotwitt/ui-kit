import cn from "classnames";
import * as React from "react";

import { Input } from "../Input";

import "./FilterConditionSelector.scss";

export type ElementType =
	| "filtrationObjectCategory"
	| "simpleFiltrationObject"
	| "filtrationObjectWithLinkedConditions";


type MenuMode = "filter" | "recent" | "saved" | "examples";


export interface FiltrationObjectHierarchyElement {

	id: string;
	name: string;
	type: ElementType;
	isSelected: boolean;
	hasChildren: boolean;
	getChildren: () => FiltrationObjectHierarchyElement[];
	isExpanded: boolean;
	onSelect: () => void;
	toggleExpand: () => void;
}

interface Props {
	hierarchy: FiltrationObjectHierarchyElement[];

	selectedElement: FiltrationObjectHierarchyElement;
	searchTerm: string;
	onSearchTermChange: (changedSearchTerm: string) => void;
	filterLabel: string;
	recentLabel: string;
	savedLabel: string;
	examplesLabel: string;
	onModeChanged: (selectedMenuMode: MenuMode) => void;

	helpCaption: string;
	helpComponent: React.ReactNode;
	editorComponent: React.ReactNode;

}

export const FilterConditionSelector = (props: Props) => {
	const { editorComponent, helpComponent, helpCaption } = props;

	const {
		// onSearchTermChange,
		onModeChanged,
		filterLabel,
		recentLabel,
		savedLabel,
		examplesLabel
	} = props;

	const renderItem = (
		item: FiltrationObjectHierarchyElement,
		index: number
	) => {
		const {
			isSelected,
			type,
			isExpanded,
			name,
			hasChildren,
			getChildren,
			onSelect,
			toggleExpand
		} = item;

		const isSimpleFiltrationObject = type === "simpleFiltrationObject";

		return (
			<li
				key={index}
				className={cn("kit-filter-condition-selector__hierarchy-item", {
					"kit-filter-condition-selector__hierarchy-item_expanded": isExpanded,
					"kit-filter-condition-selector__hierarchy-item_selected": isSelected,
					"kit-filter-condition-selector__hierarchy-simple-filter": isSimpleFiltrationObject
				})}
			>
				{!isSimpleFiltrationObject && (
					<button
						type="button"
						className="kit-filter-condition-selector__hierarchy-toggle"
						onClick={toggleExpand}
					/>
				)}
				<button
					type="button"
					className="kit-filter-condition-selector__hierarchy-name"
					onClick={onSelect}
				>
					{name}
				</button>

				{isExpanded && hasChildren && (
					<ul className="kit-filter-condition-selector__hierarchy-children">
						{getChildren().map(renderItem)}
					</ul>
				)}
			</li>
		);
	};

	return (
		<div className="kit-filter-condition-selector">
			<div className="kit-filter-condition-selector__wrap">
				<div className="kit-filter-condition-selector__filter-block">
					<Input
						noShadow={true}
						defaultValue={""}
						type="search"
						placeholder="Название акции, группы или кампании"
						// onChange={onSearchTermChange}
					/>
					<div className="kit-filter-condition-selector__filter-btn-block">
						<div className="kit-filter-condition-selector__filter-btn-wrap">
							<button
								type="button"
								className={cn(
									"kit-filter-condition-selector__filter-btn",
									{
										"kit-filter-condition-selector__filter-btn_active": onModeChanged("filter")
									}
								)}
								// onClick={}
								// onClick={(e) => {
								// 	e.preventDefault();
								// 	console.log()
								// 	//onModeChanged("filter")
								//
								// }}
							>
								{filterLabel}
							</button>
							<button
								type="button"
								className={cn(
									"kit-filter-condition-selector__filter-btn",
									{
										"kit-filter-condition-selector__filter-btn_active": onModeChanged("filter")
									}
								)}
							>
								{recentLabel}
							</button>
							<button
								type="button"
								className={cn(
									"kit-filter-condition-selector__filter-btn",
									{
										"kit-filter-condition-selector__filter-btn_active": onModeChanged("saved")
									}
								)}
							>
								{savedLabel}
							</button>
						</div>
						<button
							type="button"
							className={cn(
								"kit-filter-condition-selector__filter-btn",
								{
									"kit-filter-condition-selector__filter-btn_active": onModeChanged("examples")
								}
							)}
						>
							{examplesLabel}
						</button>
					</div>
				</div>

				<ul className="kit-filter-condition-selector__hierarchy">
					{props.hierarchy.map(renderItem)}
				</ul>
			</div>
			<div className="kit-filter-condition-selector__helper">
				<h2 className="kit-filter-condition-selector__help-caption-title">
					{helpCaption}
				</h2>
				{editorComponent && (
					<div className="kit-filter-condition-selector__editor-wrapper">
						{editorComponent}
					</div>
				)}
				{helpComponent && (
					<div className="kit-filter-condition-selector__help-wrapper-text">
						{helpComponent}
					</div>
				)}
			</div>
		</div>
	);
};
