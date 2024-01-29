import React, {useState} from 'react'
import './ImageSearch.css'

const ImageSearch = ({searchText}) => {
    const [text,setText] = useState('');
    const onSubmit = (e) =>{
        e.preventDefault();
        searchText(text);
    }

  return (
    <div className='box-search'>
        <form onSubmit={onSubmit}>
            <input onChange={e=>setText(e.target.value)} type='text' placeholder='Search images...'/>
            <button type='submit'>Search</button>
        </form>
     
    </div>
  )
}

export default ImageSearch