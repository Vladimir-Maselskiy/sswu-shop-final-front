import { Box } from '../Box/Box';
import { Container } from '../Container/Container';
import './Footer.scss';

export const Footer = () => {
  const contactsItems = [
    { title: 'Email', content: 'needhelp@Organia.com' },
    { title: 'Phone', content: '666 888 888' },
    { title: 'Address', content: '88 road, borklyn street, USA' },
  ];
  const socialItems = new Array(4).fill(null);
  const pagesItems = [
    'Style Guide',
    '404 Not Found',
    'Password Protected',
    'Licences',
    'Changelog',
  ];

  return (
    <Container className="footer">
      <>
        <Box className="footer__content">
          <>
            <div id="footer-box" className="footer__contacts-box">
              <div className="footer-contacts__title">Contact Us</div>
              {contactsItems.map(({ title, content }) => (
                <div key={title} className="footer-contacts__item">
                  <p className="footer-contacts__item-title">{title}</p>
                  <a
                    href="#footer-box"
                    className="footer-contacts__item-content"
                  >
                    {content}
                  </a>
                </div>
              ))}
            </div>
            <div className="footer__logo-box">
              <div className="footer__logo"></div>
              <p className="footer__logo-description">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>
              <ul className="footer__social-list">
                {socialItems.map((item, index) => (
                  <li key={index} className="footer__social-item">
                    <a href="#footer-box" className="footer__social-item"></a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer__pages-box">
              <p className="footer__pages-title">Utility Pages</p>
              {pagesItems.map(item => (
                <p className="footer__pages-item">{item}</p>
              ))}
            </div>
          </>
        </Box>
        <div className="footer__copyright-divider"></div>
        <p className="footer__copyright-text">
          Copyright © <span>Organick</span> | Designed by
          <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
        </p>
      </>
    </Container>
  );
};
