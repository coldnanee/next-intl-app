/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
);

const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:locale',
                destination: '/:locale/about/support',
                permanent: true
            },
            {
                source: '/:locale/about',
                destination: '/:locale/about/support',
                permanent: true
            },
        ]
    }
}

module.exports = withNextIntl(nextConfig);