import { createTask } from '@/api/services/taskService'
import { Task } from '@/model/Task'
import { TaskPriority } from '@/model/TaskPriority'
import { TaskStatus } from '@/model/TaskStatus'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { SetStateAction, useState } from 'react'
import Button from '../Button'
import styles from './styles.module.scss'

interface ModalProps {
    id: string
    isModalOpen: boolean
    type: string
    closeModal: () => void
}

const Modal = ({ isModalOpen, type, closeModal, id }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');
    const [date, setDate] = useState<Dayjs | Date | string>()
    // const [notification, setNotification] = useState(Boolean);

    const criarTask = async () => {
        const task: Task = {
            title: title,
            status: status as TaskStatus,
            priority: priority as TaskPriority,
            dueDate: new Date(),
            userId: id
        }
        if (!title.trim()) {
            // setNotification(true)
            // setText('O título da tarefa não pode ser vazio')
        }
        else {
            await createTask(task).then(() => {
                // setNotification(true)
                // setText('Tarefa criada com sucesso!')
                setTitle('')
                closeModal()
            })
        }
    }

    const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value)
    }
    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value)
    }

    const handleDate = (newDate: Dayjs | null) => {
        console.log(dayjs(newDate).format('YYYY-MM-DD'))
        const formattedDate = dayjs(newDate).format('YYYY-MM-DD')
        setDate(formattedDate)
    }


    // const deletarTask = async () => {
    //     if (id !== undefined) {
    //         await deleteTask(id).then(() => {
    //             setNotification(true)
    //             setText('Tarefa deletada com sucesso!')
    //             closeModal()
    //         })
    //     }
    // }

    // const close = () => {
    //     setNotification(false)
    // }
    return (
        <>
            {isModalOpen && (
                <div className={styles.modalContainer} onClick={closeModal}>
                    <div className={`${styles.modal} flex flex-col`} onClick={(e) => e.stopPropagation()}>
                        {type === 'add' ? (
                            <>
                                <div className='flex justify-start ml-'>
                                    <h2 className='font-bold text-2xl'>New task</h2>
                                </div>
                                <div className='mt-6'>
                                    <p className='flex justify-start lg:ml-0'>Title</p>
                                    <input type="text" placeholder='title...' value={title}
                                        onChange={(e: { target: { value: SetStateAction<string> } }) => setTitle(e.target.value)} />
                                </div>
                                <div className='mt-2'>
                                    <p className='flex justify-start lg:ml-0'>Description</p>
                                    <input type="text" placeholder='description...' value={description}
                                        onChange={(e: { target: { value: SetStateAction<string> } }) => setDescription(e.target.value)} />
                                </div>
                                <div className={`mt-2`}>
                                    <p className='flex justify-start lg:ml-0'>Due date</p>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker sx={{
                                            display: "flex",
                                            "& .MuiOutlinedInput-root": {
                                                width: "100%",
                                                height: "50px",
                                                borderRadius: "8px",
                                                borderColor: "#dfdfdf"
                                            },
                                            "& .MuiInputBase-input": {
                                                fontSize: "1.2rem",
                                                border: "none",
                                                height: "50px",
                                            },
                                            "& .MuiInputBase-input:hover": {
                                                border: "none",
                                            },
                                        }} value={date ? dayjs(date) : null} onChange={(newDate) => handleDate(newDate)} />
                                    </LocalizationProvider>
                                </div>
                                <div className='mt-2'>
                                    <p className='flex justify-start'>Priority:</p>
                                    <select className="select" onChange={(e) => handlePriorityChange(e)}>
                                        <option value={"VERY_HIGH"}>VERY HIGH</option>
                                        <option value={"HIGH"}>HIGH</option>
                                        <option value={"MEDIUM"}>MEDIUM</option>
                                        <option value={"LOW"}>LOW</option>
                                        <option value={"VERY_LOW"}>VERY LOW</option>
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <p className='flex justify-start' >Status:</p>
                                    <select className="select" onChange={(e) => handleStatusChange(e)}>
                                        <option value={"IN_PROGRESS"}>In progress</option>
                                        <option value={"COMPLETED"}>Completed</option>
                                        <option value={"PENDING"}>Pending</option>
                                    </select>
                                </div>
                                <div className='mt-8 gap-4 flex flex-col-reverse lg:flex-row'>
                                    <div>
                                        <button className={styles.cancelButton} onClick={closeModal}>Cancelar</button>
                                    </div>
                                    <div>
                                        <Button className={styles.addButton} type={'primary'} text={'Add'} action={criarTask} />
                                    </div>
                                </div>
                            </>
                        ) : type === 'delete' ? (
                            <>
                                <div className='flex justify-start ml-'>
                                    <h2 className='font-bold text-2xl '>Deletar tarefa</h2>
                                </div>
                                <div className='mt-6 flex'>
                                    <h3 className='flex text-start'>Tem certeza que você deseja deletar essa tarefa?</h3>
                                </div>
                                <div className='mt-8 gap-4 flex flex-col-reverse lg:flex-row'>
                                    <div>
                                        <button className={styles.cancelButton} onClick={closeModal}>Cancelar</button>
                                    </div>
                                    <div>
                                        <button className={styles.deleteButton} onClick={() => { }}>Deletar</button>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            )}
            {/* {notification && (
                <Notification text={text} Close={close} />
            )} */}
        </>
    )
}

export default Modal;