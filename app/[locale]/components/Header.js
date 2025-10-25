import Link from "next/link";
import { getDictionary } from "../../../dictionaries";

export default async function Header({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    return (
        <header>
            <h1>Taman Chi Chan</h1>
            <nav>
                <ul>
                    <li><Link href={`/${locale}/`}>{dictionary.HeaderNav.home}</Link></li>
                    <li><Link href={`/${locale}/about`}>{dictionary.HeaderNav.about}</Link></li>
                    <li><Link href={`/${locale}/contact`}>{dictionary.HeaderNav.contact}</Link></li>
                </ul>
            </nav>
        </header>
    )
};
