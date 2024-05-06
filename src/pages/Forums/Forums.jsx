import { useState, useEffect } from 'react';
import * as forumsAPI from '../../utilities/forums-api'
import Forums from '../../components/Forums/Forums';
import NewForumForm from '../../components/NewForumForm/NewForumForm'



export default function ShowForums() {
  const [forums, setForums] = useState([])

  useEffect(function() {
    async function getForums() {
      const forums = await forumsAPI.getAll()
      setForums(forums)
    }
    getForums()
  }, [])

  function addForum(forum) {
    setForums({...forums, forum})
  }

  return (
    <main className='Forums'>
      <h1>Forums</h1>
      <Forums forums={forums} />
      <hr />
      <NewForumForm addForum={addForum} />
    </main>
  );
}