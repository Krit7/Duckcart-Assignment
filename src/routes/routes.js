import mainActivity from '../components/leftColumn/activities/mainActivities.vue'
import homePage from '../components/home'
import assessments from '../components/leftColumn/assessments/assessment.vue'
import overview from '../components/leftColumn/overview/overview.vue'
import files from '../components/leftColumn/files/file.vue'
import resume from '../components/leftColumn/resume/resume.vue'

export const routes =[
  {
    path : '/',
    component : homePage,
    children :[
      {
        path : 'activities',
        component : mainActivity
      },
      {
        path : 'assessments',
        component : assessments
      },
      {
        path : 'overview',
        component : overview
      },
      {
        path : 'files',
        component : files
      },
      {
        path : 'resume',
        component : resume
      }
    ] 
  }
]