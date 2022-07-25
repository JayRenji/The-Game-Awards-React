import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Management.scss';
import { createGame,editGame,deleteGame } from "../../redux/games/games.actions";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const INITIAL_STATE = {
  title: '',
  description: '',
  genre: '',
  trailer: '',
  votes: 0,
  platform: [],
  img: '',
  deletedid: 1,
  id: ''
};


function Management(props) {


  const [form, setForm] = useState(INITIAL_STATE);
  const [formClean, setFormClean] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log('1',form);
    console.log('2',INITIAL_STATE);
  };

  const changeCheckbox = (event) => {
    const { name, checked, id } = event.target;
    let value = form.platform;
    if (checked){
      value.push(name);
      setForm({ ...form, [id]: value });
    }else{
      value.splice(value.indexOf(name),1);
      setForm({ ...form, [id]: value });
    }
  };

  const defaultPic = (event) =>{
    event.target.src = 'https://plantillasdememes.com/img/plantillas/imagen-no-disponible01601774755.jpg'
  }

  const dispatch = useDispatch();
  
  const submitGame = (event) =>{
    let message ="";

    event.preventDefault();
    if(!form.title || !form.description || !form.trailer || !form.platform || !form.img) {
      Swal.fire('Some of the fields are not filled.');
      return;
    }

    if (form.id === ''){
      dispatch(createGame(form))
      message="Game created";
    }else{
      dispatch(editGame(form))
      message="Game edited";
    }

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(() => {
      navigate('/');
    }, 600);
  }

  const deleteGameButton = () =>{
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      dispatch(deleteGame(form.id))

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Game deleted',
        showConfirmButton: false,
        timer: 1500
      })

      setTimeout(() => {
        navigate('/');
      }, 600);
    })

  }

  return (
    <>
    <section className="formulario">
    <h2>The Game Awards Management</h2>
    <div className="container">
      <form onSubmit={submitGame}>
        <label>
          <p>Title</p>
          <input type="text" name="title" value={form.title} onChange={handleInput}/>
        </label>

        <label>
          <p>Description</p>
         <input type="text" name="description" value={form.description} onChange={handleInput}/>
        </label>

        <label>
          <p>Genre</p>
          <input type="text" name="genre"  value={form.genre} onChange={handleInput}/>
        </label>

        <label>
          <p>Trailer</p>
          <input type="text" name="trailer"  value={form.trailer} onChange={handleInput}/>
        </label>
        
        <label>
          <p>Image</p>
          <input type="text" name="img" value={form.img} onChange={handleInput}/>
        </label>
        
        <h3>Platform</h3>
        <div className="platform">
          <div>
            <input
              type="checkbox"
              id="platform"
              name="PS4"
              value={form.platform['PS4']}
              onChange={changeCheckbox}
            />
            <label for="PS4">PS4</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="PS5"
              alue={form.platform['PS5']}
              onChange={changeCheckbox}
            />
            <label for="PS5">PS5</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="PC"
              alue={form.platform['PC']}
              onChange={changeCheckbox}
            />
            <label for="PC">PC</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="SWITCH"
              alue={form.platform['SWITCH']}
              onChange={changeCheckbox}
            />
            <label for="SWITCH">SWITCH</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="XBOX X"
              alue={form.platform['XBOX X']}
              onChange={changeCheckbox}
            />
            <label for="XBOX X">XBOX X</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="XBOX S"
              alue={form.platform['XBOX S']}
              onChange={changeCheckbox}
            />
            <label for="XBOX S">XBOX S</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="platform"
              name="XBOX ONE"
              alue={form.platform['XBOX ONE']}
              onChange={changeCheckbox}
            />
            <label for="XBOX ONE">XBOX ONE</label>
          </div>
        </div>
        <div className="buttons">
          <button type="submit">Submit</button>
          {form.id!=='' && <button type="button" onClick={deleteGameButton}> Delete </button>}
        </div>
      </form>
        {form !== formClean && <div className="card">
          {form.img!=='' && <img
            src={ form.img }
            onError= {defaultPic}
            alt={ form.title }
          />}
          <div className="card__content">
            {form.title && <h3 className="title">Title: {form.title}</h3>}
            {form.description && <h3 className="description">Description: {form.description}</h3>}
            {form.platform && <h4>Platform: {form.platform.join(' - ')}</h4>} 
            {form.genre && <h4 className="genre">Genre: {form.genre}</h4>}
            {form.trailer && <h4 className="trailer">Trailer: {form.trailer}</h4>}
          </div>
        </div>}
    </div>
  </section>
</>
  )
}

export default Management