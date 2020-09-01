<template>
  <div class="form-container">
    <el-radio-group v-model="form.labelPosition">
      <el-radio-button label="left">label左对齐</el-radio-button>
      <el-radio-button label="right">label右对齐</el-radio-button>
      <el-radio-button label="top">label顶部对齐</el-radio-button>
    </el-radio-group>
    <el-form :model="form" ref="form" label-width="80px" :label-position="form.labelPosition">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option
            v-for="item in form.region"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.time"
            :picker-options="{
                      selectableRange: '09:00:00 - 16:00:00'
                  }"
            placeholder="选择时间"
            style="width:100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery" active-text="是" inactive-text="否"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="form.type"></el-checkbox>
          <el-checkbox label="地摊活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio v-for="item in form.resource" :key="item.key" :label="item.label"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc" placeholder="描述活动展开形式"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>

    <el-form
      :model="inlineForm"
      ref="inlineForm"
      :inline="true"
      class="demo-form-inline"
      label-width="80px"
    >
      <el-form-item label="审批人">
        <el-input v-model="inlineForm.admin"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onApply">提交申请</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
    <el-form
      :model="rulesForm"
      :rules="rulesForm.rules"
      ref="rulesForm"
      label-width="80px"
      status-icon
      size="large"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="rulesForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pswd">
        <el-input v-model="rulesForm.pswd" placeholder="请输入密码" type="password"></el-input>
      </el-form-item>
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
            {required:true, message:'年龄不能为空', trigger: 'blur'},
            {type: 'number', message: '年龄必须是数字', trigger: ['blur','chagne']}
        ]"
      >
        <el-input v-model.number="rulesForm.age" placeholder="请输入数字"></el-input>
      </el-form-item>

      <el-form-item label="Xfield" prop="xfield">
        <el-input v-model="rulesForm.xfield" placeholder="以la结尾"></el-input>
      </el-form-item>
      <el-form-item
        label="邮箱"
        prop="email"
        :rules="[
                { required: true, message: '请输入邮箱', trigger: 'blur'},
                { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur','change']}
            ]"
      >
        <el-input v-model="rulesForm.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="rulesSubmit">立即登录</el-button>
        <el-button type="danger">注册用户</el-button>
      </el-form-item>
    </el-form>

    <el-form :model="dynamicForm" ref="dynamicForm" label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="dynamicForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicForm.domains"
        :label="'域名'+index"
        :key="index"
        :prop="'domains.'+index+'.vlaue'"
        :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
        }"
      >
        <el-input v-model="domain.value" placeholder></el-input>
        <el-button type="danger" @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(dynamicForm)">提交</el-button>
        <el-button type="warning" @click="addDomain">新增域名</el-button>
        <el-button type="info" @click="resetForm(dynamicForm)">重置</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkXField = (rule, value, callback) => {
      let pattern = / *la/i;
      if (pattern.test(value)) {
        callback();
      } else {
        callback(new Error("请以la结尾哦！"));
      }
    };
    return {
      form: {
        labelPosition: "right",
        name: "活动1",
        region: [
          { label: "590 Emmy Circles", value: "590 Emmy Circles" },
          { label: "6174 Boyle Extensions", value: "6174 Boyle Extensions" },
          { label: "174 Horace Wells", value: "174 Horace Wells" },
          {
            label: "64621 Armstrong Station",
            value: "64621 Armstrong Station",
          },
        ],
        date: "",
        time: "",
        delivery: true,
        type: [],
        resource: [
          {
            key: 1,
            label: "Refined Fresh Mouse",
            title: "Refined Fresh Mouse",
          },
          {
            key: 2,
            label: "Refined Cotton Fish",
            title: "Refined Cotton Fish",
          },
          {
            key: 3,
            label: "Handmade Granite Hat",
            title: "Handmade Granite Hat",
          },
        ],
        desc: "",
      },
      inlineForm: {
        admin: "Boss",
      },
      rulesForm: {
        username: "admin",
        pswd: "HET",
        xfield: "",
        age: null,
        rules: {
          username: [
            { required: true, message: "请输入用户名", trigger: "blur" },
            {
              min: 3,
              max: 7,
              message: "长度在3-7之间",
              trigger: ["blur", "change"],
            },
          ],
          pswd: [
            {
              type: "string",
              required: true,
              message: "请输入密码",
              trigger: "blur",
            },
            {
              min: 6,
              max: 16,
              message: "密码长度在6-16位之间",
              trigger: ["blur", "change"],
            },
          ],
          xfield: [
            { required: true, message: "请输入自定义字段", trigger: "blur" },
            { validator: checkXField, trigger: ["blur", "change"] },
          ],
        },
      },
      dynamicForm: {
        domains: [{ value: "" }],
        email: "",
      },
    };
  },
  methods: {
    onSubmit() {
      alert("提交成功");
    },
    onApply() {
      alert("申请已提交");
    },
    cancel() {
      alert("你不能取消，哈哈哈！");
    },
    rulesSubmit() {
      this.$refs.rulesForm.validate((valid) => {
        if (valid) {
          alert("验证通过 也没法提交");
        } else {
          alert("没看见红字吗？！");
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("success");
        } else {
          alert("fail");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addDomain() {
      this.dynamicForm.domains.push({
        value: "",
      });
    },
    removeDomain(item) {
      let index = this.dynamicForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicForm.domains.splice(index, 1);
      }
    },
  },
};
</script>

<style>
</style>