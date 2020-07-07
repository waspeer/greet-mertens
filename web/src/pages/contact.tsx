import React from 'react';
import { graphql } from 'gatsby';

import Contact from '~/sections/contact/contact';

import { ContactPageQuery } from '~/../graphql-types';

interface Props {
  data: ContactPageQuery;
}

const ContactPage = ({ data }: Props) => {
  const bio = data.sanityMe?._rawBio;
  const email = data.sanityMe?.email ?? '';
  const phone = data.sanityMe?.phone ?? '';

  return <Contact bio={bio} email={email} phone={phone} />;
};

export const query = graphql`
  query ContactPage {
    sanityMe(_id: { eq: "me" }) {
      _rawBio
      email
      phone
    }
  }
`;

export default ContactPage;
