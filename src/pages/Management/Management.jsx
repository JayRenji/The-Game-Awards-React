import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Management.scss';
import { createGame,editGame,deleteGame } from "../../redux/games/games.actions";
import { useNavigate,useLocation } from 'react-router-dom';
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

const PLATFORM = ['PS4','PS5','PC','SWITCH','XBOX X','XBOX S','XBOX ONE']

function Management(props) {
  
  
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState(location.state ? location.state.game : INITIAL_STATE);
  const [formClean, setFormClean] = useState(INITIAL_STATE);
  

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
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
    if(!form.title || !form.trailer || !form.platform || !form.img || !form.platform[0]) {
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
          {
            PLATFORM.map((element,index) => {
              return (
                <div key={`${JSON.stringify(element)}-${index}`}>
                  <label>
                  <input
                    type="checkbox"
                    id="platform"
                    name={element}
                    value={element}
                    defaultChecked={form.platform.find(element2 => element2 === element)}
                    onChange={changeCheckbox}
                  />
                  <p>{element}</p>
                  </label>
                </div>
                )
            })
          }
          
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
            {form.platform[0] && <h4>Platform: {form.platform.join(' - ')}</h4>} 
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