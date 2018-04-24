import React from 'react'
import styled, { css, injectGlobal } from 'styled-components'
import Link from 'gatsby-link'

import { COLORS, MEDIA, LINKS } from '../constants'

injectGlobal`
  @import url(http://fonts.googleapis.com/css?family=Buenard:400,700);
  
  body,
  html {
    margin: 0;
    padding: 0;
    font-family: 'Buenard', monospace;
  }

  body, 
  body * {
    box-sizing: border-box;
  }
`

const El = styled.div`
  min-height: 100vh;
  min-width: 600px;
  padding: 60px 0 120px;
  margin: 0 200px;
  background-color: ${COLORS.background};
  box-shadow: inset 0 0 100px #fff;  

  ${MEDIA.medium`
    min-width: 400px;
    padding: 40px 0 80px;
    margin: 0 100px;
  `}

  ${MEDIA.small`
    min-width: 200px;
    padding: 30px 0 60px;
    margin: 0 60px;  
  `}
`

// default style
const P = styled.p`
	text-shadow: 0 2px 0 #fff;
  color: ${COLORS.gray};
  
  padding: 0;
  margin: 0;
  font-weight: 400;

  display: inline;

  font-size: 55px;
  line-height: 75px;

  ${MEDIA.medium`
    line-height: 60px;
    font-size: 45px;
  `}

  ${MEDIA.small`
    line-height: 40px;
    font-size: 30px;
  `}
`

const H1 = P.withComponent('h1')

const A = styled.a`
  color: ${COLORS.primary};
  text-decoration: none;

  &:hover {
    color: ${COLORS.primaryLight};
  }
`

const Strong = styled.strong`
  color: ${COLORS.secondary};
  font-weight: 700;
`

const IndexPage = () => (
  <El>
    <H1>
      My name is <Strong>Morley Zhi.</Strong>{' '}
    </H1>
    <P>
      I make websites.{' '}
    </P>
    <P>
      I worked at <A href={LINKS.okc}>OkCupid</A> for a long time.{' '}
    </P>
    <P>
      Now I work at <A href={LINKS.lightyear}>Lightyear.</A>{' '}
    </P>
    <P>
      I made{' '}
      <A href={LINKS.bitywmf}>Bitch I Thought You Was My Friend,</A>{' '}
      <A href={LINKS.songranks}>SongRanks,</A>{' '}
      and <A href={LINKS.sadgoetz}>Sad Goetz.</A>{' '}
    </P>
    <P>
      I wrote{' '}
      <A href={LINKS.blogDirectories}>this</A>{' '}
      and{' '}
      <A href={LINKS.blogLocalhost}>this.</A>{' '}
    </P>
    <P>
      I’m on{' '}
      <A href='http://www.last.fm/user/verbalcontract'>Last.fm,</A>{' '}
      <A href='http://www.facebook.com/morley.zhi'>Facebook,</A>{' '}
      <A href='http://www.twitter.com/morley'>Twitter,</A>{' '}
      <A href='http://www.instagram.com/mo.rley'>Instagram,</A>{' '}
      and <A href='http://www.github.com/morleyzhi'>Github.</A>{' '}
    </P>
    <P>
      That’s it for <Strong>{process.env.GATSBY_DOMAIN}.</Strong>
    </P>
  </El>
)

export default IndexPage
