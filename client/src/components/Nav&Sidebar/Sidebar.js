import React from 'react'
import * as s from './Nav&Sb.style';
const Sidebar = (props) => {
  const {height='100vh', width='80px'}= props;
  return (
    <s.Sidebar height={height} width={width}>
      <a href='https://twitter.com' target='blank'><img src='/images/TwitterLogo.svg'></img></a>
      <s.Spacer/>
      <a href='https://discord.com' target='blank'><img src='/images/DiscordLogo.svg'></img></a>
    </s.Sidebar>
  )
}

export default Sidebar