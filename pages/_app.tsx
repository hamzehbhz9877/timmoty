
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/utils/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import '@/styles/globals.css'
import {Hydrate, QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {useState} from "react";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'


//global styles
import '@/styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [queryClient] = useState(() => new QueryClient())

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <Component {...pageProps} />
                        <ReactQueryDevtools initialIsOpen={false}/>
                    </Hydrate>
                </QueryClientProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}