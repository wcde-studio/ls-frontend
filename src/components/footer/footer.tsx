import styles from './footer.module.css';
import React from 'react';

import Link from 'next/link';

import WCDEIcon from '@/ui/icons/wcde-icon';
import TelegramIcon from '@/ui/icons/telegram-icon';
import WhatsUpIcon from '@/ui/icons/whats-up-icon';
import VKIcon from '@/ui/icons/vk-icon';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-container']}>
          <nav className={styles['site-map-container']}>
            <ul className={styles['site-map-links-wrapper']}>
              <li className={styles['site-map-link']}>
                <Link  href={'/'}>
                  Главная
                </Link>
              </li>
              <li className={styles['site-map-link']}>
                <Link href={'/'}>
                  Курсы
                </Link>
              </li>
              <li className={styles['site-map-link']}>
                <Link href={'/'}>
                  Контакты
                </Link>
              </li>
              <li className={styles['site-map-link']}>
                <Link href={'/'}>
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles['social-links-container']}>
            <ul className={styles['social-links-wrapper']}>
              <li className={styles['social-link']}>
                <Link href={'/'}>
                  <TelegramIcon />
                </Link>
              </li>
              <li className={styles['social-link']}>
                <Link href={'/'}>
                  <WhatsUpIcon />
                </Link>
              </li>
              <li className={styles['social-link']}>
                <Link href={'/'}>
                  <VKIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles['attention']}>
          <p className={styles['attention-text']}>Любое копирование материалов сайта допускается только с разрешения правообладателя</p>
        </div>
        <div className={styles['privacy-policy']}>
          <div className={styles['privacy-policy-link']}>
            <Link href={'/'}>
              Пользовательское соглашение
            </Link>
          </div>
          <div className={styles['creators']}>
            <div className={styles['creators-logo']}>
              <WCDEIcon/>
            </div>
            <div className={styles['creators-name']}>Сделано WCDE.studio 2023</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
