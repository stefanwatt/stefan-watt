import AboutMe from './aboutMe.svelte'
import Projects from './projects/projects.svelte'
import Skills from './skills.svelte'
import Interests from './interests.svelte'
import Career from './career/career.svelte'
export default [
  { id: 'about', component: AboutMe },
  { id: 'career', component: Career },
  { id: 'projects', component: Projects },
  { id: 'skills', component: Skills },
  { id: 'interests', component: Interests }
]
