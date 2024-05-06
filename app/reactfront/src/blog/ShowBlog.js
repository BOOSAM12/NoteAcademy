  import axios from "axios";
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
  import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
  import { useNavigate } from "react-router-dom";

  const URI = "http://localhost:8000/noteAcademy/";

  const CompShowBlogs = () => {
    // const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const checkUserLoggedIn = async () => {
        // localStorage.removeItem('token');

        try {
          const token = localStorage.getItem("token");
          if (!token) {
            // Redirigir a la página de registro si no hay token
            navigate("/iniciar");
          } else {
          }
        } catch (error) {
          console.error("Error al verificar el estado de inicio de sesión:", error.message);
        }
      };
  
      checkUserLoggedIn();
    }, [navigate]);
    // useEffect(() => {
    //   const checkUserLoggedIn = async () => {
    //     try {
    //       const token = localStorage.getItem("token");
    //       if (!token) {
    //         // Redirigir a la página de registro si no hay token
    //         navigate("/registrarse");
    //       } else {
    //         // Obtener blogs si el usuario ha iniciado sesión
    //         getBlogs();
    //       }
    //     } catch (error) {
    //       console.error("Error al verificar el estado de inicio de sesión:", error.message);
    //     }
    //   };
  
    //   checkUserLoggedIn();
    // }, [navigate]);
  
    // const getBlogs = async () => {
    //   try {
    //     const res = await axios.get(URI);
    //     setBlogs(res.data);
    //   } catch (error) {
    //     console.error("Error al obtener la lista de blogs:", error.message);
    //   }
    // };

    // const deleteBlog = async (id) => {
    //   try {
    //     await axios.delete(`${URI}${id}`);
    //     getBlogs();
    //   } catch (error) {
    //     console.error("Error al eliminar el blog:", error.message);
    //   }
    // };

    // const likeBlog = async (id) => {
    //   try {
    //     await axios.put(`${URI}${id}`, {
    //       gusta: (blogs.find((blog) => blog.id === id).gusta = 0),
    //     });
    //     getBlogs();
    //   } catch (error) {
    //     console.error("Error al darle 'Me gusta' al blog:", error.message);
    //   }
    // };

    // const dislikeBlog = async (id) => {
    //   try {
    //     await axios.put(`${URI}${id}`, {
    //       gusta: (blogs.find((blog) => blog.id === id).gusta = 1),
    //     });
    //     getBlogs();
    //   } catch (error) {
    //     console.error("Error al darle 'Me gusta' al blog:", error.message);
    //   }
    // };

    // Para borrar el token almacenado en localStorage

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Link to="/create" className="btn btn-info">
              Crear
            </Link>
            <Link to="/iniciar" className="btn btn-info">
              registrate
            </Link>
            <Link to="/grupo" className="btn btn-info">
            grupo
            </Link>
            <table className="table table-striped-columns">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Contenido</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* {blogs.map((blog) => (
                  <tr key={blog.id}>
                    <td>{blog.title}</td>
                    <td>{blog.content}</td>
                    <td>
                    {blog.gusta === '1' ? (
                        <button
                          onClick={() => likeBlog(blog.id)}
                          className={
                            blog.gusta == 1
                              ? "btn btn-success verde"
                              : "btn btn-danger roja"
                          }
                        >
                          {blog.gusta === 1 ? (
                            <FontAwesomeIcon icon={solidHeart} />
                          ) : (
                            <FontAwesomeIcon icon={regularHeart} />
                          )}
                        </button>
                      ) : (
                        <button
                        onClick={() => dislikeBlog(blog.id)}
                      className={
                        blog.gusta == 1
                          ? "btn btn-success verde"
                          : "btn btn-danger roja"
                      }
                    >
                      {blog.gusta === 1 ? (
                        <FontAwesomeIcon icon={solidHeart} />
                      ) : (
                        <FontAwesomeIcon icon={regularHeart} />
                      )}
                    </button>
                      )}
                      <Link to={`/edit/${blog.id}`} className="btn btn-info">
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))} */}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  export default CompShowBlogs;
