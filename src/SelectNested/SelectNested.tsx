import * as React from "react";
import { Icon } from "../Icon";
import "./SelectNested.scss";

import cn from "classnames";

interface IOption {
	id: number;
	title: string;
	details: string[];
	children?: IOption[];
	disabled?: boolean;
}

interface IProps {
	options: IOption[];
	selectedOption?: IOption;
	onChange?: (option: IOption) => void;
}

interface IState {
	filter: string;
	isOpen: boolean;
	selectedOption: IOption | null;
}

const renderDetailsList = (details: string[]): JSX.Element[] =>
	details.map((detail, i) => (
		<li className="kit-select-nested__dropdown-option-details" key={i}>
			{detail}
		</li>
	));

export class SelectNested extends React.PureComponent<IProps, IState> {
	public state = {
		filter: "",
		isOpen: false,
		selectedOption: this.props.selectedOption || null
	};

	public wrapRef = React.createRef<HTMLDivElement>();

	public renderOptionsList = (option: IOption): JSX.Element => {
		const { id, title, details, children, disabled } = option;
		const { filter } = this.state;
		const isOutOfFilter =
			title.toLowerCase().indexOf(this.state.filter) === -1;

		return (
			<li
				className={cn(
					"kit-select-nested__dropdown-option",
					children &&
						"kit-select-nested__dropdown-option_has_sublist",
					filter && "kit-select-nested__dropdown-option_show_sublist"
				)}
				key={id}
			>
				<button
					className="kit-select-nested__dropdown-option-label"
					type="button"
					onClick={this.handleChange(option)}
					disabled={disabled || isOutOfFilter}
				>
					<div className="kit-select-nested__dropdown-option-title">
						{title}
					</div>
					<ul className="kit-select-nested__dropdown-option-details-list">
						{renderDetailsList(details)}
					</ul>
				</button>
				{children && (
					<>
						<button className="kit-select-nested__dropdown-option-sublist-toggle">
							<span className="kit-select-nested__dropdown-option-sublist-toggle-title">
								Показать подгруппы
							</span>
						</button>
						<ul className="kit-select-nested__dropdown-sublist">
							{children.map(this.renderOptionsList)}
						</ul>
					</>
				)}
			</li>
		);
	};

	public renderDropdown = (options: IOption[]): JSX.Element => (
		<div className="kit-select-nested__dropdown">
			<div className="kit-select-nested__filter">
				<div className="kit-select-nested__filter-input-wrap">
					<input
						type="text"
						className="kit-select-nested__filter-input"
						onChange={this.handleFilter}
					/>
					<span className="kit-select-nested__filter-icon">
						<Icon icon="search" />
					</span>
				</div>
			</div>
			<ul className="kit-select-nested__dropdown-list">
				{options && options.map(this.renderOptionsList)}
			</ul>
		</div>
	);

	public handleToggle = (): void =>
		this.setState(state => ({
			...state,
			filter: "",
			isOpen: !state.isOpen
		}));

	public handleFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ filter: e.target.value });
	};

	public handleChange = (option: IOption) => (
		e: React.MouseEvent<HTMLElement>
	): void => {
		this.setState({
			filter: "",
			isOpen: false,
			selectedOption: option
		});

		if (this.props.onChange) {
			this.props.onChange(option);
		}
	};

	public handleWrapRefClick = (e: MouseEvent): void => {
		const isSublistToggle = (e.target as HTMLElement).classList.contains(
			"kit-select-nested__dropdown-option-sublist-toggle"
		);

		if (isSublistToggle) {
			(e.target as HTMLElement).parentElement!.classList.toggle(
				"kit-select-nested__dropdown-option_show_sublist"
			);
		}
	};

	public handleClickOutside = (e: MouseEvent) => {
		const wrap = this.wrapRef.current!;

		if (!wrap.contains(e.target as Node)) {
			this.setState({ isOpen: false, filter: "" });
		}
	};

	public componentDidMount() {
		this.wrapRef.current!.addEventListener(
			"click",
			this.handleWrapRefClick
		);
		document.addEventListener("click", this.handleClickOutside);
	}

	public componentWillUnmount() {
		this.wrapRef.current!.removeEventListener(
			"click",
			this.handleWrapRefClick
		);
		document.removeEventListener("click", this.handleClickOutside);
	}

	public render() {
		const { selectedOption, isOpen } = this.state;
		const { options } = this.props;

		return (
			<div
				className={cn(
					"kit-select-nested",
					isOpen && "kit-select-nested_show_dropdown"
				)}
				ref={this.wrapRef}
			>
				<button
					className="kit-select-nested__label"
					type="button"
					onClick={this.handleToggle}
				>
					<div className="kit-select-nested__label-title">
						{selectedOption ? selectedOption.title : "Выбрать"}
					</div>
					<ul className="kit-select-nested__label-details-list">
						{selectedOption &&
							renderDetailsList(selectedOption.details)}
					</ul>
				</button>
				{isOpen && this.renderDropdown(options)}
			</div>
		);
	}
}
