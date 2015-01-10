module.exports = function(grunt) {

  // Project configuration.
  grunt
    .initConfig({
      pkg: grunt.file.readJSON('package.json'),
      meta: {
        rootDir: "D:/workspace/clarity-dev.steven/main/webapp/modules",
        distDir: "core",
        sourceDir: 'resource'
      },
      /**** clean work *****/
      clean: {
        options:{
            force: true
        },
        start: ['<%= meta.distDir %>/'],
        dynamic: ['<%= meta.distDir %>/']
      },
      /**** copy work ****/
      copy: {
        development: {
          options: {
            enabled: true,
            max_jshint_notifications: 5, // maximum number of notifications from jshint output
            title: "Project Name", // defaults to the name in package.json, or will use project directory's name
            success: false, // whether successful grunt executions should be notified automatically
            duration: 3 // the duration of notification in seconds, for `notify-send only
          },
          files: [
              {
                expand: true,
                cwd: '<%= meta.sourceDir %>/',
                src: [
                  '**/*'
                ],
                dest: '<%= meta.distDir %>/'
              }
          ]
        },
        production: {
          files: [
              {
                expand: true,
                cwd: '<%= meta.sourceDir %>/',
                src: [
                  'images/**/*',
                  'MOD-INF/*',
                  'scripts/**/*',
                  '!scripts/angScripts/**/*',
                  'templates/**/*',
                  'tmpData/**/*',
                  '*',
                  '!main.html',
                  '!projectTailored.html'
                ],
                dest: '<%= meta.distDir %>/'
              }
          ]
        },
        dynamic: {
          expand: true,
          cwd: '<%= meta.sourceDir %>/',
          src: [ '**/*'],
          dest: '<%= meta.distDir %>/'
        }
      },
      /**** processhtml work ****/
      processhtml: {
        production: {
          files: {
            '<%= meta.distDir %>/main.html': ['<%= meta.sourceDir %>/main.html'],
            '<%= meta.distDir %>/projectTailored.html': ['<%= meta.sourceDir %>/projectTailored.html']
          }
        }
      },
      /**** uglify work ****/
      uglify: {
        production:{
          options: {
            mangle: false,
            compress: true,
            beautify: false,
            preserveComments: 'some'
          },
          files: [
            /***************** main.html *****************/
            {
              src: [
                '<%= meta.sourceDir %>/externals/lib/jquery-1.8.0.js',
                '<%= meta.sourceDir %>/externals/jquery.cookie.js',
                '<%= meta.sourceDir %>/externals/jquery-ui/jquery.ui.touch-punch.js',
                '<%= meta.sourceDir %>/externals/lib/jqueryui/js/jquery-ui-1.8.23.custom.js',
                '<%= meta.sourceDir %>/externals/lib/angular-1.0.5/angular.js',
                '<%= meta.sourceDir %>/externals/lib/angular-1.0.5/angular-resource.js',
                '<%= meta.sourceDir %>/externals/lib/bootstrap/js/bootstrap.js',
                '<%= meta.sourceDir %>/externals/lib/angularui/js/ui-bootstrap-tpls-0.3.0.js',
                '<%= meta.sourceDir %>/externals/lib/dropzone/dropzone.js'
              ],
              dest: '<%= meta.distDir %>/externals/lib/libs-build.min.js'
            },
            {
              src: [
                '<%= meta.sourceDir %>/scripts/angScripts/util.js',
                '<%= meta.sourceDir %>/scripts/angScripts/resources.js',
                '<%= meta.sourceDir %>/scripts/angScripts/modules/directives.js',
                '<%= meta.sourceDir %>/scripts/angScripts/modules/filters.js',
                '<%= meta.sourceDir %>/scripts/angScripts/modules/walkDir.js',
                '<%= meta.sourceDir %>/scripts/angScripts/angApp.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/apiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/mainService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/addressApiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/batchService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/chartingApiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/constantService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/datasetsApiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/datasetsRouterService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/datasetsService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/dedupRouterService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/exportService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/fileUploader.service.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/profilingApiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/projectListService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/projectService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/settingService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/validationApiService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/services/vaultService.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/addressCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/aggregationCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/batchCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/clusterCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/datasetsCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/datatableCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/dedupCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/exportCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/googleAddrCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/importDatasetCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/mainCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/maporamaAddrCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/permissionDedupCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/profilingCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/projectCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/projectListCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/reloadCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/samplingCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/settingCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/storageLimitCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/tableDialogsCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/trilliumAddrCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/uploadSourceFilesCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/validationCtrl.js',
                '<%= meta.sourceDir %>/scripts/angScripts/controllers/validListCtrl.js'
              ],
              dest: '<%= meta.distDir %>/scripts/angScripts/main-build.min.js'
            },
            {
              src: [
                '<%= meta.sourceDir %>/scripts/util/dom.js',
                '<%= meta.sourceDir %>/scripts/util/dialog.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/jquery.dataTables.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/FixedHeader.js',
                '<%= meta.sourceDir %>/scripts/call-command.js',
                '<%= meta.sourceDir %>/scripts/command-constant.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/profiler/datatype-analysis.js',
                '<%= meta.sourceDir %>/scripts/project/exporters.js',
                '<%= meta.sourceDir %>/scripts/extension/exporter/export-to-database-dialog.js',
                '<%= meta.sourceDir %>/scripts/extension/salesforce/export-to-salesforce-dialog.js',
                '<%= meta.sourceDir %>/externals/lib/d3/d3.v3.min.js',
                '<%= meta.sourceDir %>/externals/lib/canvg-1.3/rgbcolor.js',
                '<%= meta.sourceDir %>/externals/lib/canvg-1.3/StackBlur.js',
                '<%= meta.sourceDir %>/externals/lib/canvg-1.3/canvg.js',
                '<%= meta.sourceDir %>/externals/lib/nvd3/nv.d3.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/util.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawBar.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawPie.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawLine.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawLineBar.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawScatter.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/draw-chart/drawArea.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/jstat/jquery.flot.min.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/jstat/jstat-0.1.0.min.js'
              ],
              dest: '<%= meta.distDir %>/scripts/util-build.min.js'
            },
            /***************** projectTailored.html *****************/
            {
              src: [
                '<%= meta.sourceDir %>/scripts/optionsConstant.js',
                '<%= meta.sourceDir %>/scripts/command-constant.js',
                '<%= meta.sourceDir %>/scripts/call-command.js',
                '<%= meta.sourceDir %>/scripts/extension/facet-persistent.js',
                '<%= meta.sourceDir %>/externals/jquery-1.4.2.min.js',
                '<%= meta.sourceDir %>/externals/jquery.cookie.js',
                '<%= meta.sourceDir %>/externals/jquery.eventstack-0.3.js',
                '<%= meta.sourceDir %>/externals/suggest/suggest-1.2.1.min.js',
                '<%= meta.sourceDir %>/externals/lib/jqueryui/js/jquery-ui-1.8.23.custom.js',
                '<%= meta.sourceDir %>/externals/jquery-ui/jquery.ui.touch-punch.js',
                '<%= meta.sourceDir %>/externals/imgareaselect/jquery.imgareaselect.js',
                '<%= meta.sourceDir %>/externals/date.js',
                '<%= meta.sourceDir %>/scripts/extension/projectTailored.js',
                '<%= meta.sourceDir %>/scripts/angScripts/util.js',
                '<%= meta.sourceDir %>/scripts/views/data-table/column-header-ui.js',
                '<%= meta.sourceDir %>/scripts/dialogs/custom-tabular-exporter-dialog.js',
                '<%= meta.sourceDir %>/scripts/util/misc.js',
                '<%= meta.sourceDir %>/scripts/util/url.js',
                '<%= meta.sourceDir %>/scripts/util/string.js',
                '<%= meta.sourceDir %>/scripts/util/ajax.js',
                '<%= meta.sourceDir %>/scripts/util/menu.js',
                '<%= meta.sourceDir %>/scripts/util/dialog.js',
                '<%= meta.sourceDir %>/scripts/util/dom.js',
                '<%= meta.sourceDir %>/scripts/util/date-time.js',
                '<%= meta.sourceDir %>/scripts/util/custom-suggest.js',
                '<%= meta.sourceDir %>/scripts/util/encoding.js',
                '<%= meta.sourceDir %>/scripts/widgets/histogram-widget.js',
                '<%= meta.sourceDir %>/scripts/widgets/slider-widget.js',
                '<%= meta.sourceDir %>/scripts/extension/browsing-engine.js',
                '<%= meta.sourceDir %>/scripts/extension/history-panel.js',
                '<%= meta.sourceDir %>/scripts/extension/process-panel.js',
                '<%= meta.sourceDir %>/scripts/extension/extension-bar.js',
                '<%= meta.sourceDir %>/scripts/extension/summary-bar.js',
                '<%= meta.sourceDir %>/scripts/project/exporters.js',
                '<%= meta.sourceDir %>/scripts/project/scripting.js',
                '<%= meta.sourceDir %>/scripts/extension/list-facet.js',
                '<%= meta.sourceDir %>/scripts/facets/range-facet.js',
                '<%= meta.sourceDir %>/scripts/facets/timerange-facet.js',
                '<%= meta.sourceDir %>/scripts/facets/scatterplot-facet.js',
                '<%= meta.sourceDir %>/scripts/facets/text-search-facet.js',
                '<%= meta.sourceDir %>/scripts/extension/data-table-view.js',
                '<%= meta.sourceDir %>/scripts/extension/cell-ui.js',
                '<%= meta.sourceDir %>/scripts/views/data-table/menu-facets.js',
                '<%= meta.sourceDir %>/scripts/views/data-table/menu-edit-cells.js',
                '<%= meta.sourceDir %>/scripts/views/data-table/menu-edit-column.js',
                '<%= meta.sourceDir %>/scripts/reconciliation/standard-service-panel.js',
                '<%= meta.sourceDir %>/scripts/views/data-table/menu-reconcile.js',
                '<%= meta.sourceDir %>/scripts/reconciliation/recon-manager.js',
                '<%= meta.sourceDir %>/scripts/reconciliation/recon-dialog.js',
                '<%= meta.sourceDir %>/scripts/rdf-extension/menu-bar-extensions.js',
                '<%= meta.sourceDir %>/scripts/dialogs/expression-preview-dialog.js',
                '<%= meta.sourceDir %>/scripts/dialogs/clustering-dialog.js',
                '<%= meta.sourceDir %>/scripts/dialogs/scatterplot-dialog.js',
                '<%= meta.sourceDir %>/scripts/dialogs/templating-exporter-dialog.js',
                '<%= meta.sourceDir %>/scripts/dialogs/column-reordering-dialog.js',
                '<%= meta.sourceDir %>/scripts/dialogs/merge-columns.js',
                '<%= meta.sourceDir %>/scripts/dialogs/merge-columns-by-function.js'
              ],
              dest: '<%= meta.distDir %>/externals/libs-tailored-build.min.js'
            },
            {
              src: [
                /*****************extension*******************/
                '<%= meta.sourceDir %>/scripts/extension/activespaces/export-to-activespaces-dialog.js',
                '<%= meta.sourceDir %>/scripts/extension/salesforce/export-to-salesforce-dialog.js',
                '<%= meta.sourceDir %>/scripts/extension/address/address_menu.js',
                '<%= meta.sourceDir %>/scripts/extension/address/address-validation/add-service.js',
                '<%= meta.sourceDir %>/scripts/extension/address/address-validation/edit-service.js',
                '<%= meta.sourceDir %>/scripts/extension/address/address-validation/invoke-service.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/batchmode.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/extension.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/batchModeDialog.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/batchProcessTab.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/batchDetailQuery.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/batchProcessDialog.js',
                '<%= meta.sourceDir %>/scripts/extension/batchmode/emailConfig.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/project-injection.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/profiler/row-analysis.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/profiler/column-analysis.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/profiler/datatype-analysis.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/profiler/batch-profiling.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/jstat/jquery.flot.min.js',
                '<%= meta.sourceDir %>/scripts/extension/charting/jstat/jstat-0.1.0.min.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/project-injection.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/advanced-column-spliting.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/column-spliting-with-reorder.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/facet-persistent.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/date-type-handler.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/type-synchronization.js',
                '<%= meta.sourceDir %>/scripts/extension/editing/numeric-transforms.js',
                '<%= meta.sourceDir %>/scripts/extension/exporter/export-to-database-dialog.js',
                '<%= meta.sourceDir %>/scripts/extension/gdata/gdata-extension.js',
                '<%= meta.sourceDir %>/scripts/extension/gdata/project/exporters.js',
                '<%= meta.sourceDir %>/scripts/extension/jdbc/jdbc-extension.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/project-injection.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/metadataHandlers.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/jquery.datePicker.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/date.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/exportMetadata.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/exportErrors.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/compare-columns.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/enum.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/specialValue.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/tables-lookup.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/custom-type.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/date-transformation/date-transformation.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/type-definition/type-definition.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/type-definition/assign-type.js',
                '<%= meta.sourceDir %>/scripts/extension/metadata/export-import-config.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/jquery.dataTables.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/FixedHeader.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/netricsDialog.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/netricsUploadDialog.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/netricsMultipleFilesDialog.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/netricsMultipleFilesConfig.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/netricsQuery.js',
                '<%= meta.sourceDir %>/scripts/extension/netrics/project-injection2.js',
                '<%= meta.sourceDir %>/scripts/extension/sample/project-injection.js'
              ],
              dest: '<%= meta.distDir %>/externals/main-tailored-build.min.js'
            },
            {
              src: [
                /*************************GREL auto-completion*****************************/
                '<%= meta.sourceDir %>/externals/codemirror-3.18/lib/codemirror.js',
                '<%= meta.sourceDir %>/externals/codemirror-3.18/mode/grel/grel.js',
                '<%= meta.sourceDir %>/externals/codemirror-3.18/addon/hint/show-hint.js',
                '<%= meta.sourceDir %>/externals/codemirror-3.18/addon/hint/grel-hint.js'
              ],
              dest: '<%= meta.distDir %>/externals/grel-tailored-build.min.js'
            }
          ]
        }
      },
      /**** cssmin work ****/
      cssmin: {
        production: {
          options: {
            // To rewrite the img path to correct after minified.
            // set the path where you will put the min file to. The path will be rewrite by relative path.
            target: '<%= meta.sourceDir %>/styles/whatever-but-for-example-style.min.css'
          },
          files: {
            '<%= meta.distDir %>/styles/main-build.min.css': [
              '<%= meta.sourceDir %>/externals/lib/bootstrap/css/bootstrap.css',
              '<%= meta.sourceDir %>/externals/lib/jqueryui/css/ui-lightness/jquery-ui-1.8.23.custom.css',
              '<%= meta.sourceDir %>/externals/lib/nvd3/nv.d3.css',
              '<%= meta.sourceDir %>/styles/util/dialog.less',
              '<%= meta.sourceDir %>/styles/views/data-table-view.less',
              '<%= meta.sourceDir %>/styles/dialogs/column-reordering-dialog.less',
              '<%= meta.sourceDir %>/styles/second/*.css',
              '<%= meta.sourceDir %>/styles/second/extension/enum.css',
              '<%= meta.sourceDir %>/styles/second/extension/jquery.dataTables.css'
            ],
            '<%= meta.distDir %>/styles/main-tailored-build.min.css': [
              '<%= meta.sourceDir %>/externals/codemirror-3.18/lib/codemirrorClarity.css',
              '<%= meta.sourceDir %>/externals/codemirror-3.18/addon/hint/show-hintClarity.css',
              '<%= meta.sourceDir %>/externals/suggest/css/suggest-1.2.1.min.css',
              '<%= meta.sourceDir %>/externals/lib/jqueryui/css/ui-lightness/jquery-ui-1.8.23.custom.css',
              '<%= meta.sourceDir %>/externals/imgareaselect/css/imgareaselect-default.css',
              '<%= meta.sourceDir %>/styles/jquery-ui-overrides.less',
              '<%= meta.sourceDir %>/styles/second/extension/common.css',
              '<%= meta.sourceDir %>/styles/second/extension/menu.css',
              '<%= meta.sourceDir %>/styles/util/dialog.less',
              '<%= meta.sourceDir %>/styles/util/custom-suggest.less',
              '<%= meta.sourceDir %>/styles/util/encoding.less',
              '<%= meta.sourceDir %>/styles/second/extension/project.css',
              '<%= meta.sourceDir %>/styles/second/extension/sidebar.css',
              '<%= meta.sourceDir %>/styles/second/extension/facets.css',
              '<%= meta.sourceDir %>/styles/project/process.less',
              '<%= meta.sourceDir %>/styles/second/extension/enum.css',
              '<%= meta.sourceDir %>/styles/widgets/histogram-widget.less',
              '<%= meta.sourceDir %>/styles/widgets/slider-widget.less',
              '<%= meta.sourceDir %>/styles/second/extension/data-table-view.css',
              '<%= meta.sourceDir %>/styles/dialogs/expression-preview-dialog.less',
              '<%= meta.sourceDir %>/styles/dialogs/clustering-dialog.less',
              '<%= meta.sourceDir %>/styles/dialogs/scatterplot-dialog.less',
              '<%= meta.sourceDir %>/styles/dialogs/column-reordering-dialog.less',
              '<%= meta.sourceDir %>/styles/dialogs/custom-tabular-exporter-dialog.less',
              '<%= meta.sourceDir %>/styles/reconciliation/recon-dialog.less',
              '<%= meta.sourceDir %>/styles/reconciliation/standard-service-panel.less',
              '<%= meta.sourceDir %>/externals/lib/bootstrap/css/bootstrap.css',
              '<%= meta.sourceDir %>/styles/second/main.css',
              '<%= meta.sourceDir %>/styles/second/directives.css',
              '<%= meta.sourceDir %>/styles/second/tablet.css',
              '<%= meta.sourceDir %>/styles/second/toolbar.css'
            ]
          }
        }
      },
      /**** html2js work ****/
      html2js: {
        all:{
          options:{
            module: 'clarity.template',
            base: '<%= meta.sourceDir %>'
          },
          src:['<%= meta.sourceDir %>/templates/**/*.html'],
          dest:'<%= meta.sourceDir %>/scripts/clarity.tpl.js'
        }
      },
      /**** watch work ****/
      watch: {
        options:{
            spawn: false,
            atBegin: true
        },
        files: [
            '<%= meta.sourceDir %>/**/*'
        ],
        tasks: []
      },
      /**** notify work ****/
      notify: {
        development: {
          options: {
            title: 'Build success',
            message: 'Build project successful. Please get it in "core" folder.'
          }
        },
        production:{
          options: {
            title: 'Release success',
            message: 'Generate release build success. Please get it in "core" folder.'
          }
        },
        copy: {
          options: {
            title: 'Copy success',
            message: ''
          }
        },
        remove: {
          options: {
            title: 'Remove success',
            message: ''
          }
        }
      }

    });


grunt.event.on('watch', function(action, filepath, target) {
    /*
    * Known issue:
    *  1. When folder is empty, add or delete a file will not trigger the event.
    *  2. When delete a folder, the event can not be triggered.
    * workaround:
    *  After do these operations above, munually execute init command to delete all the files in dist folder and recreate all the files from source folder to dist forlder.
    */
grunt.log.writeln("cwd:" + action);
    var resource = grunt.config("meta.sourceDir"); // the directory of resource
    var dist = grunt.config("meta.distDir"); // the directory of destination

    var path = require('path');
    var filepath = filepath.replace(/\\/g,"/");
    var dirname = path.dirname(filepath);
    var basename = path.basename(filepath);
    if(action == "changed" || action == "added"){
      //change the notify copy message option of watch to clean
      var optionNotifyCopyTask = 'notify.copy.options.message';
      grunt.config(optionNotifyCopyTask, 'Copy file "'+basename+'" success.');

      //change the task option of watch to clean
      var optionWatchTask = 'watch.tasks';
      grunt.config(optionWatchTask, ['copy:dynamic', 'notify:copy']);

      //changes changed file source to that of the changed file
      var optionCwd = 'copy.dynamic.cwd';
      var optionSrc = 'copy.dynamic.src';
      grunt.config(optionCwd, dirname);
      grunt.config(optionSrc, basename);

      //customizes output directory so that file goes to correct place
      var optionDest = 'copy.dynamic.dest';
      grunt.config(optionDest, dirname.replace(resource, dist));
    }
    else if(action == "deleted"){
      //change the nodify remove message option of watch to clean
      var optionNotifyRemoveTask = 'notify.remove.options.message';
      grunt.config(optionNotifyRemoveTask, 'Remove file "'+basename+'" success.');

      //change the task option of watch to clean
      var optionWatchTask = 'watch.tasks';
      grunt.config(optionWatchTask, ['clean:dynamic', 'notify:remove']);

      //customizes output directory so that file goes to correct place
      var optionClean = "clean.dynamic";
      grunt.config(optionClean, [filepath.replace(resource, dist)]);
    }

    /* //For testing
    grunt.log.writeln("cwd:" + dirname);
    grunt.log.writeln("src:" + basename);
    grunt.log.writeln("dest:" + dirname.replace(resource, dist));*/

});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-notify');


  // Default task(s).
  //grunt.registerTask('default', ['clean:start', 'copy:development', 'notify:development', 'watch']);
  grunt.registerTask('default', ['clean:start', 'html2js:all', 'copy:development', 'notify:development', 'watch']);
  // Use this to generate a production version
  grunt.registerTask('release', ['clean:start', 'html2js:all', 'copy:production', 'uglify:production', 'cssmin:production', 'processhtml:production', 'notify:production']);

};