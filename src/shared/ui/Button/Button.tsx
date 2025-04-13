import {classNames} from "../../../shared/lib/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
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
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props;
    const mods: Record<string, boolean> = {
        [cls[theme] ? cls[theme] : ButtonTheme.CLEAR]: true,
        [cls.square]: props.square || false,
        [cls[props.size] ? cls[props.size] : ButtonSize.M]: true,
    }
    return (
        <button
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
