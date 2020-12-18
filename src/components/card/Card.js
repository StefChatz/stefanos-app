// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Card.scss';

export const Card = ({game}) => {
  // edw prospathisa na kanw ena if statement
  // gia na kanei display mono ta swsta platforms
  // alla de doulepse
  // console.log('game', game);
  //
  //   if ({game.platform} === true) {
  //     return "windows"
  //   }else {
  //     return "none"
  //   }
  //

  return (
    <a className="tab_item app_impression_tracked">
      <div className="tab_item_cap">
        <img className="tab_item_cap_img" src={game.header_image}/>
      </div>
      <div className="tab_item_content">
        {/* eslint-disable-next-line max-len */}
        <li className="tab_item_name" key={game._id} game={game}>{game.name}</li>
        <div className="tab_item_details">
          <span className="platform_img win"></span>
          <div className="tab_item_top_tags">
            {/* eslint-disable-next-line max-len */}
            <li className="top_tag" key={game.categories.id} game={game}>{game.description}</li>
          </div>
        </div>

      </div>
    </a>
  );
};
