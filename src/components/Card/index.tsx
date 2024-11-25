import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import styles from './styles.module.scss'

const Card = () => {

    const [isModalOpen, setIsModalOpen] = useState(Boolean)
    const [type, setType] = useState('')
    const [id, setId] = useState<string>('')

    const openModal = (type: string, id: string) => {
        setType('add')
        setId(id)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // const fetchTasks = async () => {
    //     const response = await fetchUserTasks(id);
    //     if (response.success === true) {
    //         setTasks(response.data)
    //     }
    // }

    return (
        <>
            <div className={styles.cardContainer}>
                <div className={styles.card} onClick={() => { }}>
                    <div className={styles.tasks}>
                        <div className='flex justify-center'>
                            <h3 className='font-normal text-lg'>Your tasks</h3>
                        </div>
                        {/* <ul className=''>
                            {tasks && tasks.map(task => (
                                <>
                                    <li className='flex justify-between mt-5'>
                                        <div className='flex gap-3'>
                                            <div className={styles.checkbox}>
                                                <input type="checkbox" name="" id="" onClick={() => update(task, TaskStatus.COMPLETED)} />
                                            </div>
                                            <p className='text-base font-normal'>{task.title}</p>
                                        </div>
                                        
                        <Image className={styles.logo} src={trashIcon} alt='logo' width={24} height={24} onClick={() => openModal('delete', task.id)} />
                    </li>
                </>
                            )).slice(0, tasks.length)}
            </ul>
            {completedTasks.length > 0 && (
                <div className='flex justify-center mt-4'>
                    <h3 className='font-normal text-lg'>Tarefas finalizadas</h3>
                </div>
            )}
            <ul className='mt-2'>
                {completedTasks && completedTasks.map(task => (
                    <>
                        <li className='flex justify-between mt-4' key={task.id}>
                            <div className='flex gap-3'>
                                <label className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        checked={true}
                                        onClick={() => update(task, TaskStatus.PENDING)}
                                    />
                                    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M9 19l-7-7 1.414-1.414L9 16.172l11.586-11.586L22 6l-13 13z" fill="#0796D3" />
                                    </svg>
                                </label>
                                <p className='text-base font-normal line-through'>{task.title}</p>
                            </div>
                            <Image className={styles.logo} src={trashIcon} alt='logo' width={24} height={24} onClick={() => openModal('delete', task.id)} />
                        </li>
                    </>
                )).slice(0, completedTasks.length)}
            </ul> */}
                    </div >
                    <div className='flex justify-center'>
                        <Button className='mt-[1em]' type={'primary'} text={'Add new task'} width={220} height={50} action={openModal} />
                    </div>
                </div >
                <Modal isModalOpen={isModalOpen} type={type} closeModal={closeModal} id={id} />
            </div >
        </>
    )
}

export default Card;