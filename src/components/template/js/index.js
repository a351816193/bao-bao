import {API_GetVerifyCode, API_AddFeedback} from '@/fetch/restApi'
export default {
    mixins : [],
    data() {
        return {
            currentIndex : 0,
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
    },
}