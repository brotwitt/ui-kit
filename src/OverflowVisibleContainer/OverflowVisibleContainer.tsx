import cn from "classnames";
import * as React from "react";
import { createPortal } from "react-dom";
import { Props, State } from "./types";

import {
	CreateWindowClickListener,
	IsntNeutralZoneMarker,
	IWindowClickListener
} from "../WindowClickListener";
import "./OverflowVisibleContainer.scss";

export class OverflowVisibleContainer extends React.Component<Props> {
	public state: State = {
		positionTop: 0,
		positionLeft: 0,
		positionBottom: "auto",
		isLoaded: false
	};

	private windowClickListener: IWindowClickListener;

	private portal = document.createElement("div");

	private containerRef = React.createRef<HTMLDivElement>();

	public componentDidMount() {
		const { portal } = this;

		document.body.appendChild(portal);

		this.handleShowPopup();

		// setTimeout предотвращает обработку
		// любого click по window
		// послужившого причиной cоздания данного компонента
		setTimeout(() => {
			if (
				this.containerRef.current != null &&
				this.props.onNeutralZoneClick != null
			) {
				this.windowClickListener = CreateWindowClickListener(
					this.props.onNeutralZoneClick,
					this.containerRef.current as HTMLElement
				);
			}
		});
	}

	public componentWillUnmount() {
		const { portal } = this;

		document.body.removeChild(portal);
		window.removeEventListener("resize", this.handleShowPopup);
		window.removeEventListener("load", this.handleShowPopup);

		// Так как windowClickListener создаётся через setTimeout, то и его стопинг реализуется также
		setTimeout(() => {
			if (this.windowClickListener != undefined) {
				this.windowClickListener.stop();
			}
		});
	}

	public componentDidUpdate() {
		this.handleShowPopup();
	}

	public handleShowPopup = () => {
		const { parentRef, isAdaptive, onAdaptive } = this.props;
		const { positionLeft, positionTop, positionBottom } = this.state;

		if (parentRef && parentRef.current) {
			const {
				top,
				height,
				left
			} = parentRef.current.getBoundingClientRect();
			const windowScrollY = window.scrollY;
			let reactTop: number | string = windowScrollY + top + height;
			let rectBottom: number | string = "auto";
			const rectLeft: number | string = left;
			const heightBody = document.body.offsetHeight;

			if (isAdaptive && window.innerHeight / 2 < top) {
				reactTop = "auto";
				rectBottom = heightBody - windowScrollY - top - 2;
			}

			if (onAdaptive) {
				rectBottom !== "auto" ? onAdaptive(true) : onAdaptive(false);
			}

			if (
				reactTop !== positionTop ||
				rectLeft !== positionLeft ||
				rectBottom !== positionBottom
			) {
				this.setState({
					positionTop: reactTop,
					positionLeft: rectLeft,
					positionBottom: rectBottom,
					isLoaded: true
				});
			}
		}

		window.addEventListener("resize", this.handleShowPopup);
		window.addEventListener("load", this.handleShowPopup);
	};

	public render() {
		const {
			positionLeft,
			positionTop,
			positionBottom,
			isLoaded
		} = this.state;
		const { children, className } = this.props;

		return createPortal(
			<div
				ref={this.containerRef}
				className={cn(
					"kit-overflow-visiblecontainer",
					IsntNeutralZoneMarker,
					className
				)}
				style={{
					left: positionLeft,
					top: positionTop,
					bottom: positionBottom
				}}
			>
				{isLoaded && children}
			</div>,
			this.portal
		);
	}
}
