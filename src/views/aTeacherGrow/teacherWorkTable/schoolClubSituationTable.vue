<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>指导课外社团情况</h4>
      </div>
      <el-table
        :data="furLeaContinueEduData"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          label="起始时间"
          width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.start_time }}</span>
          </template>
        </el-table-column>
        <!--        <el-table-column-->
        <!--          align="center"-->
        <!--          label="终止时间"-->
        <!--          width="140">-->
        <!--          <template slot-scope="scope">-->
        <!--            <i class="el-icon-time"/>-->
        <!--            <span style="margin-left: 10px">{{ scope.row.end_time }}</span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->
        <el-table-column
          align="center"
          label="指导社团名称"
          prop="study_unit_name"
          width="230"/>
        <el-table-column
          align="center"
          label="指导社团类别"
          prop="fur_edu_content"
          width="150"/>
        <el-table-column
          align="center"
          label="社团所获奖项"
          prop="fur_edu_form"
          width="200"/>
        <el-table-column
          align="center"
          label="所获奖项比赛名称"
          prop="finish_hours"
          width="200"/>
        <!--        <el-table-column-->
        <!--          align="center"-->
        <!--          label="学习成绩"-->
        <!--          prop="fur_edu_score"-->
        <!--          width="100"/>-->
        <el-table-column
          align="center"
          label="获得时间"
          width="200">
          <template slot-scope="scope">
            <i class="el-icon-time"/>
            <span style="margin-left: 10px">{{ scope.row.completion_time }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="add">增加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchoolClubSituationTable'
}
</script>

<style scoped>
  .innerContainer{
    border: 1px solid #efefef;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
  }
  .buttonContainer{
    padding-top: 10px;
    text-align: center;
  }
  .innerContainer{
    text-align: center;
  }

</style>
