module.exports = (grunt) -> 
	grunt.initConfig(
		sass:                              # Task
			dist:                            # Target
				options:                       # Target options
					style: 'expanded'
				files:                         # Dictionary of files
					'theme/style.css': 'custom.scss',       # 'destination': 'source'

		watch:
			styles:
				files: 'custom.scss'
				tasks: ['sass']
	)

	grunt.loadNpmTasks('grunt-contrib-sass')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-sftp-deploy')
	grunt.registerTask('default', ['watch'])
	grunt.registerTask('deploy', ['sass'])