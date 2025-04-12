import {classNames} from "../../../shared/lib/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    console.log(cls)
    const {className, children, theme, ...otherProps} = props;
    return (
        <button className={classNames(cls.button, {[cls[theme] ? cls[theme] : ThemeButton.CLEAR]: true}, [className])} {...otherProps}>
            {children}
        </button>
    )
}
