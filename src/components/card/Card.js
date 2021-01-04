import React from 'react';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
// import AccessibilityIcon from '@material-ui/icons/Accessibility';
// import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import './Card.scss';

export const Card = ({game}) => {
  return (
    <div className="sale_capsule">{game?.name}</div>
  );
};
