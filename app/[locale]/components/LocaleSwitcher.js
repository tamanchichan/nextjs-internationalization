"use client";

import { usePathname } from "next/navigation";
import { locales } from "../../../config";
import Link from "next/link";

// let locales = ["en", "pt-BR"];

export default function LocaleSwitcher() {
    const pathname = usePathname();
    const redirectPathname = (locale) => {
        if (!pathname) return "/";
        
        const segments = pathname.split("/");
        segments[1] = locale;
        
        return segments.join("/");
    };
    
    return (
        <div>
            <p>Locale switcher:</p>
            <ul>
                {locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <Link href={redirectPathname(locale)}>{locale}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}