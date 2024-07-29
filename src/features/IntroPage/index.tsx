import React from 'react';
import css from './style.module.css';
import { Box, Typography } from '@mui/material';

const IntroPage = () => {
  return (
    <Box className={css.introPage}>
      <Box className={css.tryNew}>
        <Box className={css.tryNewLeft}>
          Try Now
        </Box>
        <Box className={css.tryNowDivider}>
          |
        </Box>
        <Box className={css.tryNewRight}>
          SiteGPT is Live
        </Box>
      </Box>
      <Box className={css.introHeaderContainer}>
        <p className={css.introHeader}>
          Build your <span>AI Workforce</span>
        </p>
        <p className={css.introText}>
          Recruit teams of AI agents to complete tasks on autopilot.
          ‍Grow your business, not your headcount.
        </p>
      </Box>
      <Box className={css.introButtonContainer}>
        <Box className={css.introButtonGroup}>
          <button className={css.violetButton}>
            Try for free
          </button>
          <button className={css.greyButton}>
            Request a demo
          </button>
        </Box>
        <p className={css.freePlanText}>Free plan - No card required</p>
      </Box>
    </Box>
  )
}

export default IntroPage