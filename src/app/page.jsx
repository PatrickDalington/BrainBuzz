import Link from 'next/link';
import styles from './homepage.module.css'
import Featured from '../components/featured/Featured';
import CategoryList from '../components/categoryList/categoryList';
import CardList from '../components/cardList/cardList';
import Menu from '../components/Menu/Menu'

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1

  return(
    <div className={styles.container}>

     <Featured/>
     <CategoryList/>

     <div className={styles.content}>
      
        <CardList page={page}/>
        <Menu/>
    </div>
    </div>
    
  )
}
