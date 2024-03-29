import React from 'react';
import { JssInjectedProps } from 'rsg-components/Styled';
interface DetailsProps extends JssInjectedProps {
    children: React.ReactNode;
}
export declare const DetailsRenderer: React.FunctionComponent<DetailsProps>;
declare const _default: React.ComponentType<Omit<DetailsProps, "classes">>;
export default _default;
