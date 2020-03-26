import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Icon from '../Icon';
import Divider from '../Divider';

require('./PureDrawer.scss');

const PureDrawer = ({ drawerRef, children, title, onCloseClick, className, closable, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-drawer', className)} ref={drawerRef} {...otherProps}>
      <div className="rc-pure-drawer-title">
        <span>{title}</span>
        {closable && <Button icon="times" circle className="rc-pure-drawer-toggle" fontSize="0.75em" onClick={onCloseClick} />}
      </div>
      <div className="rc-pure-drawer-content">
        {children}
      </div>
    </div>
  );
};

PureDrawer.displayName = 'PureDrawer';
PureDrawer.propTypes = {
  drawerRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
  onCloseClick: PropTypes.func,
  className: PropTypes.string,
  closable: PropTypes.bool,
};
PureDrawer.defaultProps = {
  onCloseClick: f => f,
  closable: true,
};

export default PureDrawer;
