import axios from 'axios';
import { useState, useEffect } from 'react';
import {Link, Router} from 'react-router-dom';

const URL = 'https://nodesequelize.up.railway.app/blogs';

const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        getBlogs()
    },[])

    //procedimiento para mostrar los blogs
    const getBlogs = async () => {
        const res = await axios.get(URL)
        setBlogs(res.data)
    }

    const getBlog = async () => {
        const res = await axios.get(`${URL}/${id}`)
        setBlogs(res.data)
    }

    //procedimiento para borrar los blogs
    const deleteBlog = async (id) => {
        await axios.delete(`${URL}/${id}`)
        getBlogs()
    }

    return(
        
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
                    <table className="table">
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map( (blog) => (
                                <tr key={ blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className="btn btn-info me-4"><i className="fa-solid fa-pen-to-square"></i></Link>
                                        <button onClick={ ()=>deleteBlog(blog.id) } className='btn btn-danger'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    )
}

export default CompShowBlogs;