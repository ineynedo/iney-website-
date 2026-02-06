'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLanguage = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale });
        });
    };

    return (
        <div className="flex items-center gap-2 bg-primary-gray-100 rounded-full p-1">
            <button
                onClick={() => switchLanguage('fr')}
                disabled={isPending}
                className={`
          px-4 py-2 rounded-full font-medium text-sm transition-smooth
          ${locale === 'fr'
                        ? 'bg-primary-black text-white'
                        : 'text-primary-gray-600 hover:text-primary-black'
                    }
        `}
            >
                FR
            </button>
            <button
                onClick={() => switchLanguage('en')}
                disabled={isPending}
                className={`
          px-4 py-2 rounded-full font-medium text-sm transition-smooth
          ${locale === 'en'
                        ? 'bg-primary-black text-white'
                        : 'text-primary-gray-600 hover:text-primary-black'
                    }
        `}
            >
                EN
            </button>
        </div>
    );
}
