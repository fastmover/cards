module.exports = (grunt) ->
  cwd = __dirname

  #grunt.log.write('grunt\n')

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

  #
  #    uglify: {
  #      options: {
  #        //banner: '! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n'
  #      },
  #      build: {
  #        src: 'src/<%= pkg.name %>.js',
  #        dest: 'build/<%= pkg.name %>.min.js'
  #      }
  #    },
  #
    compass:
      dev:
        options:
          cssPath: "public/css"
          sassPath: "sass"

    watch:
      compass:
#        files: "**/*.sass"
        files: "sass/*.sass"
        tasks: ["compass"]
        options:
          debounceDelay: 250
#          cssDir: "public/framework/app/webroot/css"
#          sassDir: "public/framework/app/webroot/sass"


  # Load the plugin that provides the "uglify" task.
  #grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks "grunt-contrib-compass"
  grunt.loadNpmTasks "grunt-contrib-watch"

  # Default task(s).
  grunt.registerTask "default", ["compass"]