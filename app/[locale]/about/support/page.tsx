'use client';

import { useTranslations } from "next-intl";

import LanguageSwitch from "@/src/components/language-switch/LanguageSwitch";

const SupportPage = () => {

    const t = useTranslations('Index');

    return (
        <>
            <LanguageSwitch />
            <div>{t('title')}</div>
        </>
    );
}

export default SupportPage;