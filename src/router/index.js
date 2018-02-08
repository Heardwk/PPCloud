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
import Course from '@/teacher/components/Course'
import addProblemSet from '@/teacher/components/addProblemSet'
import addProblem from '@/teacher/components/addProblem'
import editProblem from '@/teacher/components/editProblem'

import Student from '@/student/components/Student'
import trainingCenter from '@/student/components/trainingCenter'
import myTask from '@/student/components/myTask'
import management from '@/student/components/management'
import abilityfile from '@/student/components/abilityfile'
import datasharing from '@/student/components/datasharing'
import Basic_Accounting from '@/student/components/Basic_Accounting'
import MyCenter from '@/student/components/MyCenter'
import allcase from '@/student/components/allcase'
import casesindex  from '@/student/components/courseTraining/casesindex'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '', redirect: '/Load'
    },
    {
      path: '/Load',
      name: 'Load',
      component: Load
    },
    {
      path: '/Teacher',
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
          component: Shixun,
          children: [
            {
              path: 'Course',
              name: 'Course',
              component: Course,
              children: [
                {
                  path: 'addProblemSet',
                  name: 'addProblemSet',
                  component: addProblemSet
                },
                {
                  path: 'addProblem',
                  name: 'addProblem',
                  component: addProblem
                },
                {
                  path: 'editProblem',
                  name: 'editProblem',
                  component: editProblem
                }
              ]
            },
          ]
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
        }
      ]
    },
    {
      path: '/Student',
      component: Student,
      children: [
        {
          path: '', redirect: 'trainingCenter'
        },
        {
          path: 'trainingCenter',
          name: 'trainingCenter',
          component:trainingCenter,
          children:[
		        {
		          path:'Basic_Accounting',
		          name:'Basic_Accounting',
		          component:Basic_Accounting
		        },
          ]
        },
        {
          path:'myTask',
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
		    {
		      path: 'MyCenter',
		      name: 'MyCenter',
		      component: MyCenter
		    },
		     {
          path: 'Yuanxiao',
          component: Yuanxiao
        },
         {
          path: 'allcase',
          name: 'allcase',
          component: allcase
        },
        {
          path: 'casesindex',
          name: 'casesindex',
          component: casesindex
        },
      ]
    },

  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
