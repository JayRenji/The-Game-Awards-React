import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Management.scss';
import { createGame,editGame,deleteGame } from "../../redux/games/games.actions";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

    event.preventDefault();
    if(!form.title || !form.description || !form.trailer || !form.platform || !form.img) {
      console.log('Some of the fields are not filled.');
      return;
    }

    if (form.id === ''){
      dispatch(createGame(form))
    }else{
      dispatch(editGame(form))
    }
    navigate('/');
  }

  const deleteGameButton = () =>{
    dispatch(deleteGame(form.id))
    navigate('/');
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
      <ng-container>
        <div className="card">
          <img
            src={ form.img }
            onError= {defaultPic}
            alt={ form.title }
          />
          <div className="card__content">
            {form.title && <h3 className="title">{form.title}</h3>}
            {form.platform && <h4>{form.platform.join(' - ')}</h4>} 
            {form.genre && <h4 className="genre"> {form.genre}</h4>}
          </div>
        </div>
      </ng-container>
    </div>
  </section>
</>
  )
}

export default Management