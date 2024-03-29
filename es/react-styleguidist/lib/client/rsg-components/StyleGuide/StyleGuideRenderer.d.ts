import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface StyleGuideRendererProps extends JssInjectedProps {
    title: string;
    version?: string;
    homepageUrl: string;
    children: React.ReactNode;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}
export declare const StyleGuideRenderer: React.FunctionComponent<StyleGuideRendererProps>;
declare const _default: React.ComponentType<Omit<StyleGuideRendererProps, "classes">>;
export default _default;
