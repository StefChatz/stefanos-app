import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Card.scss';

export const Card = ({game}) => {
  // destructuring clean code best practice
  const {
    name,
    header_image: headerImage,
    platforms: {
      linux,
      mac,
      windows,
    },
    ...rest // spread operator / rest operator
  } = game;

  console.log('rest', rest);

  return (
    <a className="tab_item app_impression_tracked">
      <div className="tab_item_cap">
        <img className="tab_item_cap_img" src={headerImage}/>
      </div>
      <div className="tab_item_content">
        <span className="tab_item_name" >{name}</span>
        {/* Conditional rendering*/}
        {linux && <AcUnitIcon/>}
        {mac && <AccessibilityIcon/>}
        {windows && <AccountBalanceIcon/>}
        <div className="tab_item_details">
          <span className="platform_img win" />
          <div className="tab_item_top_tags">
            <li className="top_tag">{}</li>
          </div>
        </div>


      </div>
    </a>
  );
};
