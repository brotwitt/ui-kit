import cn from "classnames";
import * as React from "react";
import { FilterDetails } from "../FilterDetails/FilterDetails";
import { KeysCodes } from "../utils/constants";
import {
	FilterConditionSelectorContext,
	IProps
} from "./FilterConditionSelectorContext";
import { IMenuModeMap, MenuMode, Props } from "./types";

import { Input } from "../Input";

import { withOutsideClick, WithOutsideClickProps } from "../HOCs";
import { useDebounce } from "../HOOKs";
import { BrowserList } from "../utils/constants";
import { checkBrowser } from "../utils/helpers";
import { ContextWrapper } from "./components";
import "./FilterConditionSelector.scss";
import { setNextFocus } from "./utils";

const FilterConditionSelector: React.FC<
	Props & WithOutsideClickProps
> = props => {
	const {
		childRenderer,
		onModeChanged,
		onSearchTermChange,
		filterLabel,
		recentLabel,
		savedLabel,
		examplesLabel,
		menuMode,
		rootIds,
		notFoundMessage,
		helpCaption,
		helpComponent,
		editorComponent,
		onConditionStateToggle,
		onNextSelected,
		onPreviousSelected,
		onExpandCurrent,
		setOutsideClickRef
	} = props;

	const searchRef = React.createRef<Input>();
	const listRef = React.createRef<HTMLUListElement>();
	const mainRef = React.useRef<HTMLElement | null>(null);
	const [searchTerm, setSearchTerm] = React.useState(props.searchTerm);
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	let itemsListSearch: HTMLDivElement[] = [];
	let itemListFirstFocus: () => void = () => null;
	let itemListFirstBlur: () => void = () => null;
	let topRect: number = 0;

	React.useEffect(
		() => {
			if (debouncedSearchTerm === "") {
				itemListFirstBlur();
			} else {
				itemListFirstFocus();
			}
		},
		[onSearchTermChange]
	);

	React.useEffect(
		() => {
			onSearchTermChange(debouncedSearchTerm);
		},
		[debouncedSearchTerm]
	);

	React.useEffect(() => {
		const body = document.body;
		const refSelector = mainRef.current;

		setAutoFocusSearchInput();

		if (refSelector) {
			const { top } = refSelector.getBoundingClientRect();
			topRect = top;

			if (body.clientHeight < refSelector.clientHeight + topRect) {
				body.style.height = `${body.clientHeight + topRect}px`;
			}
		}

		return () => {
			body.style.height = "";
		};
	}, []);

	const handleDisableBodyScroll = (e: React.WheelEvent) => {
		if (checkBrowser(BrowserList.Safari)) {
			e.preventDefault();

			const { deltaY } = e;
			const listTree = listRef.current;

			if (listTree) {
				const scroll = listTree.scrollTop;

				listTree.scrollTop = scroll + deltaY;
			}
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
		if (document.activeElement === listRef.current) {
			switch (e.keyCode) {
				case KeysCodes.ArrowUp:
					e.preventDefault();

					const focus = !onPreviousSelected();
					if (focus && searchRef.current) {
						searchRef.current.focus();
					}

					break;
				case KeysCodes.Esc:
					e.preventDefault();
					if (searchRef.current) {
						searchRef.current.focus();
					}
					break;
				case KeysCodes.ArrowRight:
				case KeysCodes.Enter:
					e.preventDefault();

					const selectedElement =
						valueContext.selectedElement || null;

					if (
						selectedElement &&
						(selectedElement.type ===
							"filterablePropertyCategory" ||
							selectedElement.type ===
								"filterablePropertyWithLinkedConditions") &&
						!selectedElement.isExpanded
					) {
						onExpandCurrent();
					} else {
						setNextFocus();
					}

					break;
				case KeysCodes.ArrowDown:
					e.preventDefault();
					if (searchRef.current) {
						searchRef.current.blur();
					}
					onNextSelected();
					break;
			}
		}
	};

	const handleKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		switch (e.keyCode) {
			case KeysCodes.ArrowDown:
			case KeysCodes.Enter:
				e.preventDefault();
				itemListFirstBlur();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				itemListFirstBlur();
				onNextSelected();
				break;
			case KeysCodes.Esc:
				e.preventDefault();

				if (searchRef.current && listRef.current) {
					searchRef.current.blur();
					listRef.current.focus({ preventScroll: true });
				}

				onConditionStateToggle();
		}
	};

	const ChildItem = childRenderer;

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		itemListFirstBlur();
	};

	const handleMenuModeChange = (mode: MenuMode) => () => onModeChanged(mode);

	const menuModeMap: IMenuModeMap = {
		[MenuMode.Filter]: filterLabel,
		[MenuMode.Recent]: recentLabel,
		[MenuMode.Saved]: savedLabel,
		[MenuMode.Examples]: examplesLabel
	};

	const setRef = (el: HTMLDivElement) => {
		mainRef.current = el;

		if (setOutsideClickRef) {
			setOutsideClickRef(el);
		}
	};

	const setAutoFocusSearchInput = () => {
		if (searchRef.current) {
			searchRef.current.focus();
		}
	};

	const setItemRef = (itemElement: React.RefObject<HTMLDivElement>) => {
		if (itemElement.current) {
			itemsListSearch = [...itemsListSearch, itemElement.current];
		}
	};

	const setFocusFirstElement = (
		onMouseEnter: () => void,
		onMouseLeave: () => void,
		itemElement: React.RefObject<HTMLDivElement>
	) => {
		if (itemsListSearch[0] === itemElement.current) {
			itemListFirstFocus = onMouseEnter;
			itemListFirstBlur = onMouseLeave;
		}
	};

	const valueContext: IProps = {
		selectedElement: null,
		onItemsRef: setItemRef,
		onFocusElement: setFocusFirstElement
	};

	return (
		<ContextWrapper>
			<div ref={setRef} className="kit-filter-condition-selector">
				<div className="kit-filter-condition-selector__wrap">
					<div className="kit-filter-condition-selector__filter-block">
						<Input
							ref={searchRef}
							noShadow={true}
							value={searchTerm}
							type="search"
							placeholder="Название фильтра"
							onChange={handleSearchChange}
							onKeyDown={handleKeyDownSearch}
						/>
						<div className="kit-filter-condition-selector__filter-btn-block">
							{Object.keys(menuModeMap).map((mode: MenuMode) => {
								return (
									<div
										key={mode}
										className={cn(
											"kit-filter-condition-selector__filter-btn",
											{
												"kit-filter-condition-selector__filter-btn_active":
													menuMode === mode
											}
										)}
										onClick={handleMenuModeChange(mode)}
									>
										{menuModeMap[mode]}
									</div>
								);
							})}
						</div>
					</div>
					<div className="kit-filter-condition-selector__hierarchy-wrap">
						<FilterConditionSelectorContext.Provider
							value={valueContext}
						>
							<ul
								ref={listRef}
								className="kit-filter-condition-selector__hierarchy"
								tabIndex={0}
								onKeyDown={handleKeyDown}
								onWheel={handleDisableBodyScroll}
							>
								{rootIds.length === 0 &&
								debouncedSearchTerm !== ""
									? notFoundMessage
									: rootIds.map(childId => (
											<ChildItem
												key={childId}
												id={childId}
												pathFromRoot={[childId]}
											/>
									  ))}
							</ul>
						</FilterConditionSelectorContext.Provider>
					</div>
				</div>

				<FilterDetails
					helpCaption={helpCaption}
					helpComponent={helpComponent}
					editorComponent={editorComponent}
					onClose={onConditionStateToggle}
					viewMode="menu"
				/>
			</div>
		</ContextWrapper>
	);
};

const FilterConditionSelectorWithOutsideClick = withOutsideClick(
	FilterConditionSelector
);
export { FilterConditionSelectorWithOutsideClick as FilterConditionSelector };
