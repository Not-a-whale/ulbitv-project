import {classNames} from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg"
import AboutIcon from "shared/assets/icons/about-20-20.svg";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedbtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.XL}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span className={cls.link}>{t("Main")}</span>
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t("About")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={cls.lang}/>
            </div>
        </div>
    )
}
