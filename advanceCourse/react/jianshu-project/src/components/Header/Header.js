import React from 'react'
import {
  HeaderWrapper,
  Logo,
  WriteBtn,
  Beta
} from './style'
import Nav from '@comp/Nav/Nav'
import Aa from '@comp/Aa/Aa'
import User from '@comp/User/User'
import {
  Right
} from '@css/var'
export default class Header extends React.Component{
  render(){
    return (<>
      <HeaderWrapper>
        <Logo />
        <Nav />
        <Right>
          <Aa />
          <Beta href="/" />
          <User />
          <WriteBtn><i className="iconfont icon-yumaobi" /> 写文章</WriteBtn>
        </Right>
      </HeaderWrapper>
    </>)
  }
}