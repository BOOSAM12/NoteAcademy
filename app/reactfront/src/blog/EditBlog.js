import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/blogs/new/";

const CompEditBlog = () => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const navigate = useNavigate();

  // const { id } = useParams();

  // const update = async (e) => {
  //   e.preventDefault();
  //   await axios.put(URI + id, {
  //     title: title,
  //     content: content,
  //   });
  //   navigate("/");
  // };
  // useEffect(() => {
  //   getBlogId();
  // }, []);

  // const getBlogId = async () => {
  //   const res = await axios.get(URI + id);
  //   setTitle(res.data.title);
  //   setContent(res.data.content);
  // };

  return (
    <div>
      <h1>Editar post</h1>
      {/* <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          actualizar
        </button>
      </form> */}
    </div>
  );
};

export default CompEditBlog;
