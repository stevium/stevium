import React from 'react';
import inBrowser from '../../common/inBrowser';
import Link from './Link';

if (inBrowser) {
  require('./Footer.css');
}

const FooterLink = ({target, text}) => (
  <li>
    <Link to={target}>{text}</Link>
  </li>
);

const StaticFooterLink = ({target, text}) => (
  <li>
    <a href={target}>{text}</a>
  </li>
);

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <h6>Sitemap</h6>
              <ul>
                <FooterLink target="/blog" text="Blog" />
                <FooterLink target="/pages/projects" text="Projects" />
                <FooterLink target="/wiki" text="Wiki" />
                <FooterLink target="/tags" text="Tags" />
                <FooterLink target="/search" text="Search" />
              </ul>
            </div>
            <div className="four columns">
              <h6>Elsewhere</h6>
              <ul>
                <StaticFooterLink
                  target="https://github.com/stevium"
                  text="GitHub"
                />
                <StaticFooterLink
                    target="https://www.linkedin.com/in/stevium"
                    text="LinkedIn"
                />
                <StaticFooterLink
                  target="https://twitter.com/stevuim"
                  text="Twitter"
                />
                <StaticFooterLink
                  target="https://facebook.com/stevium"
                  text="Facebook"
                />
                <StaticFooterLink
                  target="https://www.instagram.com/stevium"
                  text="Instagram"
                />
              </ul>
            </div>
            <div className="four columns">
              <h6>Credits</h6>
              <p>
                {'Made with ♡ using '}
                <a href="https://facebook.github.io/react/">React</a>
                {', and the help of '}
                <a href="https://git-scm.com/">Git</a>
                {', '}
                <a href="http://redis.io/">Redis</a>
                {' and '}
                <a href="https://www.spacemacs.org/">Spacemacs</a>
                {'.'}
              </p>
              <p>
                Inspired by <a href="https://github.com/wincent/masochist">Masochist</a>.
              </p>
              {/* TODO link to /pages/legal here */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
