import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

function SEO({ description, lang, meta, keywords = [], title }) {
  const { site } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;

  const metaProp = [
    {
      name: "description",
      content: metaDescription,
    }, {
      property: "og:title",
      content: title,
    }, {
      property: "og:description",
      content: metaDescription,
    }, {
      property: "og:type",
      content: "website",
    }, {
      name: "twitter:card",
      content: "summary",
    }, {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    }, {
      name: "twitter:title",
      content: title,
    }, {
      name: "twitter:description",
      content: metaDescription,
    }, {
      name: "keywords",
      content: keywords.join(", "),
    }
  ].concat(meta);

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={metaProp}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
};

export default SEO;
