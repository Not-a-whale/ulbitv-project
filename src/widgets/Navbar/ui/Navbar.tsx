import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import {useCallback, useState} from "react";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, userActions} from "entities/User";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(prev => false);
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(prev => true);
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        onCloseModal();
    }, [dispatch, onCloseModal]);

    if (authData) {
        return <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Выйти')}
            </Button>
        </div>
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    )
}
