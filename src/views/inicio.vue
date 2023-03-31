<template>

  <center>
  <h2>Informacion del alumnos</h2>
  <div>
  <img src="../assets/juan-escutia2.jpeg" >
  </div>
  </center>

  

    <v-row justify-content="center" >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col >
          <h3 class="azul">Nombre:</h3> 
          <div>Canming Cai</div>
      </v-col>
      <v-col></v-col>
      <v-col >
          <h3 class="azul">Matricula:</h3> 
          <div>a01770368</div>
      </v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-row>

     
    <v-row >
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-col  >
          <h3 class="azul">Correo institucional:</h3> 
          <div>a01770368@tec.mx</div>
      </v-col>
      <v-col></v-col>
      <v-col >
          <h3 class="azul">Carrera:</h3> 
          <div>ITC</div>
      </v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-row>

 
      <v-row>  
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      <v-col >
          <h3 class="azul">Correo personal:</h3> 
          <div>caicanming50@qq.com</div>
      </v-col>
      <v-col></v-col>
      <v-col></v-col>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-row>
  



</template>

<script>
    export default {
        name: "BBSHome"
    }
</script>

<style scoped>

  h2{
    color: #384FFE;
    padding: 20px 0px;
    font-size: 40px;
  }

  .azul{
    color: #384FFE;
    padding-top: 10px;
    size: 30px;
  }

  img{
    border-radius:100%;
  }

</style>
