import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/blogs/";

const CompCreateBlog = () => {
    // const [title, setTitle] =  useState("");
    // const [content, setContent] = useState("");
    // const navigate = useNavigate();

    // // Submit the form to create a new blog post.
    // const store = async (e) => {
    //     e.preventDefault();
    //     await axios.post(URI, { title, content });
    //     navigate('/');
    // }

    return (
        <div>
            <h1>Crear post</h1>
            {/* <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} type="text" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form> */}
        </div>
    );
}

export default CompCreateBlog;
