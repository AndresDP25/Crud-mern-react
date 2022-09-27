import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, Router, useNavigate, useParams} from 'react-router-dom';


const URL = 'https://nodesequelize.up.railway.app/blogs';

const CompShowBlog = () => {
    const [blog, setBlog] = useState({});
    const {id} = useParams()
    useEffect( () => {
        getBlog()
    },[])

    //procedimiento para mostrar un blog
    const getBlog = async (id) => {
        const res = await axios.get(`${URL}/${id}`)
        setBlog(res.data)
    }

    return(
        
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div>{blog}</div>
                </div>
            </div>
        </div>
        
    )
}

export default CompShowBlogs;