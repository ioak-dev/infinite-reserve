import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import infinitereserveWhiteSmall from '../../images/infinitereserve_white_small.svg';
import infinitereserveWhiteText from '../../images/infinitereserve_white_text.svg';
import infinitereserveBlackSmall from '../../images/infinitereserve_black_small.svg';
import infinitereserveBlackText from '../../images/infinitereserve_black_text.svg';
import infinitereserveBlack from '../../images/infinitereserve_black.svg';

interface Props {
  variant: 'full' | 'short';
}

const Logo = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      <div className="logo--image">
        {profile.theme === 'basicui-light' && (
          <img src={infinitereserveBlackSmall} alt="Infinitereserve logo" />
        )}
        {profile.theme === 'basicui-dark' && (
          <img src={infinitereserveWhiteSmall} alt="Infinitereserve logo" />
        )}
      </div>
      {props.variant === 'full' && (
        <div className="logo--text">
          {profile.theme === 'basicui-light' && (
            <img src={infinitereserveBlackText} alt="Infinitereserve logo" />
          )}
          {profile.theme === 'basicui-dark' && (
            <img src={infinitereserveWhiteText} alt="Infinitereserve logo" />
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;
