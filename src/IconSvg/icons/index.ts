import { ArrowRight } from "./ArrowRight";
import { CatalogTree } from "./CatalogTree";
import { Close } from "./Close";
import { Coins } from "./Coins";
import { Dots } from "./Dots";
import { Magnifier } from "./Magnifier";
import { PercentRound } from "./PercentRound";
import { Trash } from "./Trash";
import { Extended } from "./Extended";
import { Warning } from "./Warning";

import { IconsProps } from "../types";

type ISvgProps = {
	className: string;
} & Partial<IconsProps>;

type IconType =
	| "catalog-tree"
	| "close"
	| "coins"
	| "dots"
	| "percent-round"
	| "arrow-right"
	| "magnifier"
	| "trash"
	| "extended"
	| "warning";

type Icons = { [key in IconType]: (props: ISvgProps) => JSX.Element };

const icons: Icons = {
	"arrow-right": ArrowRight,
	"catalog-tree": CatalogTree,
	close: Close,
	coins: Coins,
	dots: Dots,
	magnifier: Magnifier,
	trash: Trash,
	"percent-round": PercentRound,
	extended: Extended,
	warning: Warning
};

export { icons, IconType, ISvgProps };
