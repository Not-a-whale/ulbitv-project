import {classNames} from "shared/lib/classNames";
import cls from "./AppLink.module.scss";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme,
        ...otherProps
    } = props;
    console.log(cls)
    return (
        <Link
            to={to}
            className={classNames(cls.appLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
