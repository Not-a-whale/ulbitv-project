import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import {Modal} from "shared/ui/Modal/Modal";
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(prev => !prev);
    }, [])

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={() => setIsAuthModal(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores,
            </Modal>
        </div>
    )
}
