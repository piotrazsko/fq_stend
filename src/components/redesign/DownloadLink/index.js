import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Icon, Tooltip, ClickAwayListener } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import NumberFormat from '../NumberFormat';

import { DownloadIcon } from '../../Icons';
import style from './style.module.scss';

const color = '#fa835f';

const DownloadLink = ({ href, align = 'right', iconProps, textProps, children, ...props }) => {
    // const classes = useStyles();

    return (
        <a href={href} className={align === 'right' ? style.link : style.linkLeft} {...props}>
            <DownloadIcon {...iconProps} />{' '}
            <span className={style.text} {...textProps}>
                {children}
            </span>
        </a>
    );
};

DownloadLink.propTypes = {
    href: PropTypes.string,
    align: PropTypes.string,
    iconProps: PropTypes.object,
    textProps: PropTypes.object,
    children: PropTypes.any,
};
DownloadLink.defaultProps = {
    align: 'right',
};
export default DownloadLink;
