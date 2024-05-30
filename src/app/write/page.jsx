"use client";

import {React, useRef, useState} from 'react';
import Image from "next/image";
import styles from "./writePage.module.css";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useEdgeStore } from "../../lib/edgestore";
import { SingleImageDrop } from '../../components/singleImage/SingleImageDrop';



const ReactQuill = dynamic(() => import("react-quill"), { ssr: false})

const WritePage = () => {
  const { status } = useSession();

  const router = useRouter();
  const quillRef = useRef(null);

  const [open, setOpen] = useState(false);
  let [file, setFile] = useState();
  const { edgestore } = useEdgeStore();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState(null)
  const [catSlug, setCatSlug] = useState("");
  


  // const insertImage = (url) => {
  //   const editor = quillRef.current.getEditor();
  //   const range = editor.getSelection();
  //   if (range) {
  //     editor.insertEmbed(range.index, 'image', url);
      
  //   }
  // };

  const handleImageChange = async(event) => {
    //const { name } = event.target;
    const file = event.target.files?.[0];
    setFile(file);

    const res = await edgestore.publicImage.upload({
      file,
      options: {
        temporary: true,
      },
    })

    setMedia(res.url)
  }

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
     // Upload Image
     
          const response = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
              title,
              desc: value,
              img: media,
              slug: slugify(title),
              catSlug: catSlug || "lifestyle", //If not selected, choose the general category
            }),
          });
    
          if (response.status === 200) {
            await response.json().then((response) => {
              router.push(`/posts/${response.slug}`);
            });
          }
      
  };

  return (
    <div className={styles.container}>
        <div className={styles.iconholders} >
        <input
          type="text"
          placeholder="Title"
          className={styles.input}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
          <option value="lifestyle">lifestyle</option>
          <option value="relationship">relationship</option>
          <option value="news">news</option>
          <option value="ai">artificial inteligence</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>

        
        
           <SingleImageDrop onChange={
            (file) =>{
              setFile(file)
            }
           } ref={quillRef} height={200} width={300} className={styles.postimage} value={file}/>
       
       
      </div>
      
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              accept="image/*"
              capture="camera"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;