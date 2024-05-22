'use client'
import { useRouter } from 'next/router';
import styles from '../write/writePage.module.css'
import Image from 'next/image'
import { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from 'next/navigation';


const WritePage = () => {

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")


  const router = useRouter()

  const {status} =  useSession()
               
  if (status === 'loading')
  {
      return <div className={styles.loading}>Loading...</div>
  }

  if (status === 'authenticated')
    {
        router.push("/")
    }

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
          {open && (<div className={styles.add}>
            
            <button className={styles.addButton}>
              <Image src="/image.png" alt='' height={16} width={16}/>
            </button>

            <button className={styles.addButton}>
              <Image src="/external.png" alt='' height={16} width={16}/>
            </button>

            <button className={styles.addButton}>
              <Image src="/video.png" alt='' height={16} width={16}/>
            </button>
            
            
            </div>
          )}

        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChage={setValue} placeholder='Tell your story...'/>
      </div>

      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage
