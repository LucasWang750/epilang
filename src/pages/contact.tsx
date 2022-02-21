import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Contact from '../containers/contact';

type ContactPageProps = {};

const ContactPage: React.FunctionComponent<ContactPageProps> = (props) => {
  return (
    <Layout>
      <SEO
        title="Contact Me"
        description="Epilang is a blog dedicated to the growth and development of Lucas as he journeys through recreational software engineering. One new concept at a time."
      />

      <Contact />
    </Layout>
  );
};

export default ContactPage;
