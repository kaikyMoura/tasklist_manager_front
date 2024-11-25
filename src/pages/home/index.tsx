import Header from '@/components/Header'
import styles from './styles.module.scss'
import Card from '@/components/Card'

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Header />
            <Card />
        </div>
    )
} 