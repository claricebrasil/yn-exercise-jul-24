import { Create, Delete } from '@mui/icons-material'
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useResetAnswers } from '../../api-hooks/useResetAnswers'
import { DomainAnswers, DomainOption } from '../../domain/types'
import { useAnswersStore } from '../../state'
import { capitalizeName, formatedInterest } from '../../utils/helpers'

const tableStyles: React.CSSProperties = {
    minWidth: '650px',
    width: '100%',
}

const headerStyles: React.CSSProperties = {
    padding: '6px',
}

const headerTitleStyles: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 'bold',
}

export const TableView = () => {
    const navigate = useNavigate()
    const answers = useAnswersStore(state => state.getAnswers())
    const { resetAnswers } = useResetAnswers()

    const formatRows = (answers: DomainAnswers) =>
        Object.entries(answers).map(([key, value]) => ({
            name: capitalizeName(key),
            value:
                key === 'interests'
                    ? formatedInterest(value as DomainOption[])
                    : value,
        }))

    const _answers = formatRows(answers)

    return (
        <div id="table-view" className="table-view">
            <div className="table-view-action-buttons">
                <IconButton aria-label="edit" onClick={() => navigate('/form')}>
                    <Create />
                </IconButton>
                <IconButton aria-label="delete" onClick={resetAnswers}>
                    <Delete />
                </IconButton>
            </div>
            <TableContainer component={Paper}>
                <Table sx={tableStyles} aria-label="simple table">
                    <TableHead sx={headerStyles}>
                        <TableRow>
                            <TableCell sx={headerTitleStyles}>
                                Questions
                            </TableCell>
                            <TableCell align="right" style={headerTitleStyles}>
                                Answers
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {_answers.map((answer, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {answer.name}
                                </TableCell>
                                <TableCell align="right">
                                    {answer.value as string}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
