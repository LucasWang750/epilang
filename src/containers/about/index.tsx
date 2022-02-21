import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../components/gatsby-image';
import SocialProfile from '../../components/social-profile/social-profile';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from './style';

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/redqinc/',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: 'https://www.instagram.com/redqinc/',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoTwitter />,
    url: 'https://twitter.com/redqinc',
    tooltip: 'Twitter',
  },
  {
    icon: <IoLogoLinkedin />,
    url: 'https://www.linkedin.com/company/redqinc/',
    tooltip: 'Linked In',
  },
];

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Lucas</h2>
        <p>
          Hi! I'm an undergraduate student studying Electrical Engineering and Computer Science. I'm interested in the unlimited things that's possible through software engineering. On this website I will be occasionally posting projects that I've been working on. This is my journey through trial and error while working on projects that pique my interest. Hopefully, my growth and struggles can help others who are also aspiring to be a better developer!
        </p>
        <p>
          In my free time, I like to watch youtube videos(where I get my inspiration from), read books and hang out with friends!
        </p>
      </AboutPageTitle>

      {/* <AboutImage>
        <GatsbyImage src={Data.avatar.childImageSharp.gatsbyImageData} alt="about" />
      </AboutImage>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails> */}
    </AboutWrapper>
  );
};

export default About;
