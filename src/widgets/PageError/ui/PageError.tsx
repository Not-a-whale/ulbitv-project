import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={className}>
            <h1>{t('Произошла ошибка')}</h1>
            <Button onClick={reloadPage}></Button>
        </div>
    );
}