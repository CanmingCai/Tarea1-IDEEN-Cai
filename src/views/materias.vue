<template>
    <center>
        <h2>Informacion de las materias</h2>
    </center>

    <div v-for="(MateriasCard, index) in 5" :key="index">
    <MateriasCard/>
    </div>
</template>
    
    <script>

    import MateriasCard from "../components/MateriaCard.vue"

        export default {
            name: "Materias",
            components: {MateriasCard}
        }
    </script>
    
    <style scoped>

    h2{
        color: #384FFE;
        padding: 20px 0px;
        font-size: 40px;
    }
    
    </style>