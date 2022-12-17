import { useParams } from 'react-router-dom';
import { ITask } from './House';
import classes from './task.module.css';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useEffect, useLayoutEffect, useState } from 'react';

const Task = () => {
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const params = useParams();

    // TODO fetch task
    const task: ITask = {
        id: Number(params.id),
        created: new Date(),
        dueDate: new Date(),
        title: 'task 1',
        description: 'description bla bl a lba description bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lbadescription bla bl a lba'

    }

    useEffect(() => {
        setDueDate(task.dueDate);
    }, []);

    return (
        <div className={classes.container}>
            <TextField className={classes.title}
                       label="Title"
                       variant="outlined"
                       defaultValue={task.title}/>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                maxRows={10}
                defaultValue={task.description}

            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Due date"
                    value={dueDate}
                    onChange={(newDate) => {
                        setDueDate(newDate);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Task;
