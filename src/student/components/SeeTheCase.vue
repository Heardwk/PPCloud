<template>
   <div> 	
      <div class="cot">
           <div class="g_set">
	          <div class="g_set_top">
	              <span>实训题型</span><b>基础会计&nbsp;&gt;&nbsp;错误更正&nbsp;&gt;&nbsp;划线</b>
	              <div class="l_top">
	                   <i></i>
	                   <b>关闭</b>
	              </div>
	          </div>
	          <div class="g_set_bo">
	                <div class="g_set_le">
	                      <div class="g_set_le_to">
	                          <i></i>
	                          <div class="g_inr">
	                              <b>单选题</b>
	                              <p>请选择唯一个对应的答案。</p>
	                          </div>
	                      </div>
	                      <div class="g_inr_tit">
	                                         下列各种情况中会导致企业折价发行债券的是下列各种情况中会导致企业折价发行债券的是，下列各种情况中会导致企业折价发行债券的是( )。
	                      </div> 
	                      <div class="g_inr_xz">
	                           <ul>
	                           	<li><span>【A】</span>债券的票面利率大于市场利率债券的票面利率大于债券的票面利率大于市场利率。</li>
	                           	<li><span>【B】</span>债券的票面利率大于市场利率债券的票面利率大于债券的票面利率大于市场利率。</li>
	                           	<li><span>【C】</span>债券的票面利率大于市场利率债券的票面利率大于债券的票面利率大于市场利率。</li>
	                           	<li><span>【D】</span>债券的票面利率大于市场利率债券的票面利率大于债券的票面利率大于市场利率。</li>
	                           </ul>  
	                      </div>
	                      <div class="g_inr_bu">
	                          <el-button type="success" size="medium" plain icon="el-icon-success">A</el-button>
	                          <el-button type="success" size="medium" plain icon="el-icon-success">B</el-button>
	                          <el-button type="success" size="medium" plain icon="el-icon-success">C</el-button>
	                          <el-button type="success" size="medium" plain icon="el-icon-success">D</el-button>
	                      </div>
	                      <div class="g_set_re">
	                           <div class="g_set_re_t">
	                                <span>答案解析</span>
	                                <div class="g_set_pre">
	                                     <b>上一题</b>
	                                     <b>下一题</b>
	                                </div>
	                           </div>
	                      </div>
	                      <div class="ts"></div>
	                      <div class="tss"></div>
	                      <div class="consult">
	                     <div class="consult_ti">
	                     	<b>参考答案：<span>【B】</span></b>
	                     </div>
	                     <div class="consult_bot">
	                         <img src="" alt="" />
	                         <p>下列各种情况中会导致企业折价发行债券的是下列各种情况中会导致企业折价发行债券的是，下列各种情况中会导致企业折价发行债券的票面利率小于市场利率。</p>
	                     </div>
	                </div>
	                </div>
	                <div class="g_set_reig">
	                     <div class="g_set_reig_top">
	                          <img src="" />
	                          <div class="g_set_reig_p">
	                              <b>附件</b>
	                              <p>点击放大附件，通过缩略图切换</p>
	                          </div>
	                     </div>
	                     <div class="g_set_reig_ti">
	                                                  这里是附件的描述，这个附件的第一个表，代表我们是一个中国人的财务软件描述。这里是附件的描述，这个附件的第一个表，代表我们是一个中国人的财务软件描述。
	                     </div>
	                     <div class="g_set_img">
	                         
	                     </div>
	                     <div class="sides">
	                         <i></i>
	                         <ul>
	                         	<li>
	                         		<a :href="slides[nowIndex].href">
								          <img v-if="!isShow" :src="slides[nowIndex].src">
							      </a>
	                         	</li>
	                         </ul>
	                         <i></i>
	                     </div>
	                </div>
	          </div>
	      </div>
      </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
      	nowIndex:0,
       slides: [
        {
          src: require('../../share/img/image_class_cover.png'),
          title: 'xxx1',
        },
        {
          src: require('../../share/img/image_class_cover.png'),
          title: 'xxx2',
        },
        {
          src: require('../../share/img/image_class_cover.png'),
          title: 'xxx3',
        },
        {
          src: require('../../share/img/image_class_cover.png'),
          title: 'xxx4',
        }
       ]
      }
    },
   methods:{

       },
  };
</script>
<style>
	.g_set_bo{
		margin-bottom: 15px;
		display: flex;
	}
	.cot{
		width: 100%;
		height: 100%;
		background-color:rgb(240,242,245);
	}
	.g_set{
		 padding-top: 80px;
		 margin: auto;
		 width: 960px;
	}
	.g_set_top{
		width:960px;
		height:78px; 
		background:rgba(255,255,255,1);
		border-radius: 6px ;
		line-height: 78px;
		position: relative;
		margin-bottom: 20px;
	}
	.g_set_top>span{
	    width:56px;
		height:20px; 
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(36,56,71,1);
		line-height:20px;
		margin-left: 40px;
		font-weight: 600;
	}
	.g_set_top>span::after{
	    content: '';
	    position: absolute;
	    top:55px;
	    left: 40px;
	    width: 56px;
	    height: 5px;
	    background-color: #157CF0;
	    border-radius: 6px;
	}
	.g_set_top>b{
	   font-weight: 400;
	   display: inline-block;
		height:20px; 
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(110,118,143,1);
		line-height:20px;
		margin-left: 25px;
	}
	.l_top{
		  float: right;
		  width: 100px;
		  height: 40px;
		  line-height: 40px;
		  display: flex;
		  align-items: center;
		  margin-top: 20px;
		  cursor: pointer;
	}
	.g_set_top>.l_top>i{
	   display: inline-block;
       width: 30px;
       height: 30px;
       background-image: url(../../share/img/close.png);
       background-repeat: no-repeat;
	}
	.g_set_top>.l_top>b{
		width:37px;
		height:25px; 
		font-size:18px;
		font-family:PingFangSC-Regular;
		color:rgba(110,118,143,1);
		line-height:21px;
		font-weight: 400;
		margin-left: 6px;
	}
	.g_set_le{
		width:470px;
		background:rgba(255,255,255,1);
		border-radius: 6px ; 
	}
	.g_set_le_to{
		display: flex;
		align-items: center;
		width: 90%;
		margin: auto;
		padding-top: 25px;
		padding-bottom: 25px;
		border-bottom: 1px solid #EEEEEE;
	}
	.g_set_le_to>i{
		display: inline-block;
		width:42px;
		height:42px; 
		border-radius: 4px ; 
		border: 1px solid #DDDDDD;
		margin-right: 9px;
	}
	.g_inr>p{
		width:144px;
		height:20px; 
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(152,152,152,1);
		line-height:20px;
	}
	.g_inr>b{
		display: inline-block;
		width:48px;
		height:20px; 
		font-size:16px;
		font-family:PingFangSC-Regular;
		color:rgba(50,60,71,1);
		line-height:20px;
	}
	.g_inr_tit{
	    width:430px;
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(66,66,78,1);
		line-height:24px;
		text-indent: 20px;
        margin: auto;
        word-break: break-all;
        border-bottom: 1px solid #DDDDDD;
        margin: 15px auto;
        padding-bottom: 15px;
	}
	ul{
		-webkit-padding-start: 0px;
	}
	.g_inr_xz{
		width: 90%;
		margin: auto;
		border-bottom: 1px solid #DDDDDD;
	}
	.g_inr_xz>ul>li>span{
		width:38px;
		height:20px; 
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(0,176,255,1);
		line-height:20px;
	}
	.g_inr_xz>ul>li{
		margin: 14PX 0PX;
		display: flex;
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(66,66,78,1);
		line-height:20px;
	}
	.g_inr_bu{
		width: 90%;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.g_inr_bu .el-button--medium 
	{
	    padding: 10px 30px;
	    font-size: 14px;
	    border-radius: 4px;
    }
    .g_set_re{
    	width:470px;
		height:60px; 
		background:rgba(248,248,248,1);
    }
    .g_set_re_t{
    	width: 90%;
    	margin: auto;
    	height: 60px;
    	margin-bottom: 25px;
    	display: flex;
    	align-items: center;
    }
    .g_set_pre{
    	margin-left: 32%;
    }
    .g_set_re_t>span{
    	display: inline-block;
    	width:56px;
		height:20px; 
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(247,118,118,1);
		line-height:20px;
    }
    .g_set_pre>b{
    	display: inline-block;
    	font-weight: 400;
    	width:94px;
		height:34px; 
		background:rgba(255,255,255,1);
		border-radius: 3px ; 
		text-align: center;
		line-height: 34px;
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(110,118,143,1);
		cursor: pointer;
		margin-right: 16px;
    }
    .g_set_pre>b:hover{
		background:rgba(0,176,255,1);
		border-radius: 3px ; 
		color: white;
    }
    .ts{
    	width: 100%;
    	height: 30px;
    	background-color: white;
    	border-radius: 6px;
    }
    .tss{
    	width: 100%;
    	height: 15px;
    	background-color: rgb(248,248,248);
       	margin-bottom: 20px;
    }
    .consult{
    	margin-top: 15px;
    	width:470px;
		height:165px; 
		background:rgba(255,255,255,1);
		border-radius: 6px ; 
		margin-bottom: 10px;
    }
    .consult_ti{
    	width: 90%;
    	margin: auto;
    	height: 57px;
    	line-height: 57px;
    	border-bottom:1px solid #DDDDDD;
    }
    .consult>.consult_ti>b{
    	display: inline-block;
    	width:90%;
		height:22px; 
		font-size:16px;
		margin: 0 auto;
		font-family:PingFangSC-Regular;
		color:rgba(0,0,0,1);
		line-height:22px;
    }
     .consult>.consult_ti>b>span{
    	display: inline-block;
    	color:rgba(126,211,33,1);
    }
    .consult_bot{
        display: flex;
        align-items: center;
        width: 90%;
        margin:0  auto;
        margin-top: 15px;
    }
    .consult_bot>img{
    	display: inline-block;
    	width:44px;
		height:53px; 
		background:rgba(126,211,33,1);
		margin-right: 33px;
    }
    .consult_bot>p{
    	width:353px;
		height:72px; 
		font-size:14px;
		font-family:PingFangSC-Regular;
		color:rgba(66,66,78,1);
		line-height:24px;
		text-indent: 20px;
		word-break: break-all;
    }
    .g_set_reig{
    	width:470px;
		height:465px; 
		background:rgba(255,255,255,1);
		border-radius: 6px ;
		margin-left: 20px;
    }
    .g_set_reig_top{
    	width: 90%;
    	margin: auto;
    	display: flex;
    	margin-top: 25px;
    	margin-bottom: 25px;
    }
    .g_set_reig_top>img{
    	display: inline-block;
    	width:42px;
		height:42px; 
		border-radius: 4px ; 
		margin-right: 10px;
    }
    .g_set_reig_p>b{
    	width:32px;
		height:20px; 
		font-size:16px;
		font-family:PingFangSC-Regular;
		color:rgba(50,60,71,1);
		line-height:20px;
    }
    .g_set_reig_p>p{
    	width:168px;
		height:20px; 
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(152,152,152,1);
		line-height:20px;
    }
    .g_set_reig_ti{
    	width: 90%;
    	margin: auto;
    	width:418px;
		height:70px; 
		font-size:12px;
		font-family:PingFangSC-Regular;
		color:rgba(152,152,152,1);
		line-height:20px;
		border-bottom: 1px solid #E8E8E8;
		padding-bottom: 10px;
    }
    .g_set_img{
    	border:1px solid  rgb(231,231,231);
    	width:430px;
		height:210px; 
		margin: auto;
		margin-top: 10px;
    }
    .sides{
    	height: 50px;
    	width: 90%;
    	margin: auto;
    	margin-top: 15px;
    	position: relative;
    }
    .sides>i:first-child{
    	display: inline-block;
    	width: 20px;
    	height: 20px;
    	background-image: url(../../share/img/icon_arrow_left.png);
    	background-repeat: no-repeat;
    	position: absolute;
    	top: 30%;
    	left: 2%;
    }
    .sides>i:last-child{
    	display: inline-block;
    	width: 20px;
    	height: 20px;
    	background-image: url(../../share/img/icon_arrow_right.png);
    	background-repeat: no-repeat;
    	position: absolute;
    	top: 30%;
    	right: 2%;
    }
    .sides> ul{
		width: 80%;
		height: 50px;
		margin: auto;
    }
    .sides> ul>li{
		
    }
</style>