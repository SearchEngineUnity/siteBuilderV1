import React from 'react';
import { Box, Link } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';

const ContactInfo = ({ data }) => {
  const { sanityContactInfo: contactInfo } = data;

  return (
    <Box my={2}>
      {contactInfo.address1 && <div>{contactInfo.address1}</div>}
      {contactInfo.address2 && <div>{contactInfo.address2}</div>}
      <div>
        {contactInfo.city ? `${contactInfo.city}, ` : null}
        {contactInfo.provinceState ? `${contactInfo.provinceState}, ` : null}
        {contactInfo.mailCode ? `${contactInfo.mailCode}` : null}
      </div>
      {contactInfo.phone && (
        <Link
          href={`tel:${contactInfo.phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          style={{ display: 'block' }}
        >
          {contactInfo.phone}
        </Link>
      )}
      {contactInfo.email && (
        <Link href={`mailto:${contactInfo.email}`} color="inherit">
          {contactInfo.email}
        </Link>
      )}
    </Box>
  );
};

export default function Contact(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityContactInfo {
            address1
            address2
            city
            country
            email
            phone
            mailCode
            provinceState
          }
        }
      `}
      render={(data) => <ContactInfo data={data} {...props} />}
    />
  );
}
