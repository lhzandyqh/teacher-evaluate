<template>
  <div class="app-Container">
    <!--    <el-row :gutter="5">-->
    <!--      <el-col :span="12">-->
    <!--        <div class="chartContainer">-->
    <!--          <div class="innerContainer">-->
    <!--            <div class="chart-container">-->
    <!--              <barChart height="100%" width="100%"/>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--      <el-col :span="12">-->
    <!--        <div class="chartContainer">-->
    <!--          <div class="innerContainer">-->
    <!--            <div class="chart-container">-->
    <!--              <groupBarChart height="100%" width="100%"/>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!--    <el-row>-->
    <!--      <el-col :span="24">-->
    <!--        <div class="chartContainer">-->
    <!--          <div class="chart-container">-->
    <!--            <Chart height="100%" width="100%"/>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <el-row>
      <integration-sum-chart/>
    </el-row>
    <el-row>
      <teacher-grow-statistics/>
    </el-row>
    <el-row>
      <teacher-grow-compared/>
    </el-row>
    <el-row>
      <teacher-grow-like-charts/>
    </el-row>
  </div>
</template>

<script>
import Chart from '@/components/Charts/mixChart'
import barChart from '@/components/Charts/barChart'
import groupBarChart from '@/components/Charts/groupBarChart'
import teacherGrowStatistics from '@/components/Charts/teacherGrowStatistics'
import teacherGrowLikeCharts from '@/components/Charts/teacherGrowLikeChart'
import teacherGrowCompared from '@/components/Charts/teacherGrowCompared'
import integrationSumChart from '@/components/Charts/integrationSumChart'
import { getToken } from '@/utils/auth'
export default {
  name: 'ResultCount',
  components: { Chart, barChart, groupBarChart, teacherGrowStatistics, teacherGrowLikeCharts, integrationSumChart, teacherGrowCompared },
  data: function() {
    return {
      token: getToken()
    }
  }
}
</script>

<style scoped>
  .chartContainer{
    border: 1px;
    padding: 10px;
    text-align: center;
  }
  .innerContainer{
    border: 1px solid #efefef;
    padding: 20px;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
  }
  .chart-container{
    position: relative;
    width: 100%;
    height: calc(100vh - 230px);
  }
</style>
