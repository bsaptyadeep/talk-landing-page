import { Box, IconButton } from '@mui/material'
import React from 'react';
import css from './styles.module.css'
import { INavigationItem } from '../NavBar';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
    handleClose: () => void,
    navigationMap: INavigationItem[]
}

const HamburgerMenu = (props: IProps) => {
    return (
        <Box className={css.hamburgerMenu}>
            <Box className={css.closeHamburgerMenuButton}>
                <IconButton onClick={props.handleClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
            {
                props.navigationMap.flatMap((navigationItem) => {
                    return (
                        <Box className={css.hamburgerMenuItem} key={`hamburger-menu-${navigationItem.id}`}>
                            {navigationItem.label}
                        </Box>
                    )
                })
            }
        </Box>
    )
}

export default HamburgerMenu