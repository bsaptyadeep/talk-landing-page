import { Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import css from './styles.module.css';
import Logo from '../../assets/images/Frame 14410.png';
import MenuIcon from '@mui/icons-material/Menu';
import HamburgerMenu from '../HamburgerMenu';

export interface INavigationItem {
    id: string,
    label: string,
    route: string
}

const navigationMap: INavigationItem[] = [
    {
        id: "features",
        label: "Features",
        route: "/"
    },
    // {
    //     id: "integrations",
    //     label: "Integrations",
    //     route: "/"
    // },
    // {
    //     id: "pricing",
    //     label: "Pricing",
    //     route: "/"
    // },
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
    const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false)

    const handleCloseHamburgerMenu = () => {
        setOpenHamburgerMenu(false)
    }

    return (
        <Box className={css.navigationMenu}>
            <img className={css.siteLogo} src={Logo} alt="logo" />
            <Box className={css.navigationMenuList}>
                {
                    navigationMap.map((navItem) => {
                        return (
                            <Box key={`menu-${navItem.id}`} className={`${css.navigationMenuListItem}
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
                <a style={{ textDecoration: "none" }} href="https://data-matter.vercel.app/">
                    <button className={css.violetButton}>
                        Sign Up
                    </button>
                </a>
            </Box>
            <Box className={css.HamburgerMenuIcon}>
                <IconButton onClick={() => {
                    setOpenHamburgerMenu(true)
                }}>
                    <MenuIcon />
                </IconButton>
            </Box>
            {
                openHamburgerMenu &&
                <HamburgerMenu
                    navigationMap={navigationMap}
                    handleClose={handleCloseHamburgerMenu} />
            }

        </Box>
    )
}

export default Navbar