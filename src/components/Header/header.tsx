import { useEffect, useState } from 'react'
import styles from './header.module.scss'

const Header = () => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const currentDate = new Date()

        const formattedDate = new Intl.DateTimeFormat('pt-BR', {
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

                </div>
            </div>
        </>
    )
}

export default Header;