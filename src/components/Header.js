import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

function Header({ classes, siteTitle }) {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.title}>
        <h3 style={{ margin: 'auto' }}>Pandas</h3>
      </Link>
      <Link to="/about">About</Link>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withStyles(theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: theme.content.width,
    padding: theme.spacing.unit,
    margin: 'auto',
  },
  title: {
    display: 'inline-block',
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: 'none',
  },
}))(Header);
