
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
