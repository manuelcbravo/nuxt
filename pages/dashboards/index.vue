<template>
    <AdminTemplate>
  
      <div slot="body">
      </div>
  
    </AdminTemplate>
  </template>
  
  <script>
  
  import AdminTemplate from '../../components/Layout/AdminTemplate.vue';
  export default {
      name: "Dashboard",
      head() {
          return {
              title: "Dashboard"
          };
      },
      components: { AdminTemplate },
      data() {
        return {
        }
      },
      mounted() {
      }
  }
  </script>
  