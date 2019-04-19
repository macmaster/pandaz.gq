import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import withStyles from 'react-jss';

import Header from './Header';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

function Layout({ classes, children }) {
  const { site } = useStaticQuery(query);
  const year = new Date().getFullYear();
  return (
    <React.Fragment>
      <Header siteTitle={site.siteMetadata.title} />
      <div className={classes.root}>
        <main>{children}</main>
        <footer>
          © {year}, Ronald Macmaster
        </footer>
      </div>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withStyles(theme => ({
  root: {
    maxWidth: theme.content.width,
    padding: theme.spacing.unit,
    margin: 'auto',
  },
}))(Layout);
