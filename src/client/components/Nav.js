import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import nullthrows from '@wincent/nullthrows';
import Link from './Link';
import inBrowser from '../../common/inBrowser';

if (inBrowser) {
  require('./Nav.css');
}

const NavLink = ({target, text, active}) => {
  const classNames = cx({
    active: active === target,
    'nav-link': true,
  });

  return (
    <li>
      <Link className={classNames} to={target}>
        {text}
      </Link>
    </li>
  );
};

function getActiveRoutePrefix(path) {
  const match = path && path.match(/^(\/\w+)\b/);
  if (match) {
    return match[1];
  }

  // Must be at /, which is the same as /blog.
  return '/blog';
}

export default class Nav extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  componentDidMount() {
    nullthrows(document.body).addEventListener('click', this._handleClick);
  }

  componentWillUnmount() {
    nullthrows(document.body).removeEventListener('click', this._handleClick);
  }

  _handleClick = (event) => {
    const element = event.target;
    if (
      this.state.isOpen &&
      element instanceof HTMLElement &&
      element.className !== 'nav-toggle'
    ) {
      this.setState({isOpen: false});
    }
  };

  _handleToggle = (event) => {
    event.preventDefault();
    this.setState(({isOpen}) => ({isOpen: !isOpen}));
  };

  render() {
    const active = getActiveRoutePrefix(
      this.context.router.history.location.pathname,
    );
    return (
      <nav className={cx({'nav-open': this.state.isOpen})}>
        <ul className="navigation">
          <li>
            <Link className="nav-link" to="/">
              stevium
            </Link>
            <div className="nav-toggle-wrapper">
              <div className="nav-toggle" onClick={this._handleToggle}>
                {this.state.isOpen ? 'Close' : 'Open'}
              </div>
            </div>
          </li>
          <div className="spacer"></div>
          <NavLink target="/blog" text="blog" active={active} /> -
          <NavLink target="/pages/projects" text="projects" active={active} /> -
          <NavLink target="/wiki" text="wiki" active={active} /> -
          <NavLink target="/tags" text="tags" active={active} /> -
          <NavLink target="/search" text="search" active={active} />
        </ul>
      </nav>
    );
  }
}
