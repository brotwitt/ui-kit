import { ArrowRight } from "./ArrowRight";
import { CatalogTree } from "./CatalogTree";
import { Close } from "./Close";
import { Coins } from "./Coins";
import { Dots } from "./Dots";
import { Magnifier } from "./Magnifier";
import { PercentRound } from "./PercentRound";
import { Drop } from "./Drop";

interface ISvgProps {
	className: string;
}

type IconType =
	| "catalog-tree"
	| "close"
	| "coins"
	| "dots"
	| "percent-round"
	| "arrow-right"
	| "magnifier"
	| "drop";

type Icons = { [key in IconType]: (props: ISvgProps) => JSX.Element };

const icons: Icons = {
	"arrow-right": ArrowRight,
	"catalog-tree": CatalogTree,
	close: Close,
	coins: Coins,
	dots: Dots,
	drop: Drop,
	magnifier: Magnifier,
	"percent-round": PercentRound
};

export { icons, IconType, ISvgProps };
