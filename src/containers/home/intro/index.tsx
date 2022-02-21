import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from '../../../components/gatsby-image';
import SocialProfile from '../../../components/social-profile/social-profile';
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  Desciption,
  IntroInfo,
} from './style';
import {
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoGithub,
} from 'react-icons/io';

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: 'https://www.facebook.com/lucas.wang.9693/',
    tooltip: 'Facebook',
  },
  {
    icon: <IoLogoInstagram />,
    url: '#',
    tooltip: 'Instagram',
  },
  {
    icon: <IoLogoYoutube />,
    url: 'https://www.youtube.com/channel/UCM24zCFbyscKVAuATy_BJvQ',
    tooltip: 'Youtube',
  },
  {
    icon: <IoLogoGithub />,
    url: 'https://www.github.com/Lucaswang750',
    tooltip: 'Github',
  },
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.png/" }) {
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

  const { author, about } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.gatsbyImageData;

  return (
    <IntroWrapper>
      <IntroImage>
        <GatsbyImage src={AuthorImage} alt="author" />
      </IntroImage>
      <IntroInfo>
        <IntroTitle>
          Hey! I’m <b>{author}</b>
        </IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroInfo>
    </IntroWrapper>
  );
};

export default Intro;
