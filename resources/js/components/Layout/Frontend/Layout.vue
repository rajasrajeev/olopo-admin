<template>
    <div>

        <Header></Header>
        <div class="main-content" id="panel">
                <router-view></router-view>
         </div>
         <Footer></Footer>
    </div>
</template>

<script>

import Header from "./Header";
import Footer from "./Footer";
export default {
    name: "Layout",
    components: {Footer, Header},
    data(){
        return{
            isVerify:false,
            preloader:false,
            isActive: false,
            name:'',
            email: '',
            MBox: false
        }
    },
    methods:{
        sendMail(){
            this.preloader = true;
            this.isActive = true;
            this.axios.get('api/v1/sendVerifyMail')
                .then(response =>{
                    if (response.data.status === true ){
                        this.successNotification(response.data.message)
                        this.preloader = false;
                        this.isActive = false;
                    }
                })
                .catch(error =>{
                    this.errorNotification(error.response.data.message)
                    this.preloader = false;
                } )
        },
        getUserInfo(){
            this.axios.get("api/v1/get/user/info")
                .then(response => {
                    let item = response.data.data.original.data;
                    this.name = item.name;
                    this.isVerify = false;
                    this.email = item.email;
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        // Handle unauthorized access
                        // this.$router.push('/login').catch(() => {});
                    } else {
                        console.error('Error fetching user info:', error.response ? error.response.data : error);
                    }
                })
        }
    },
    beforeMount() {
        this.axios
        .get('api/v1/auth/check')
        .then(response => {
        })
        .catch(error => {
            if (error.response && error.response.status === 401) {
                // Handle unauthorized access
                // this.$router.push('/login').catch(() => {});
            } else {
                console.error('Auth check error:', error);
            }
        })
    },
    mounted() {
        this.getUserInfo();
    }
}
</script>

<style scoped>
 .fade {
     transition: opacity .15s linear;
 }
.alert-dismissible {
    padding-right: 3.85rem;
}
.alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: unset;
    border: unset;
    border-radius: unset;
    margin-left: 250px !important;
}
 @media (max-width: 1199.98px){
     .alert {
         margin-left: 0px !important;
     }
 }
 .spinner-border {
     width: 1rem;
     height: 1rem;
 }
</style>
