import {classNames} from "shared/lib/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearinverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "background-inverted",
}

export enum ButtonSize {
    M = "sizeM",
    L = "sizeL",
    XL = "sizeXl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, disabled, ...otherProps} = props;
    const mods: Record<string, boolean> = {
        [cls[theme] ? cls[theme] : ButtonTheme.CLEAR]: true,
        [cls.square]: props.square || false,
        [cls[props.size] ? cls[props.size] : ButtonSize.M]: true,
        [cls.disabled]: disabled
    }
    return (
        <button
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
