export type AllowedDateChanges = "-m" | "-w" | "-d" | "+d" | "+w" | "+m";

export interface ITimeTravelProps {
	onDatesChange: (change: AllowedDateChanges) => void;
}

export interface ITimeTravelControl {
	value: AllowedDateChanges;
	title: string;
}
