import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Container, Divider, Grid, Toolbar, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import NavBrand from '../headerElements/NavBrand';
import ContactInfo from '../../ContactInfo';
import SocialMedia from '../../SocialMedia';
import FooterGroup from './FooterGroup';
import FooterItem from './FooterItem';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.common.white,
  },
  grow: {
    flexGrow: 1,
  },
  copyright: {
    mr: theme.spacing(1),
  },
}));

const MainFooter = ({ data }) => {
  const classes = useStyles();
  const { sanityContactInfo: contactInfo, sanityNavMenu: footerMenu } = data;
  const { menuArray } = footerMenu;

  return (
    <>
      {data.sanityNavMenu && (
        <Box component="footer" color="common.white" bgcolor="common.black" fontSize={14} pt={2}>
          <Container maxWidth="lg" component="nav" role="menubar">
            <Grid container spacing={3}>
              {menuArray.map((group) => (
                <React.Fragment key={group._key}>
                  {group.menuGroup.map((item) => {
                    switch (item._type) {
                      case 'navBrand':
                        return (
                          <Grid item xs={12} md={3} lg={3} key={item._key}>
                            <Box my={2}>
                              <NavBrand
                                {...mapNavBrandToProps(item)}
                                url={data.sanityContactInfo.homePage}
                              />
                              <ContactInfo />
                              <Hidden mdUp>
                                <SocialMedia />
                              </Hidden>
                            </Box>
                          </Grid>
                        );
                      case 'navItem':
                        return (
                          <Hidden smDown key={item._key}>
                            <Grid item xs={12} md={3} lg={3}>
                              <FooterItem {...mapNavItemToProps(item)} />
                            </Grid>
                          </Hidden>
                        );
                      case 'navGroup':
                        return (
                          <Hidden smDown key={item._key}>
                            <Grid item xs={12} md={3} lg={3}>
                              <FooterGroup {...mapNavGroupToProps(item)} />
                            </Grid>
                          </Hidden>
                        );
                      default:
                        return <div key={item._key}>under construction</div>;
                    }
                  })}
                </React.Fragment>
              ))}
            </Grid>
          </Container>
          <Divider className={classes.divider} role="none" />
          <Container maxWidth="lg" role="none">
            <Toolbar disableGutters role="menubar">
              <Box component="p" mr={2}>
                &#0169; Copyright {new Date().getFullYear()} {contactInfo.name}
              </Box>
              <Link to="https://google.com" role="menuitem">
                Privacy Policy
              </Link>
              <Hidden smDown>
                <div className={classes.grow} />
                <SocialMedia />
              </Hidden>
            </Toolbar>
          </Container>
        </Box>
      )}
    </>
  );
};

export default function Footer(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityNavMenu(type: { eq: "mainFooter" }) {
            type
            menuArray {
              _key
              menuGroup {
                ... on SanityNavBrand {
                  _key
                  _type
                  alt
                  brandGroup {
                    _key
                    height
                    type
                    brand {
                      _id
                      logo {
                        asset {
                          url
                        }
                      }
                    }
                  }
                }
                ... on SanityNavGroup {
                  _key
                  _type
                  title
                  group {
                    title
                    isButton
                    icon
                    nav {
                      ... on SanityPage {
                        slug {
                          current
                        }
                      }
                      ... on SanitySoloGuidePage {
                        slug {
                          current
                        }
                      }
                      ... on SanityFlexListingPage {
                        slug {
                          current
                        }
                      }
                    }
                    _key
                  }
                }
                ... on SanityNavItem {
                  _key
                  _type
                  isButton
                  title
                  nav {
                    ... on SanityPage {
                      slug {
                        current
                      }
                    }
                    ... on SanitySoloGuidePage {
                      slug {
                        current
                      }
                    }
                    ... on SanityFlexListingPage {
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityNavPhone {
                  _key
                  _type
                  text
                }
              }
            }
          }
          sanityContactInfo {
            name
            homePage
          }
        }
      `}
      render={(data) => <MainFooter data={data} {...props} />}
    />
  );
}
