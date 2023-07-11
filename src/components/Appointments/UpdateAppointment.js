import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Typography from '@mui/material/Button'
import axios from '@/lib/axios'
export default function UpdateAppointment({ id, onUpdate }) {
    const [open, setOpen] = useState(false)
    const [appointment, setAppointment] = useState(null)
    const [newComplain, setNewComplain] = useState('')
    const [newDateandtime, setNewDateandtime] = useState('')

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const response = await axios.get(`/api/appointments/${id}`)
                setAppointment(response.data.appointments)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAppointment()
    }, [id])

    const updateAppointment = async () => {
        try {
            await axios.put(`/api/appointments/${id}`, {
                complain: newComplain,
                dateandtime: newDateandtime,
            })
            onUpdate()
            handleClose()
        } catch (error) {
            console.log(error)
        }
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleComplainChange = event => {
        setNewComplain(event.target.value)
    }

    const handleDateandtimeChange = event => {
        setNewDateandtime(event.target.value)
    }

    return (
        <>
            <IconButton variant="outlined" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Appointment</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update an appointment</DialogContentText>
                    <>
                        <Typography variant="body1">Date and Time</Typography>
                        <TextField
                            margin="dense"
                            fullWidth
                            type="datetime-local"
                            value={newDateandtime}
                            onChange={handleDateandtimeChange}
                            required
                        />
                        <Typography variant="body1">Complain</Typography>
                        <TextField
                            margin="dense"
                            label="New Complain"
                            type="text"
                            fullWidth
                            value={newComplain}
                            onChange={handleComplainChange}
                        />
                    </>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={updateAppointment}>Update</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
