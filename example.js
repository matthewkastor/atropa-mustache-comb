var MustacheComb, comb;

MustacheComb = require('MustacheComb');

/**
 * Main mustache function for generating pages. This may
 *  be used to process a single view.
 * @param {Object} view The view object to process.
 * @returns {String} Returns the html view as transformed by mustache.
 */
MustacheComb.prototype.mainMustache = function mainMustache(view) {
    var out, mustacheTemplateParts;
    // the generic page structure used repeatedly.
    mustacheTemplateParts = {
        "body" : view.body
    };
    this.mustacheTagHandlers.title = view.title;
    out = this.Mustache.to_html(this.templates.html, this.mustacheTagHandlers, mustacheTemplateParts);
    return out;
};

comb = new MustacheComb();

comb.addTemplateByFile('html.mustache');

comb.renderViews(MustacheComb.mainMustache);