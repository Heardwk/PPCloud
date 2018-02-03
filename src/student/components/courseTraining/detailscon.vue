 <template>
	 <div>
	 	 <el-tabs type="border-card">
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-date"></i> 全真案例</span>
		    <cases></cases>
		  </el-tab-pane>
		 <el-tab-pane>
		    <span slot="label"><i class="el-icon-tickets"></i> 实训计划</span>
		    <trainingplan></trainingplan>
		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-edit-outline"></i> 实训总结</span>

		  </el-tab-pane>
		  <el-tab-pane>
		    <span slot="label"><i class="el-icon-news"></i> 课程资料</span>
		 
		  </el-tab-pane>
		</el-tabs>
	 </div>
</template>
<script>
	import cases  from '@/student/components/courseTraining/cases'
	import trainingplan  from '@/student/components/courseTraining/trainingplan'
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
	},
  };
</script>
<style>
.el-tabs--border-card>.el-tabs__header {
    background-color: #f5f7fa;
    /*border-bottom: 1px solid #e4e7ed;*/
    border: transparent;
    margin: 0;
}
</style>