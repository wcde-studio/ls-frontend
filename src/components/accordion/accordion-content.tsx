import React from 'react';

import styles from './accordion-content.module.css';

import Link from 'next/link';

const AccordionContent = () => {
  return (
    <div className='content-wrapper'>
      <div className="suitable-wraper">
        <p className="suitable-title">Кому подходит</p>
        <span className="suitable-text"></span>
      </div>
      <div className="description-wrapper">
        <ul className="description-list">
          <li className="description-item">
            <div className="description-item_dot"></div>
            <span className="description-item_text"></span>
          </li>
        </ul>
      <div className="price-wrapper">
        <div className="paice-cotainer">
          <p className="pay-value"></p>
          <div className="description-container">
            <span className="description-text"></span>
          </div>
        </div>
      </div>
      <div className="note"></div>
      <div className="application-link">
        <Link href={'/'}>Оставить заявку</Link>
      </div>
      </div>
    </div>
  );
};

export default AccordionContent;
