import React from 'react'
import Typography from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { Container, Stack } from '@mui/material'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import DeleteAppointment from './DeleteAppointment'
import UpdateAppointment from './UpdateAppointment'
import AppointmentDialog from './CreateAppointment'
import moment from 'moment'

export default function AppointmentList({ user }) {
    const [appointments123, setAppointments] = useState([])
    const [role, setRole] = useState('')

    console.log({ role })

    useEffect(() => {
        if (user && user.id) {
            fetchRole()
        }
    }, [user])

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('/api/appointments')
            // console.log({ response })
            setAppointments(response.data.appointments)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAppointmentsByUser = async () => {
        try {
            const response = await axios.get(`/api/appointments/${user.id}`)
            // console.log({ response })
            setAppointments(response.data.appointments)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchRole = async () => {
        try {
            const response = await axios.get(`/api/roles/${user.id}`)
            console.log({ response })
            setRole(response.data.user.role)
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = () => {
        fetchAppointments()
    }

    const handleDelete = () => {
        fetchAppointments()
    }

    const handleCreate = () => {
        fetchAppointments()
    }

    useEffect(() => {
        if (role === 'admin') {
            fetchAppointments()
        } else {
            fetchAppointmentsByUser()
        }
    }, [role])

    return (
        <>
            <Container>
                <Box
                    sx={{
                        mb: 3,
                    }}>
                    <AppointmentDialog onCreate={handleCreate} />
                </Box>
                {appointments123.length > 0 ? (
                    appointments123.map(appointment => (
                        <Stack
                            spacing={2}
                            key={appointment.id}
                            direction={'column'}
                            sx={{
                                mt: 2,
                            }}>
                            <Paper>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Box>
                                        <Stack direction={'row'}>
                                            <Typography variant="body1">
                                                Complaint:{' '}
                                            </Typography>
                                            <Typography variant="body1">
                                                {appointment.complain}
                                            </Typography>
                                        </Stack>

                                        <Stack direction={'row'}>
                                            <Typography variant="body1">
                                                Date and Time:{' '}
                                            </Typography>
                                            <Typography variant="body1">
                                                {moment(
                                                    appointment.dateandtime,
                                                ).format(
                                                    'MMMM Do YYYY, h:mm:ss a',
                                                )}
                                            </Typography>
                                        </Stack>
                                        <Stack direction={'row'}>
                                            <Typography variant="body1">
                                                Patient Name:{' '}
                                            </Typography>
                                            <Typography variant="body1">
                                                {appointment.user}
                                            </Typography>
                                        </Stack>
                                    </Box>
                                    <Box>
                                        <DeleteAppointment
                                            id={appointment.id}
                                            onDelete={handleDelete}
                                        />
                                        <UpdateAppointment
                                            id={appointment.id}
                                            onUpdate={handleUpdate}
                                        />
                                    </Box>
                                </Box>
                            </Paper>
                        </Stack>
                    ))
                ) : (
                    <Typography variant="body1" component="div">
                        No appointments found.
                    </Typography>
                )}
            </Container>
        </>
    )
}
