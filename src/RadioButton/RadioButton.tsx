import * as React from "react";
import "./RadioButton.scss";

interface Props {
    children: string;
    checked?: boolean;
    name: string;
    onSelected?: () => void;
}

export class RadioButton extends React.Component<Props> {
    public render() {
        const { children, checked, name, onSelected = () => { } } = this.props;
        return (
            <label className="kit-radio">
                <input
                    className="kit-radio__input"
                    type="radio"
                    defaultChecked={checked}
                    name={name}
                    onChange={onSelected}
                />
                <span className="kit-radio__checkmark">{children}</span>
            </label>
        );
    }
}