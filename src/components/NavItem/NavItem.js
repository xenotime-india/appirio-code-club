import React from 'react';
import { Link, Route } from 'react-router-dom';

export default class NavItem extends React.Component {
  render () {
    const { to, children, exact, strict, location, isActive, className, activeClassName, style, activeStyle, ...props } = this.props;

    const path = typeof to === 'object' ? to.pathname : to;

    // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
    const escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

    return (
      <Route
        path={escapedPath}
        exact={exact}
        strict={strict}
        location={location}
        children={({ location, match }) => {
          const isActive = !!(isActive ? isActive(match, location) : match);
          return (
            <li className={isActive ? 'slds-context-bar__item slds-is-active' : 'slds-context-bar__item'}>
              <Link
                to={to}
                className={
                  isActive
                    ? [className, activeClassName].filter(i => i).join(' ')
                    : className
                }
                style={isActive ? { ...style, ...activeStyle } : style}
                aria-current={(isActive) || null}
                {...props}>
                {children}
              </Link>
            </li>
          );
        }}
      />
    );
  }
}