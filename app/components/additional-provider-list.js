import Ember from 'ember';
import Analytics from 'ember-osf/mixins/analytics';
/**
 * @module ember-preprints
 * @submodule components
 */

/**
 * Displays additional SHARE sources for preprints index page
 *
 * Sample usage:
 * ```handlebars
 * {{additional-provider-list
 *     additionalProviders=additionalProviders
 * }}
 * ```
 * @class additional-provider-list
 */
export default Ember.Component.extend(Analytics, {
    theme: Ember.inject.service(),
    sortedList: Ember.computed('additionalProviders', function() {
        if (!this.get('additionalProviders')) {
            return;
        }
        const sortedList = this.get('additionalProviders').sort();
        const pairedList = [];
        for (let i = 0; i < sortedList.get('length'); i += 2) {
            let pair = [];
            pair.pushObject(sortedList.objectAt(i));
            if (sortedList.objectAt(i + 1)) {
                pair.pushObject(sortedList.objectAt(i + 1));
            }
            pairedList.pushObject(pair);
        }
        return pairedList;
    })
});
