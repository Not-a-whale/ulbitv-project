import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {classNames} from "shared/lib/classNames";
import * as cls from "./ThemeSwitcher.module.scss";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();


    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
}
