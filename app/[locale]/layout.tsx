import '@/src/styles/index.scss';
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl';

import { notFound } from 'next/navigation';

const titillium = Titillium_Web({ subsets: ['latin'], weight: ['400', '600', '700', '900'] });

export const metadata: Metadata = {
  title: 'Next Intl App',
  description: 'Test app',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }];
}

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {

  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (e) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={titillium.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
