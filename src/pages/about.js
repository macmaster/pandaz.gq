import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function About(props) {
  return (
    <Layout>
      <SEO title="About" />
      <p>Wow, very legal and cool...</p>
      <p><Link to="/">Back to Buffet</Link></p>
    </Layout>
  );
}
