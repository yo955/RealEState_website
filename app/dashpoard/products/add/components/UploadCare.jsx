"use client"
import React from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';
const UploadCareButton = ({setProduct,isArray=false,uniqueKey}) => {
    const set = new Set()
    const handleChangeEvent = (files) => {
        if(!files.allEntries[0]?.cdnUrl){
            setProduct((prev)=>({...prev,[`${uniqueKey}`]:isArray?[]:""}));
            console.log(uniqueKey)
        }
        
        else if(isArray)
        { console.log("array")
            files.allEntries?.map((map)=>{
                if(map?.cdnUrl){
                    set.add(map.cdnUrl)
                    setProduct((prev)=>({...prev,[`${uniqueKey}`]:[...set.values()]}))
                }
            })
            console.log(uniqueKey)
        }else{
            if(files.allEntries[0]?.cdnUrl){
               console.log(uniqueKey)
                setProduct((prev)=>({...prev,[`${uniqueKey}`]:files.allEntries[files.allEntries.length -1].cdnUrl}))
            }
         }
       
        
        console.log('change event payload:',files);
      };
  return (
    <div>
      <FileUploaderRegular
      
      onChange={handleChangeEvent}
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-dark"
         pubkey="c4825586f59c0fb4a2f5"
      /> 
    </div>
  )
}

export default UploadCareButton