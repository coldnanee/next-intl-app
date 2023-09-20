import { usePathname } from "next/navigation";
import styles from './LanguageSwitch.module.scss';

import Link from "next/link";

const LanguageSwitch = () => {

    const languagesArr = ['ru', 'en'];

    const lngFromUrlPath = usePathname().slice(1).match(/[^/]+/)?.[0];

    const rootItemActiveStyles = [styles.root__item, styles.root__item_active];

    return (
        <ul className={styles.root}>
            {languagesArr.map(lng =>
                <li className={lng === lngFromUrlPath ? rootItemActiveStyles.join(' ') : styles.root__item} key={lng}>
                    <Link href={`/${lng}/`}>{lng}</Link>
                </li>
            )}
        </ul>
    );
}

export default LanguageSwitch;