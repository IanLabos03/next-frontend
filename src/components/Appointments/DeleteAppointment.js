import React, { useState } from 'react'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import axios from '@/lib/axios'
import { Typography } from '@mui/material'

export default function DeleteAppointment({ id, onDelete }) {
    const [open, setOpen] = useState(false)
    const [appointment, setAppointment] = useState({})

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    const deleteAppointment = async () => {
        try {
            await axios.delete(`/api/appointments/${id}`)
            handleClose()
            onDelete()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <IconButton onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>Delete an appointment</DialogContentText>
                    <Typography variant="h5" component="div">
                        {/* Replace with actual appointment data */}
                        Appointment Details
                    </Typography>
                    <Typography variant="h5" component="div">
                        Confirm delete appointment
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={deleteAppointment}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
