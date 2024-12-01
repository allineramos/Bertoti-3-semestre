import React, { useEffect, useState } from "react";
import styles from "./App.module.css";

const App = () => {
  
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState("");
  const [editName, setEditName] = useState("");
  const [editGenre, setEditGenre] = useState("");

  useEffect(() => {
    const handleGet = async () => {
      if (loading === true) {
        try {
          const response = await fetch("http://localhost:8080/movies");
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    };
    handleGet();
  }, [loading]);

  const handlePost = async () => {
    if (name === "" || genre === "") {
      alert("Preencha todos os campos");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:8080/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, genre }),
      });
      setLoading(true);
      setGenre("");
      setName("");
      const newMovie = await response.json();
      setData((prevData) => [...prevData, newMovie]);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleDelete = async () => {
    
    if (id === "") {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/movies/${id}`, {
        method: "DELETE",
      });
      setLoading(true);
      setId("");
      const data = await response.json();
      setData([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePut = async () => {
    if (editName === "" || editGenre === "") {
      alert("Preencha todos os campos");
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:8080/movies/${selectedId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: editName, genre: editGenre }),
      });
      setLoading(true);
      setEditName("");
      setEditGenre("");
      const data = await response.json();
      setData([...data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedId) {
      const movie = data.find((movie) => movie.id === selectedId);
      if (movie) {
        setEditName(movie.name);
        setEditGenre(movie.genre);
      }
    }
  }, [selectedId, data]);

  return (
    <>
      <h1 style={{ width: '100%', textAlign: 'center' }}>Filmes Cadastrados</h1>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data && data.length === 0 && <p style={{ width: '100%', textAlign: 'center' }}>Nenhum filme encontrado</p>}
        {data && data.map((movie) => (
          <div key={movie.id} style={{ width: '300px', margin: '10px', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>
            <h2>{movie.name}</h2>
            <p>Gênero: {movie.genre}</p>
            <p>id: {movie.id}</p>
          </div>
        ))}
      </div>

      <br />
      <h2 style={{ width: '100%', textAlign: 'center' }}>Cadastrar Filme</h2>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
        <input className={styles.input} type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} type="text" placeholder="Gênero" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <button className={styles.button} onClick={handlePost}>Cadastrar</button>
      </div>

      <br />
      <h2 style={{ width: '100%', textAlign: 'center' }}>Editar Filme</h2>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
        <select className={styles.input} value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
          <option value="">Selecione o Filme</option>
          {data && data.map((movie) => (
            <option key={movie.id} value={movie.id}>{movie.name}</option>
          ))}
        </select>
        <input className={styles.input} type="text" placeholder="Nome" value={editName} onChange={(e) => setEditName(e.target.value)} />
        <input className={styles.input} type="text" placeholder="Gênero" value={editGenre} onChange={(e) => setEditGenre(e.target.value)} />
        <button className={styles.button} onClick={handlePut}>Editar</button>
      </div>
      <br />
      <h2 style={{ width: '100%', textAlign: 'center' }}>Excluir Filme</h2>
      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
        <input className={styles.input} type="number" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
        <button className={styles.button} onClick={handleDelete}>Excluir</button>
      </div>

    </>
  );
};

export default App;
