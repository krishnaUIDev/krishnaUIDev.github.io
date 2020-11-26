const meta = {
  // Metadata
  siteTitle: 'Krishna Kanth - Creative Web Designer',
  siteDescription:
    'Krishna Kanth - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Krishna Kanth',
  siteShortName: 'Krishna Kanth',
  siteUrl: 'https://krishnaUIDev.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@krishnakanth',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'krishnakanth',
  googleAnalyticsID: 'G-HRNTMWVXH9',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
