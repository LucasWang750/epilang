import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../containers/about';

type AboutPageProps = {};

const AboutPage: React.FunctionComponent<AboutPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="Epilang is a blog dedicated to the growth and development of Lucas as he journeys through recreational software engineering. One new concept at a time."
      />

      <About />
    </Layout>
  );
};

export default AboutPage;
