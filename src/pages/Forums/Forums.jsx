import { useState, useEffect } from 'react';
import * as forumsAPI from '../../utilities/forums-api'
import Forums from '../../components/Forums/Forums';
import NewForumForm from '../../components/NewForumForm/NewForumForm'



export default function ShowForums({ user }) {
  const [forums, setForums] = useState([])
  const [bananas, setBananas] = useState(true)
  useEffect(function() {
    async function getForums() {
      const forums = await forumsAPI.getAll()
      setForums(forums)
    }
    getForums()
  }, [bananas])

  function addForum(forum) {
    setForums({...forums, forum})
  }

  return (
    <main className='Forums'>
      <h2>Forums</h2>
      <NewForumForm addForum={addForum} setBananas={setBananas}/>
      <hr />
      <Forums forums={forums} user={user} setBananas={setBananas} />
    </main>
  );
}