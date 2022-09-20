import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import Seo from '../components/Seo';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import StackHero from '../components/sections/StackHero';
import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLrFlexToProps,
  mapStackSectionToProps,
} from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 10 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 10 })
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          idTag
          layout
          reverseOrder
          designSettings {
            padding: _rawPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 10 })
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 10 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              heading
              headingLevel
              titleAlignment
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          idTag
          layout
          reverseOrder
          designSettings {
            padding: _rawPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
        }
        ... on SanityStackHero {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 10 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          designSettings {
            padding: _rawPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            foreground {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            heading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            subtitle {
              color {
                alpha
                hex
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanitySmartGridBlock {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTiles(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityTestimonialGrid {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawTestimonialList(resolveReferences: { maxDepth: 10 })
              _rawFooter(resolveReferences: { maxDepth: 10 })
              tileOption
              layout
              headerAlignment
              footerAlignment
            }
            ... on SanityGridFlex {
              _key
              _type
              header {
                heading
                subheading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityAffiliateLink {
                    _key
                    _type
                    href
                  }
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityFlexListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                }
              }
            }
            ... on SanityClickableImage {
              _key
              _type
              _rawImage(resolveReferences: { maxDepth: 10 })
              alignment
              borderRadius
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityAffiliateLink {
                  _key
                  _type
                  href
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityFlexListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                bgImage {
                  asset {
                    url
                  }
                }
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      rgb {
                        r
                        g
                        b
                        a
                      }
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              _rawCaption(resolveReferences: { maxDepth: 10 })
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
                subheading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              textAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              heading
              headingLevel
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          designSettings {
            padding: _rawPadding
            borderRadius
            caption {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            background {
              color {
                hex
                alpha
              }
            }
            bgImage {
              asset {
                url
              }
            }
            bleed
            repeat
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            subheading {
              color {
                hex
                alpha
                rgb {
                  r
                  g
                  b
                  a
                }
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
          header {
            heading
            subheading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
        }
      }
      slug {
        current
      }
      pageTitle
      metaDescription
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      nofollow
      noindex
      canonical
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
    }
  }
`;

const StructuredPage = ({ data, location }) => {
  const type = 'page';

  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.page, type)} />
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackSectionToProps(section)} />;

            case 'stackHero':
              return <StackHero key={section._key} {...mapStackSectionToProps(section)} />;

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
