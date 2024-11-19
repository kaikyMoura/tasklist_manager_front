import { Task } from '@/model/Task'
import { TaskStatus } from '@/model/TaskStatus'
import { filterByTaskStatus, updateTask } from '@/services/taskService'
import { useEffect, useState } from 'react'
import Modal from '../Modal/modal'
import styles from './card.module.scss'

const Card = () => {

    const [tasks, setTasks] = useState<Task[]>([])
    const [completedTasks, setCompletedTasks] = useState<Task[]>([])
    const [isModalOpen, setIsModalOpen] = useState(Boolean)
    const [type, setType] = useState('')
    const [id, setId] = useState<number | undefined>()

    const openModal = (type: string, id: number | undefined) => {
        setType(type)
        setId(id)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const update = async (task: Task, status: TaskStatus) => {
        const updatedTask: Task = {
            id: task.id,
            title: task.title,
            status: status
        }
        await updateTask(updatedTask);
    }

    const fetchTasks = async () => {
        setTasks(await filterByTaskStatus(TaskStatus.PENDING))
        setCompletedTasks(await filterByTaskStatus(TaskStatus.COMPLETED))

    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.card} onClick={fetchTasks}>

                    <Modal isModalOpen={isModalOpen} type={type} closeModal={closeModal} id={id} />
                </div >
            </div>
        </>
    )
}

export default Card;