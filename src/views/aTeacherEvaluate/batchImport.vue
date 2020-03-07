<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">导入类别:</div>
        <div>
          <el-select v-model="typeValue" placeholder="请选择类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="margin-left: 20px">
          <el-button type="primary" plain @click="excelImportShow = true" >批量导入</el-button>
        </div>
        <div style="margin-left: 20px">
          <el-button type="success" plain >批量导出</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <div v-if="typeValue=='工资信息'">
      <wage-table/>
    </div>
    <div v-if="typeValue=='职称信息'">
      <job-title-table/>
    </div>
    <el-dialog :visible.sync="excelImportShow" width="21%" title="导入文件">
      <div><el-button type="text" @click="downloadText">点击下载</el-button>Excel模板 </div>
      <el-upload
        :before-upload="beforeUpload"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        class="upload-demo"
        drag
        action="http://zhongkeruitong.top/show/assertmanager/batch_add_asset"
      >
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
        <!--<i class="el-icon-upload"></i>-->
        <!--<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>-->
        <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        <!--<el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->

        <!--<div slot="tip" class="el-upload__tip">只能上传excel文件</div>-->

        <div slot="tip" class="el-upload-list__item-name">{{ fileName }}</div>

      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="excelImportShow = false">取消</el-button>
        <el-button type="primary" @click="submitUpload()">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import wageTable from '@/views/aTeacherEvaluate/batchImportTable/wageTable'
import jobTitleTable from '@/views/aTeacherEvaluate/batchImportTable/jobTitleTable'
export default {
  name: 'BatchImport',
  components: { wageTable, jobTitleTable },
  data() {
    return {
      excelImportShow: false,
      typeValue: '工资信息',
      options: [
        {
          value: '工资信息',
          label: '工资信息'
        },
        {
          value: '职称信息',
          label: '职称信息'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
