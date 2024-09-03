// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '../../public/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
