import React from 'react';

import { Button } from './Button';
import './header.css';

export interface UserProps {
  email: string,
  username: string,
}
export interface HeaderProps {
  user?: UserProps;
  title: string,
  imgPath: string,
  titleColor: string,
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

interface HeaderTitleProps {
  title: string;
  imgPath: string;
  titleColor: string;
}

export const HeaderTitle:React.FC<HeaderTitleProps> = ({ title='Freeground', imgPath='', titleColor }) => {
  return(
    <div style={{ display:'inline-block' }} >
      <img src={imgPath} />
      <div style={ { display: 'inline-block', color: titleColor, fontWeight:600 } } >
        {title}          
      </div>
    </div>
  )
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount, title, titleColor, imgPath="@stories/assets/vercel.svg" }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
          <HeaderTitle
            title={title}
            titleColor={titleColor}
            imgPath={imgPath}
          />
      </div>
      <div>
        {user && user.email && user.username ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
