import './Style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'
import { useEffect,useState } from 'react'

function Home() {

  const [users, setUsers] = useState([])
  async function getVideos() {
    const userFromApi = await api.get('/videos')
    setUsers(userFromApi.data)
  }

  useEffect(() =>{
   // eslint-disable-next-line react-hooks/set-state-in-effect
   getVideos()
  },[])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro teste</h1>
        <input placeholder="titulo" name='title' type='text'></input>
        <input placeholder="duratduracao" name='duration' type='number'></input>
        <input placeholder="descricao" name='description' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>title: <span>{user.title }</span></p>
            <p>duration: <span>{user.duration}</span></p>
            <p>description: <span>{user.description}</span></p>
          </div>
          <button>
            <img src={Lixeira} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
