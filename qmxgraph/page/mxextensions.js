/**
 * Those are extensions to the default mxGraph lib.
 */

/*global mxConstants */
/*global mxText */
/*global mxUtils */

(function() {
    "use strict";

    /**
     * Defines the key for the label rotatable style. This specifies if a cell's label can be
     * rotated. Possible values are 0 or 1. Default is 1.
     * @type {string}
     */
    mxConstants.STYLE_LABEL_ROTATABLE = 'labelRotatable';

    var superMxTextApply = mxText.prototype.apply;
    /**
     * Override to process the {@link mxConstants.STYLE_LABEL_ROTATABLE} style option.
     *
     * @param {mxCellState} state
     */
    mxText.prototype.apply = function(state) {
        superMxTextApply.call(this, state);

        var effectiveLabelRotatable = mxUtils.getValue(
            this.style, mxConstants.STYLE_LABEL_ROTATABLE, 1);
        if (effectiveLabelRotatable == 0) {  // jshint ignore:line
            this.rotation = 0;
        }
    };

    var superMxTextGetTextRotation = mxText.prototype.getTextRotation;
    /**
     * Override to process the {@link mxConstants.STYLE_LABEL_ROTATABLE} style option.
     */
    mxText.prototype.getTextRotation = function() {
        var effectiveLabelRotatable = mxUtils.getValue(
            this.style, mxConstants.STYLE_LABEL_ROTATABLE, 1);
        if (effectiveLabelRotatable == 0) {  // jshint ignore:line
            return 0;
        }

        return superMxTextGetTextRotation.call(this);
    };
})();
