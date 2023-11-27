import { AxiosInstance } from 'axios';
import ziggyRoute, { Config as ZiggyConfig } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;
}

interface HeroSlideProps {
    mobileImg : string,
    tabletImg : string,
    desktopImg : string,
    children : React.ReactNode,
    className ?: string
}

interface HighlightItem {
    desktopImg : string,
    mobileImg : string,
    category : string,
    title : string,
    description : string,
    link : string,
    className ?: string
}
