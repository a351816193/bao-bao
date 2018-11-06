<template>
<!-- 意见反馈模版 -->
<div>
    <ul class="tpl-feedback-form">
        <li>
            <span>公司名称</span>
            <span><input v-model="feedbackParams.company" :class="{'error' : feedbackError === 'company'}"/></span>
        </li>
        <li>
            <span>姓名</span>
            <span><input v-model="feedbackParams.name" :class="{'error' : feedbackError === 'name'}"/></span>
        </li>
        <li>
            <span>职务</span>
            <span><input v-model="feedbackParams.job" :class="{'error' : feedbackError === 'job'}"/></span>
        </li>
        <li>
            <span>手机</span>
            <span><input v-model="feedbackParams.phone" :class="{'error' : feedbackError === 'phone'}"/></span>
        </li>
        <li>
            <span>电子邮件</span>
            <span><input v-model="feedbackParams.email" :class="{'error' : feedbackError === 'email'}"/></span>
        </li>
        <li class="tpl-feedback-mark">
            <span>反馈信息</span>
            <span><textarea v-model="feedbackParams.messages" :class="{'error' : feedbackError === 'messages'}"/></span>
        </li>
        <li class="tpl-feedback-code">
            <span>验证码</span>
            <span><input v-model="feedbackParams.verifyCode" v-on:eyup.13="submitFeedback" :class="{'error' : feedbackError === 'verifyCode'}"/></span>
            <span><img :src="verifyCode" v-on:click="setVerifyCode" ref="VERIFY_CODE"></span>
        </li>
        <li class="tpl-feedback-operate">
            <button class="btn-primary" v-on:click="submitFeedback">提交</button>
            <button class="btn-default" v-on:click="resetFeedbackParams">重置</button>
        </li>
    </ul>
</div>
</template>
<script>
import {API_GetVerifyCode, API_AddFeedback} from '@/fetch/restApi'
export default {
    data() {
        return {
            verifyCode: '',
            feedbackError: '',
            feedbackParams: {
                name: '',
                phone: '',
                email: '',
                company: '',
                job: '',
                messages: '',
                verifyCode: ''
            }
        }
    },
    methods: {
        resetFeedbackParams() {
            this.setVerifyCode()
            this.feedbackError = ''
            for (let i in this.feedbackParams) {
                this.feedbackParams[i] = ''
            }
        },
        checkFeedbackParams() {
            this.feedbackError = ''
            if (!this.feedbackParams.company) {
                this.feedbackError = 'company'
                return false
            } else if (!this.feedbackParams.name) {
                this.feedbackError = 'name'
                return false
            } else if (!this.feedbackParams.job) {
                this.feedbackError = 'job'
                return false
            } else if (!this.feedbackParams.phone) {
                this.feedbackError = 'phone'
                return false
            } else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.feedbackParams.phone))) {
                this.feedbackError = 'phone'
                alert('手机号码格式错误！')
                return false
            } else if (!this.feedbackParams.email) {
                this.feedbackError = 'email'
            } else if (!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.feedbackParams.email))) {
                this.feedbackError = 'email'
                alert('邮箱格式填写错误！')
                return false
            } else if (!this.feedbackParams.messages) {
                this.feedbackError = 'messages'
                return false
            } else if (!this.feedbackParams.verifyCode) {
                this.feedbackError = 'verifyCode'
                return false
            }
            return true
        },
        submitFeedback() {
            if (this.checkFeedbackParams()) {
                API_AddFeedback({
                    ...this.feedbackParams
                }).then(success => {
                    this.$router.push({path:'/feedbackSuccess'})
                }).catch(error => {
                    if (error.data.code === 1001) alert('验证码错误')
                    else alert('提交反馈失败')
                    this.setVerifyCode()
                }) 
            }
        },
        setVerifyCode() {
            API_GetVerifyCode().then(success => {
                this.verifyCode = 'data:image/png;base64,' + success.data.content
            }).catch(error => {
                
            })
        }
    },
    mounted() {
        if (this.$refs.VERIFY_CODE) {
            this.setVerifyCode()
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/template/index.scss';
</style>
