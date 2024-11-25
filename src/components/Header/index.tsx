import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const currentDate = new Date()

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }).format(currentDate);

        const finalDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        setDate(finalDate)
    }, [date])

    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.header}>

                    <div className='lg:flex justify-between mb-4 items-center'>
                        <div className='flex items-center gap-2'>
                            <FontAwesomeIcon className='' icon={faNoteSticky} fontSize={22}/>
                            <h2 className='font-bold text-2xl'>Task Manager</h2>
                        </div>
                        <div className=''>
                            <h2 className='font-medium text-xl lg:ml-24'>Welcome back, Marcus</h2>
                        </div>
                        <div>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;