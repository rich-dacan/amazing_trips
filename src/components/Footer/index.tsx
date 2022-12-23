import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  AttendanceRow,
  ButtonsContainer,
  ContactsColumn,
  ContainerDesktop,
  ContainerMobile,
  DownloadOurAppMobile,
  FooterGridDesktop,
  FooterGridMobile,
  IconBackground,
  LinksColumn,
  SocialMediaSection
} from './styles';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';


const Footer: React.FC = () => {
  return (
    <>
      <ContainerDesktop>
        <FooterGridDesktop>
          <ContactsColumn>
            <Image
              width="100"
              height="80"
              src="https://d1fdloi71mui9q.cloudfront.net/eB7iDcvMRUeJMWBRM3lz_DYS2JQak7WQ466r6"
              alt="Logo Renewals"
              quality={100}
              priority
            />

            <div>
              <p>
                © All rights reserved
                <br />
                Amazing Trips 2005 - {new Date().getFullYear()} &reg;
              </p>
            </div>

            <div>
              <h3>Sales</h3>
              <p>
                <Link href="https://api.whatsapp.com/send?phone=5511111111111&text=Olá,%20poderia%20me%20ajudar?"
                legacyBehavior
                >
                  <a target="_blank">
                    <FaWhatsapp /> +55 (11) 1 1111-1111 - For Enterprises
                  </a>
                </Link>
              </p>
              <p>
                <Link href="https://api.whatsapp.com/send?phone=5511111111111&text=Olá,%20poderia%20me%20ajudar?"
                legacyBehavior
                >
                  <a target="_blank">
                    <FaWhatsapp /> +55 (11) 1 1111-1111
                  </a>
                </Link>
              </p>
              <p>
                <Link
                  href={`https://api.whatsapp.com/send?phone=5511111111111&text=Olá,%20poderia%20me%20ajudar?`}
                  legacyBehavior
                >
                  <a target="_blank">
                    <FaWhatsapp /> +55 (11) 1 1111-1111
                  </a>
                </Link>
              </p>
            </div>

            <div>
              <h3>Service & Support</h3>
              <p>
                <Link
                  href={`https://api.whatsapp.com/send?phone=5511111111111&text=Ol%C3%A1,%20poderia%20me%20ajudar?`}
                  legacyBehavior
                >
                  <a target="_blank">
                    <FaWhatsapp /> {"+55111111111"}
                  </a>
                </Link>
              </p>
              <p>
                <Link href="#" legacyBehavior>
                  <a
                    href="mailto:support@amazing-trips.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>Email:</strong> support@amazing-trips.com
                  </a>
                </Link>
              </p>
            </div>
          </ContactsColumn>

          <LinksColumn>
            <AttendanceRow>
              <div>
                <h3>Column One</h3>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 1</a>
                  </Link>
                </p>
                <p>
                  <a href="#">Link 2</a>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 3</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 4</a>
                  </Link>
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#"
                  >
                    Link 5
                  </a>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>About us</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Contact</a>
                  </Link>
                </p>
              </div>

              <div>
                <h3>Column Two</h3>
                <p>
                  <Link href="/blog" legacyBehavior>
                    <a>Articles</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Ebooks</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Videos</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link</a>
                  </Link>
                </p>
              </div>

              <div>
                <h3>Column Three</h3>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 1</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 2</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 3</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 4</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 5</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 6</a>
                  </Link>
                </p>
                <p>
                  <Link href="#" legacyBehavior>
                    <a>Link 7</a>
                  </Link>
                </p>
              </div>
            </AttendanceRow>

            <SocialMediaSection>
              {/* <div>
                <h3>Download our app:</h3>

                <Link href="https://play.google.com/store/apps/details?id=#" legacyBehavior>
                  <a target="_blank">
                    <Image
                      height="48"
                      width="162"
                      src="https://imagens-voitto.s3.amazonaws.com/assets/google-play-icon.svg"
                      alt="Google Play"
                    />
                  </a>
                </Link>
                <Link href="https://itunes.apple.com/br/app/#/id#" legacyBehavior>
                  <a target="_blank">
                    <Image
                      height="48"
                      width="162"
                      src="https://imagens-voitto.s3.amazonaws.com/assets/app-store-icon.svg"
                      alt="Apple Store"
                    />
                  </a>
                </Link>
              </div> */}
              <div>
                <h3>Follow our social media: </h3>
                <div>
                  <IconBackground
                    title="Facebook"
                    target="_blank"
                    href="https://facebook.com/#"
                  >
                    <FaFacebookF />
                  </IconBackground>

                  <IconBackground
                    title="Instagram"
                    target="_blank"
                    href="https://instagram.com/#"
                  >
                    <FaInstagram />
                  </IconBackground>

                  <IconBackground
                    title="LinkedIn"
                    target="_blank"
                    href="https://br.linkedin.com/company/#"
                  >
                    <FaLinkedin />
                  </IconBackground>

                  <IconBackground
                    title="Youtube"
                    target="_blank"
                    href="https://youtube.com/#"
                  >
                    <FaYoutube />
                  </IconBackground>
                </div>
              </div>
            </SocialMediaSection>
          </LinksColumn>
        </FooterGridDesktop>
      </ContainerDesktop>

      <ContainerMobile>
        <FooterGridMobile>
          <div>
            <Image
              src="https://d1fdloi71mui9q.cloudfront.net/eB7iDcvMRUeJMWBRM3lz_DYS2JQak7WQ466r6"
              alt="Logo Amazing Trips"
              width={100}
              height={82}
              quality={100}
              priority
            />

            <div className='social__media'>
              <IconBackground
                title="Facebook"
                target="_blank"
                href="https://facebook.com/#"
              >
                <FaFacebookF />
              </IconBackground>

              <IconBackground
                title="Instagram"
                target="_blank"
                href="https://instagram.com/#"
              >
                <FaInstagram />
              </IconBackground>

              <IconBackground
                title="LinkedIn"
                target="_blank"
                href="https://br.linkedin.com/company/#"
              >
                <FaLinkedin />
              </IconBackground>

              <IconBackground
                title="Youtube"
                target="_blank"
                href="https://youtube.com/#"
              >
                <FaYoutube />
              </IconBackground>
            </div>

            <DownloadOurAppMobile>
              <p>Baixe o app e fique conectado</p>

              <ButtonsContainer>
                <Link href="https://play.google.com/store/apps/details?#"
                legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      height="48"
                      width="162"
                      src="https://imagens-voitto.s3.amazonaws.com/assets/google-play-icon.svg"
                      alt="Google Play"
                    />
                  </a>
                </Link>
                <Link href="https://itunes.apple.com/br/app/#/id#"
                legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      height="48"
                      width="162"
                      src="https://imagens-voitto.s3.amazonaws.com/assets/app-store-icon.svg"
                      alt="Apple Store"
                    />
                  </a>
                </Link>
              </ButtonsContainer>
            </DownloadOurAppMobile>
          </div>
          <div className="copyright__block">
            <div>
              <p>
                © All rights reserved
                <br />
                Amazing Trips Tech 2020 - {new Date().getFullYear()} &reg;
              </p>
              <Link href="https://www.amazing-trips.com.br" legacyBehavior>
                www.amazing-trips.com
              </Link>
            </div>
          </div> 
        </FooterGridMobile>
      </ContainerMobile>
    </>
  );
};

export default Footer;
