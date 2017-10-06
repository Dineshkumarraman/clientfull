module.exports = function(grunt) {

   grunt.initConfig({  
    jscs: {
            all: [ 'gruntfile.js' ]
        },
    htmlhint: {
      all: {
        src: 'public/index.html'
      }
    },
    stylelint: {
    all: [ 'src/styles/custom-style.css' ]
  },

   watch: {
       files: [ 'gruntfile.js','public/index.html','src/styles/custom-style.css' ],
       tasks: [ 'jscs','htmlhint','stylelint' ]
   }
});    
   
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks("grunt-jscs");
   grunt.loadNpmTasks('grunt-htmlhint');
   grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks( 'grunt-stylelint' );
};