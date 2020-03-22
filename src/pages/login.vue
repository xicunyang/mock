<template>
  <div class="login">
    <Card style="width: 500px">
      <p slot="title">登录</p>
      <Form :model="loginForm">
        <FormItem>
          <Input v-model="loginForm.userName" placeholder="请输入用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="loginForm.password" placeholder="请输入密码">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </FormItem>
        <FormItem class="buttons">
          <Button type="primary" @click="login">登录</Button>
          <Button style="margin-left: 8px">重置</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          userName: '111',
          password: '222',
        }
      }
    },
    mounted(){
      console.log(process);
    },
    methods:{
      login(){
        if(!this.loginForm.userName){
          this.$Message.info('请输入用户名');
          return
        }
        if(!this.loginForm.password){
          this.$Message.info('请输入密码');
          return
        }
        console.log(this.$api);
        // 登录
      }
    }
  }
</script>

<style scoped lang="less">
  .login  {
    position: relative;
    height: 100vh;

    .ivu-card {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      margin: 0 auto;
      margin-top: -250px;

      /deep/ .ivu-card-body{
        padding-bottom: 0;
      }
    }

    /deep/ .ivu-input{
      height: 40px !important;
    }
    /deep/ .ivu-input-group-prepend{
      padding: 4px 11px;
    }
    /deep/ .ivu-icon{
      font-size: 20px;
    }

    .buttons{
      text-align: center;
    }
  }
</style>
