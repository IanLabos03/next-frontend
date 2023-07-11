import React, { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Button'
import axios from '@/lib/axios'

export default function AppointmentDialog({ onCreate }) {
    const [open, setOpen] = React.useState(false)
    const [dateandtime, setDateAndTime] = useState('')
    const [complain, setComplain] = useState('')

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const createAppointment = () => {
        axios
            .post('/api/appointments/create', { dateandtime, complain })
            .then(res => {
                console.log(res)
                console.log(res.data)
                onCreate()
                handleClose()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Button variant="oulined" onClick={handleClickOpen}>
                Create Appointment
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        createAppointment()
                    }}>
                    <DialogTitle>Appointment</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create an appointment
                        </DialogContentText>
                        <Typography variant="body1">Date and Time</Typography>
                        <TextField
                            margin="dense"
                            fullWidth
                            type="datetime-local"
                            value={dateandtime}
                            onChange={e => setDateAndTime(e.target.value)}
                            required
                        />
                        <Typography variant="body1">Complain</Typography>
                        <TextField
                            margin="dense"
                            fullWidth
                            type="text"
                            value={complain}
                            onChange={e => setComplain(e.target.value)}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Create</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}
