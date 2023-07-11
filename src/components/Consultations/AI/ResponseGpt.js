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
import { Paper } from '@mui/material'

export default function ResponseGpt() {
    const [response, setResponse] = useState('')

    const ResponseGpt = () => {
        axios
            .get('/api/chatgpt/response')
            .then(res => {
                console.log(res)
                console.log(res.data)
                onCreate()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Paper>
                <Typography variant="body1">Response</Typography>
            </Paper>
        </>
    )
}
