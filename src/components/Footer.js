import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jaewoo Han</h1>
          {/* <PText></PText> */}
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Pages"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+12138406163',
                path: 'tel:+12138406163',
              },
              {
                title: 'jaehan213@gmail.com',
                path: 'mailto:jaehan213@gmail.com',
              },
              {
                title: 'Los Angeles, CA',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Socials"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/jaehan213',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/jaewoo-han-79911b250/',
              },
              // {
              //   title: 'Facebook',
              //   path: 'http://facebook.com',
              // },
              // {
              //   title: 'Twitter',
              //   path: 'http://twitter.com',
              // },
              // {
              //   title: 'Instagram',
              //   path: 'http://instagram.com',
              // },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Jaewoo Han | Shaif Arfan</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
