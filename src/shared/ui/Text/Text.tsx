import {classNames} from "shared/lib/classNames";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    theme?: TextTheme;
    text?: string;
}

export const Text = ({ className, theme, text, title }: TextProps) => {
    return (
        <div className={classNames(cls.text, { [cls[theme || TextTheme.PRIMARY]]: !!theme }, [className])}>
            {title && <h1 className={cls.title}>{title}</h1>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}