<template>
    <AdminTemplate>
  
      <div slot="body">
      </div>
  
    </AdminTemplate>
  </template>
  
  <script>
  
  import AdminTemplate from '../../../components/Layout/AdminTemplate.vue';
  export default {
      name: "Usuarios",
      head() {
          return {
              title: "Usuarios"
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
  