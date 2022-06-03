import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid, Box, Hidden } from '@material-ui/core';
import Layout from '../containers/layout';
import GuideHero from '../components/sections/GuideHero';
import GuideBody from '../components/portableText/serializer/GuideSerializer';
import ToC from '../components/TableOfContent';
import Seo from '../components/Seo';

import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query multiChapterGuideRootPageTemplate($slug: String) {
    guide: sanityMultiChapterGuideRootPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      displayDate
      pageTitle
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      noindex
      nofollow
      canonical
      id
      h1
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
      _rawGuideBody(resolveReferences: { maxDepth: 14 })
      metaDescription
      heroImage {
        alt
        _rawAsset(resolveReferences: { maxDepth: 10 })
        asset {
          url
        }
        maxHeight
        maxWidth
        _rawCaption(resolveReferences: { maxDepth: 10 })
      }
      _rawHeroSubtitle(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const MultiChapterGuideRootPage = ({ data, location }) => {
  const type = 'guide';

  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.guide, type)} heroImage={data.guide.heroImage.asset.url} />
      <main>
        <GuideHero {...mapGuideHeroToProps(data.guide)} />
        <Box my={3}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item md={9} xs={12} component="article">
                <GuideBody blocks={data.guide._rawGuideBody} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </Layout>
  );
};

export default MultiChapterGuideRootPage;
