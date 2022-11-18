
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary>Container for all Glorious classes, functions, etc.</summary>
        /// <returns type="atropa"/>
      
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        data : {}, 
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary>Container for gobal data related to the classes and functions.</summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
  
/* vsdoc for MustacheComb */

(function (window) {
    

    window.MustacheComb = function(views){
        /// <summary>The Base MustacheComb class. The templates
        /// ///  and tag handlers shown in their registries will be loaded so, if
        /// ///  you want to use this class directly then you&amp;apos;ll need to reference
        /// ///  your own tag handler and template registries.</summary>
        /// <param name="views" type="Array">An array of view objects. Defaults to an empty array.</param>
    };

    var $x = window.MustacheComb;
    $x.prototype = {
                
        formatExample: function(text) {
            /// <summary>Tag handler for the example tag. Formats the text for html
            ///  and prettification.</summary>
            /// <param name="text" type="String">A string of text (example code) to process.</param>
        }, 
        
        includeFile: function(relPath) {
            /// <summary>Base Function for including files. Fetches file contents.</summary>
            /// <param name="relPath" type="String">The path to the file to include.</param>
            /// <returns type="">Returns the contents of the file or an html link to the unreadable
            ///  path.</returns>
        }, 
        
        includeExample: function(text) {
            /// <summary>Function for including example code from files.</summary>
            /// <param name="text" type="String">The path to the file to include.</param>
            /// <returns type="">Returns the contents of the file formatted for HTML.</returns>
        }, 
        
        mustacheIncluder: function(text) {
            /// <summary>Function for including files. Files may contain mustache tags.</summary>
            /// <param name="text" type="String">The path to the file to include.</param>
            /// <returns type="">Returns the contents of the file.</returns>
        }, 
        
        renderViews: function(callback) {
            /// <summary>Renders views from this.views objects array.</summary>
            /// <param name="callback" type=""></param>
        }
        
    };

    $x.__class = "true";
    $x.__typeName = "MustacheComb";
})(this);


