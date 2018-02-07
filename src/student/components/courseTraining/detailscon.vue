 <template>
	 <div>
	 	 <el-tabs type="border-card">
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-date"></i> 全真案例</span>
		    <!--全真案例组件-->	
		    <cases></cases>
		  </el-tab-pane>
		 <el-tab-pane>
		    <span slot="label"><i class="el-icon-tickets"></i> 实训计划</span>
		    <!--实训计划组件-->	
		    <trainingplan></trainingplan>
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-edit-outline"></i> 实训总结</span>
		    <!--实训总结组件-->	
             <summarize></summarize>
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-news"></i> 课程资料</span>
		    <!--课程资料组件-->	
		    <material></material>
		  </el-tab-pane>
		</el-tabs>
	 </div>
</template>
<script>
	import cases  from '@/student/components/courseTraining/cases'
	import trainingplan  from '@/student/components/courseTraining/trainingplan'
	import summarize  from '@/student/components/courseTraining/summarize'
	import material  from '@/student/components/courseTraining/material'
  export default {
    data() {
      return {
        activeName: 'first',
        liss:'全真案例'
      };
    },
    methods: {
      handleClick(tab, event) {

      }
    },
	components: {
		cases,
		trainingplan,
		summarize,
		material
	},
  };
</script>
<style>
.el-tabs--border-card>.el-tabs__header {
    background-color: #f5f7fa;
    border: transparent;
    margin: 0;
}
</style>