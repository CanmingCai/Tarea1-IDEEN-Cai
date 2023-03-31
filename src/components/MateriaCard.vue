<template>

    

    <v-card width="60%"  class="mx-auto text-xs-center align-center" :style="{ marginTop: '20px' }">
        <div font size=2>
        <v-card-title>
            <div style="color: #384FFE;">Titulo de la materia</div> 
        </v-card-title>

        <v-card-text>
            <div>Profesor: Christiano Ronaldo</div> 
        </v-card-text>
        </div>
        <v-card-actions>
            <v-col class="text-right">
            <v-btn style="color:#384FFE; ">Ver mas detalles</v-btn>
            </v-col>
        </v-card-actions>

        <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card style="min-width: 700px;">
          <v-card-title>
            <strong>
            <div style="color: #384FFE;">Titulo de la materia</div>
            </strong> 
          </v-card-title>

          <v-card-text>
    
            <strong>
              <div style="color: #787C9D;">Profesor: Cristiano Ronaldo</div>
              <div style="color: #787C9D; padding-top: 6px;">Salon: La Congeladora</div>
              <div style="color: #787C9D; padding-top: 6px;">Dias: Lunes, Miercoles & Viernes</div>
              <div style="color: #787C9D; padding-top: 6px;">Horario: 7:00 - 9:00</div>
            </strong>
          </v-card-text>

          <v-card-actions>
              <v-col class="text-right">
              <v-btn color="primary"  @click="dialog = false">Cerrar</v-btn>
              </v-col>
          </v-card-actions>
        </v-card>
      </v-dialog>


    </v-card>

    
</template>
    
    <script>
        export default {
            name: "MateriasCard",
            data () {
                return {
                dialog: false,
      }
    },
        }
    </script>
    
    <style scoped>
    
    
    </style>