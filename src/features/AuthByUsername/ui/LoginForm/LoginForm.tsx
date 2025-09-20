import {useTranslation} from "react-i18next";
import {classNames} from "shared/lib/classNames";
import cls from "./LoginForm.module.scss";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "features/AuthByUsername/model/slice/loginSlice";
import {getLoginState} from "features/AuthByUsername/selectors/getLoginState/getLoginState";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";

interface LoginFormProps {
    className?: string;
}

// eslint-disable-next-line react/display-name
export const LoginForm = memo(({className}: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {username, password, error, isLoading} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() =>  {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            {error && <p className={cls.error}>{t('Ошибка авторизации')}</p>}
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите username')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cls.input}
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />

            <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={onLoginClick}>
                {t("Войти")}
            </Button>
        </div>
    )
})