import {classNames} from "shared/lib/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import * as cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={"/"} className={cls.mainLink}>Main</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>About</AppLink>
            </div>
        </div>
    )
}
