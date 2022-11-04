<template>
    <body class="has-navbar-vertical-aside navbar-vertical-aside-show-xl   footer-offset">
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
    </body>
</template>
<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import Footer from './Footer.vue';
 export default {
    name: "Layout",
    components: { Footer,Header,Sidebar }
 }
</script>