import {classNames} from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import {useState} from "react";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    console.log(cls);
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button data-testid="sidebar-toggle" onClick={onToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
