import { Box } from '@mui/material'
import React, { useState } from 'react'
import css from './styles.module.css';
import Logo from '../../assets/images/square.svg';

const navigationMap = [
    {
        id: "features",
        label: "Features",
        route: "/"
    },
    {
        id: "integrations",
        label: "Integrations",
        route: "/"
    },
    {
        id: "pricing",
        label: "Pricing",
        route: "/"
    },
    {
        id: "liveDemo",
        label: "Live Demo",
        route: "/"
    },
    {
        id: "blog",
        label: "Blog",
        route: "/"
    }
]

const Navbar = () => {
    const [activeNavigationItem, setActiveNavigationItem] = useState<string>("features")

    return (
        <Box className={css.navigationMenu}>
            <img className={css.siteLogo} src={Logo} alt="logo" />
            <Box className={css.navigationMenuList}>
                {
                    navigationMap.map((navItem) => {
                        return (
                            <Box key={navItem.id} className={`${css.navigationMenuListItem}
                            ${activeNavigationItem === navItem.id && css.activeNavigationItem}`}
                                onClick={() => {
                                    setActiveNavigationItem(navItem.id)
                                }}>
                                {
                                    navItem.label
                                }
                            </Box>
                        )
                    })
                }
            </Box>
            <Box className={css.navRightButtonGroup}>
                <button className={css.plainButton}>
                    Become a partner
                </button>
                <a style={{ textDecoration: "none"}} href="https://data-matter.vercel.app/">
                    <button className={css.violetButton}>
                        Sign Up
                    </button>
                </a>
            </Box>
        </Box>
    )
}

export default Navbar