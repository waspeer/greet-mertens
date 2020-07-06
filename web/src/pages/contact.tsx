import React from 'react';
import { graphql } from 'gatsby';

import Contact from '~/sections/contact/contact';

import { ContactPageQuery } from '~/../graphql-types';

interface Props {
  data: ContactPageQuery;
}

const ContactPage = ({ data }: Props) => {
  const email = data.sanityMe?.email ?? '';

  return <Contact email={email} />;
};

export const query = graphql`
  query ContactPage {
    sanityMe(_id: { eq: "me" }) {
      email
    }
  }
`;

export default ContactPage;
