const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            messaggio: '!Benvenuti!',
            elementi: [
                {
                    immagine: 'https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-787.jpg',
                    nome: 'Smartphone XYZ',
                    descrizione: 'Uno smartphone potente con caratteristiche avanzate e display nitido.',
                    prezzo: 499.99
                },
                {
                    immagine: 'https://img.freepik.com/free-psd/laptop-blue-background-mock-up_1022-178.jpg',
                    nome: 'Laptop ABC',
                    descrizione: 'Un laptop leggero e performante, ideale per la produttività in movimento.',
                    prezzo: 899.99
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg',
                    nome: 'Fotocamera 123',
                    descrizione: 'Una fotocamera professionale con alta risoluzione e molte funzionalità.',
                    prezzo: 699.99
                }
            ],
            attualeSlider: 0

        }
    },
    methods: {
        back() {
            let indiceUltimoSlider = this.elementi.length - 1;
            if (this.attualeSlider > 0) {
                this.attualeSlider--;
            }
            else {
                this.attualeSlider = indiceUltimoSlider;
            }

        },

        next() {
            let indiceUltimoSlider = this.elementi.length - 1;

            if (this.attualeSlider < indiceUltimoSlider) {
                this.attualeSlider++;
            }
            else {
                this.attualeSlider = 0;
            }
        },
        startAutoSlide() {
            // Inizia la slider automatica per 4 secondi 
            this.autoSlideInterval = setInterval(() => {
              this.next();
            }, 4000);
          },
          stopAutoSlide() {
            clearInterval(this.autoSlideInterval);
          },
        },
        mounted() {
          // Avvia la slider nuovamente
          this.startAutoSlide();
        },
        beforeDestroy() {
          // Interrompi la slider automatica
          this.stopAutoSlide();
        }

});

app.mount('#app');