import Vue from 'vue'
import Router from 'vue-router'
import Load from '@/share/components/Load'
import Yuanxiao from '@/share/components/Yuanxiao'

import Teacher from '@/teacher/components/Teacher'
import Shixun from '@/teacher/components/Shixun'
import Renwu from '@/teacher/components/Renwu'
import Shuju from '@/teacher/components/Shuju'
import Ability from '@/teacher/components/Ability'
import Ziliao from '@/teacher/components/Ziliao'
import Geren from '@/teacher/components/Geren'

import Student from '@/student/components/Student'
import trainingCenter from '@/student/components/trainingCenter'
import myTask from '@/student/components/myTask'
import management from '@/student/components/management'
import abilityfile from '@/student/components/abilityfile'
import datasharing from '@/student/components/datasharing'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '', redirect: '/Load'
    },
    {
      path: '/Load/',
      name: 'Load',
      component: Load
    },
    {
      path: '/Teacher/',
      component: Teacher,
      children: [
        {
          path: '', redirect: 'Shixun'
        },
        {
          path: 'Yuanxiao',
          name: 'Yuanxiao',
          component: Yuanxiao
        },
        {
          path: 'Shixun',
          name: 'Shixun',
          component: Shixun
        },
        {
          path: 'Renwu',
          name: 'Renwu',
          component: Renwu
        },
        {
          path: 'Shuju',
          name: 'Shuju',
          component: Shuju
        },
        {
          path: 'Ability',
          name: 'Ability',
          component: Ability
        },
        {
          path: 'Ziliao',
          name: 'Ziliao',
          component: Ziliao
        },
        {
          path: 'Geren',
          name: 'Geren',
          component: Geren
        },
      ]
    },
    {
      path: '/Student/',
      component: Student,
      children: [
        {
          path: '', redirect: 'trainingCenter'
        },
        {
          path: 'trainingCenter',
          name: 'trainingCenter',
          component:trainingCenter
        },
        {
          path: 'myTask',
          name:'myTask',
          component: myTask
        },
        {
          path:'management',
          name:'management',
          component:management
        },
        {
          path:'abilityfile',
          name:'abilityfile',
          component:abilityfile
        },
        {
          path:'datasharing',
          name:'datasharing',
          component:datasharing
        },
      ]
    },
  ]
})
