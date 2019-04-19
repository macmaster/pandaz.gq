import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <p>Dude? What are you doing?</p>
      <p><Link to="/">Back to Safety</Link></p>
    </Layout>
  );
}
