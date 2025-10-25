import { getDictionary } from "../../../dictionaries";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default async function AboutPage({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    return (
        <>
            <h2>{dictionary.AboutPage.title}</h2>
            <LocaleSwitcher></LocaleSwitcher>
        </>
  )
};
