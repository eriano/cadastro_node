import './Style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api'
import { useEffect,useState,useRef } from 'react'

//react hook useRef

function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputDuration = useRef()
  const inputDescription = useRef()

  async function getVideos() {
    const userFromApi = await api.get('/videos')
    setUsers(userFromApi.data)
  }
  async function createVideos() {
    await api.post('/videos',{
      title: inputName.current.value,
      description: inputDescription.current.value,
      duration: inputDuration.current.value,
    })
    getVideos()
  }
    async function deleteVideos(id) {
    await api.delete(`/videos/${id}`)
    getVideos()
  }

  useEffect(() =>{
   // eslint-disable-next-line react-hooks/set-state-in-effect
   getVideos()
  },[])

  return (
    <div className='container'>
      <form>
        <h1>Cadastro teste</h1>
        <input placeholder="titulo" name='title' type='text' ref={inputName}></input>
        <input placeholder="duratduracao" name='duration' type='number' ref={inputDuration}></input>
        <input placeholder="descricao" name='description' type='email' ref={inputDescription}></input>
        <button type='button' onClick={createVideos}>Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.video_id} className='card'>
          <div>
            <p>title: <span>{user.title }</span></p>
            <p>duration: <span>{user.duration}</span></p>
            <p>description: <span>{user.description}</span></p>
          </div>
          <button onClick={()=>deleteVideos(user.video_id)}>
            <img src={Lixeira} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
