import { useTranslations } from "next-intl";

const NewsPage = () => {

    const t = useTranslations('Index');

    return (
        <div>{t('news')}</div>
    );
}

export default NewsPage;