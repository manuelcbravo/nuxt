<template>
    <div>
        <Header/>
        <Sidebar/>
        <main id="content" role="main" class="main">
            <!-- Content -->
            <div class="content container-fluid">
                <slot name="body">
                        
                </slot>
            </div>
            <Footer/>
        </main>
    </div>
</template>
<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
 export default {
    name: "Layout",
    components: { Footer,Header,Sidebar },
    mounted() {
        let user = localStorage.getItem('userAuth')
        if(user == null){
            this.$router.push('/auth/login')
        }
    },
 }
</script>