module.exports = {
  purge: [],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      backgroundImage : {
        'jodumalogo' : "url('../img/jodumalogo.png')",
        'jodumalosin' : "url('../img/jodumalosin.png')",
        'jodumahd' : "url('../img/jodumahd.png')",
        'jodumabn' : "url('../img/jodumabn.png')",
        'jodumasin' : "url('../img/jodumasin.png')",
        'jodumanegro' : "url('../img/jodumanegro.png')",
        'jodumaneon' : "url('../img/jodumanenon.png')",
        'lerma' : "url('../img/lerma.png')",
        'agave' : "url('../img/agave.jpg')",
        'asalto' : "url('../img/asalto.jpg')",
        'cascadas' : "url('../img/cascadas.jpg')",
        'piramides' : "url('../img/piramides.jpg')",
        'rio' : "url('../img/rio.jpg')",

      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#60A5FA',
        'secondary': '#10B981',
        'terciary':'#EEF2FF'


      }),
      textColor:{
        'primary': '#60A5FA',
        'secondary': '#10B981',
        'terciary':'#EEF2FF'

      },
      fontFamily:{
        Montserrat:['Montserrat','sans-serif']
      }
    },
  },
  variants: {
    width:["responsive", "hover", "focus"],
          extend: {},
  },
  plugins: [],
}
