"use strict";
/**
 * Copyright (c) 2015-present, Waysact Pty Ltd
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const thisPluginName = "webpack-subresource-integrity";

class SubresourceIntegrityPlugin {
    /**
     * Create a new instance.
     *
     * @public
     */
    constructor(options = {}) {
        /**
         * @internal
         */
        this.setup = (compilation) => {
            const { mainTemplate } = compilation;
            mainTemplate.hooks.localVars.tap(thisPluginName, (source, chunk) => {
            });
        };
    }
    apply(compiler) {
        compiler.hooks.afterPlugins.tap(thisPluginName, (compiler) => {
            compiler.hooks.thisCompilation.tap({
                name: thisPluginName,
                stage: -10000,
            }, (compilation) => {
                this.setup(compilation);
            });
        });
    }
}
exports.SubresourceIntegrityPlugin = SubresourceIntegrityPlugin;
//# sourceMappingURL=index.js.map