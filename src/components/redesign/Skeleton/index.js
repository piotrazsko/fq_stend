import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';

import { NavLink } from 'react-router-dom';

import style from './style.scss';

const color = '#eb5757';

const Skeleton = ({
    children,
    nextButtonText = '+ Добавить мастера',
    onNext,
    title = '',
    subTitle = '',
    showBreadcump = false,
    breadcamps,
    showTitle = true,
    backButtonText = '',
    onBack,
    textError = '',
    textInfo = '',
    bottomPositionButtons = true,
    showBackButtonInTop = false,
    backgroundColor = '#fff',
    headerChildren = '',
    classes,
    buttonClasses,
}) => {
    return (
        <React.Fragment>
            {showBackButtonInTop && (
                <Grid container style={{ backgroundColor }} className={style.backButtonInTop}>
                    <Grid item xs={12}>
                        <div>
                            <IconButton onClick={onBack}>
                                <ArrowBackIcon htmlColor={color} />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            )}
            <Grid container style={{ backgroundColor }} className={style.root}>
                <Grid item xs={12}>
                    {showTitle && (
                        <div className={style.title}>
                            {showBreadcump ? (
                                <Breadcrumbs
                                    className={style.breadcamps}
                                    separator=">"
                                    aria-label="breadcrumb"
                                >
                                    {breadcamps.map(i => {
                                        return (
                                            <NavLink
                                                key={i.link}
                                                className={[style.link, style.breadcamps].join(' ')}
                                                to={i.link}
                                            >
                                                {i.title}
                                            </NavLink>
                                        );
                                    })}
                                    <Typography className={style.breadcamps} color="textPrimary">
                                        {title}
                                    </Typography>
                                </Breadcrumbs>
                            ) : (
                                showTitle && <Typography variant="h4">{title}</Typography>
                            )}
                            {headerChildren}
                            {onNext && !bottomPositionButtons && (
                                <Button
                                    onClick={onNext}
                                    variant="contained"
                                    color="primary"
                                    classes={buttonClasses}
                                >
                                    {nextButtonText}
                                </Button>
                            )}
                        </div>
                    )}
                    {showBreadcump && showTitle && <Typography variant="h4">{title}</Typography>}
                    <div className={[style.children, classes.children].join(' ')}>
                        {subTitle && (
                            <span className={[style.subTitle, classes.subtitle || ''].join(' ')}>
                                {subTitle}
                            </span>
                        )}
                        {children}
                    </div>
                    {bottomPositionButtons && (
                        <div>
                            {backButtonText && (
                                <Button
                                    size="large"
                                    variant="outlined"
                                    color="primary"
                                    onClick={onBack}
                                    classes={buttonClasses}
                                >
                                    {backButtonText}
                                </Button>
                            )}
                            {nextButtonText && onNext && (
                                <Button
                                    size="large"
                                    variant="contained"
                                    color="primary"
                                    onClick={onNext}
                                >
                                    {nextButtonText}
                                </Button>
                            )}
                            <span className={style.textError}> {textError}</span>
                            <span className={style.textInfo}> {textInfo}</span>
                        </div>
                    )}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

Skeleton.propTypes = {
    children: PropTypes.any,
    onNext: PropTypes.func,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    showBreadcump: PropTypes.bool,
    nextButtonText: PropTypes.string,
    breadcamps: PropTypes.array,
    backButtonText: PropTypes.string,
    onBack: PropTypes.func,
    textError: PropTypes.string,
    textInfo: PropTypes.string,
    bottomPositionButtons: PropTypes.bool,
    showBackButtonInTop: PropTypes.bool,
    backgroundColor: PropTypes.string,
    headerChildren: PropTypes.element,
    showTitle: PropTypes.bool,
    classes: PropTypes.shape({
        children: PropTypes.string,
    }),
    buttonClasses: PropTypes.object,
};
Skeleton.defaultProps = {
    onNext: () => {},
    onBack: () => {},
    breadcamps: [],
    headerChildren: '',
    classes: { children: '' },
};

export default Skeleton;
