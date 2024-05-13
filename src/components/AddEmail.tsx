import { Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react';
import css from "./AddEmail.module.css";
import axios from 'axios';
import { SERVER_URL } from '../constants';

const AddEmail = () => {
    const [email, setEmail] = useState<string>("");
    const [isJoining, setIsJoining] = useState<boolean>(false)

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleJoinNow = async () => {
        try {
            setIsJoining(true)
            const apiResponse = await axios.post(`${SERVER_URL}/waitlist?email=${email}`)
            if (apiResponse.data.response === "success") {
                alert(apiResponse.data.message)
            }
            setIsJoining(false)
        } catch (error) {
            console.log("Error Occured: ", error)
        }
    }

    return (
        <div id="join-by-email" className={css.addEmailContainer}>
            <input className={css.addEmailContainerInput}
                value={email}
                onChange={handleChangeEmail}
                placeholder='Type your Email'
                type='email' />
            <Button variant='contained'
                onClick={handleJoinNow}
                style={{
                    color: "#F4F3FF",
                    backgroundColor: "#6F3DFF",
                    borderRadius: 30
                }}>
                Join Now
                {
                    isJoining &&
                    <CircularProgress
                        style={{ marginLeft: 10, color: "#F4F3FF", height: 15, width: 15 }} />
                }
            </Button>
        </div>
    )
}

export default AddEmail
