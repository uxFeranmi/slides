/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'docs',
	pageExtensions: ['page.tsx', 'm.ts'],
	output: 'export',
	basePath: '/slides',
};

export default nextConfig;
