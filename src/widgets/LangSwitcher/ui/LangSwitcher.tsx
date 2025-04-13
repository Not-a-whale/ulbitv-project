import {classNames} from "shared/lib/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    console.log(cls)
    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames(cls.langSwitcher, {[cls["short"]]: short}, [className])}
        >
            {short ? t("Короткий перевод") : t("Перевод")}
        </Button>
    )
}
