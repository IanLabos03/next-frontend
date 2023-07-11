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

export default function AskGpt() {
    const [question, setQuestion] = useState('')

    const AskGpt = () => {
        axios
            .post('/api/chatgpt/ask', { question })
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
            <form
                onSubmit={e => {
                    e.preventDefault()
                    AskGpt()
                }}>
                <TextField
                    margin="dense"
                    fullWidth
                    type="text"
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    label="Ask GPT"
                    variant="outlined"
                />
                <Button type="submit" variant="outlined">
                    Ask GPT
                </Button>
            </form>
        </>
    )
}
