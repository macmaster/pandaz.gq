import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Index({ classes }) {
  const url =
    "https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI"
    + "/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg";

  return (
    <Layout>
      <SEO title="Home" keywords={['pandas']} />
      <p>They love to eat bamboo.</p>
      <div>
        <img src={url} alt="Pandas Eating Bamboo.." />
      </div>
    </Layout>
  );
}
