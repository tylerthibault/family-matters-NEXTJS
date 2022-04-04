import React, {useState} from 'react'
import Utils from '@/styles/utils.module.css'
import { cx } from '@/lib/utils'

export default function Index(props) {
    const [catName, setCatName] = useState()

    const changeHandler = async (e) => {
        if (e.which === 13){
            
            let resp = await fetch('/api/blog/categories/create',{
                method: 'POST',
                body: JSON.stringify({'name': catName})
            })
            resp = await resp.json()

            setCatName('')
            props.onCreate(resp)
        }
    }

    return (
        <div className='flex items-center gap-3 justify-center'>
            <div className='flex w-10/12'>
            <input className={cx(Utils.input)} type="text" name="categoryName" id="categoryName" placeholder='Category Name' value={catName} onChange={(e) => setCatName(e.target.value)} onKeyDown={(e) => changeHandler(e)} />
            </div>
        </div>
    )
}
