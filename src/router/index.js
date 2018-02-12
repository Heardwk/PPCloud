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
import allTrueCase from '@/teacher/components/allTrueCase'
import pubMission from '@/teacher/components/pubMission'

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
import SeeTheCase  from '@/student/components/SeeTheCase'

import Educat from '@/educat/components/Educat'
import Monitor from '@/educat/components/Monitor'
import Teaching from '@/educat/components/Teaching'
import Plan from '@/educat/components/Plan'
import Account from '@/educat/components/Account'
import EAbility from '@/educat/components/EAbility'
import Manaportal from '@/educat/components/Manaportal'
import Usermsg from '@/educat/components/Usermsg'
import taskdetail from '@/educat/components/taskdetail'

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
                },
                {
                  path: 'allTrueCase',
                  name: 'allTrueCase',
                  component: allTrueCase,
                  children: [
                    {
                      path: 'pubMission',
                      name: 'pubMission',
                      component: pubMission
                    }
                  ]
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
          component: allcase,
        },
        {
          path: 'casesindex',
          name: 'casesindex',
          component: casesindex
        },
        {
				  path: 'SeeTheCase',
				  name: 'SeeTheCase',
				  component: SeeTheCase,
				}
      ]
    },
    {
      path: '/Educat',
      component: Educat,
      children: [
        {
          path: '', redirect: 'Monitor'
        },
        {
          path: 'Monitor',
          name: 'Monitor',
          component: Monitor,
        },
        {
          path: 'Teaching',
          name: 'Teaching',
          component: Teaching,
          children:[
		        {
		        path: 'taskdetail',
		        name: 'taskdetail',
		        component: taskdetail,
		        }
        	]
        },
        {
          path: 'Plan',
          name: 'Plan',
          component: Plan,
        },
        {
          path: 'Account',
          name: 'Account',
          component: Account,
        },
        {
          path: 'EAbility',
          name: 'EAbility',
          component: EAbility,
        },
        {
          path: 'Manaportal',
          name: 'Manaportal',
          component: Manaportal,
        },
        {
          path: 'Usermsg',
          name: 'Usermsg',
          component: Usermsg,
        },
      ]
    }
    
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
})
