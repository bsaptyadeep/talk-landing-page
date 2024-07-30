import React from 'react';
import css from './style.module.css';
import { Box } from '@mui/material';
import { MAVEN_AI_APPLICATION } from '../../constants';
import Features from '../features';

const IntroPage = () => {
  return (
    <Box className={css.introPage}>
      <Box className={css.tryNew}>
        <a style={{ textDecoration: "none" }} href={MAVEN_AI_APPLICATION}>
          <Box className={css.tryNewLeft}>
            Try Now
          </Box>
        </a>
        <Box className={css.tryNowDivider}>
          |
        </Box>
        <Box className={css.tryNewRight}>
          MavenAI is Live
        </Box>
      </Box>
      <Box className={css.introHeaderContainer}>
        <p className={css.introHeader}>
          Chatting is <span>Coding</span>
        </p>
        <p className={css.introText}>
          Stop worrying about making applications to query your SQL Database. Try MavenAI, we seemlessly connect with your SQL Database to skyrocket your productivity.
        </p>
      </Box>
      <Box className={css.introButtonContainer}>
        <Box className={css.introButtonGroup}>
          <a style={{ textDecoration: "none" }} href={MAVEN_AI_APPLICATION}><button className={css.violetButton}>
            Try for free
          </button></a>
          <button className={css.greyButton}>
            Request a demo
          </button>
        </Box>
        <p className={css.freePlanText}>Free plan - No card required</p>
      </Box>
      <Features />
    </Box>
  )
}

export default IntroPage