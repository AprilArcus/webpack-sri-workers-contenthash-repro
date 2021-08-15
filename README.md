# Minimal reproduction for Webpack Subresource Integrity Plugin + Workers + contenthash

c.f. https://github.com/webpack/webpack/issues/13801

via [@roninjin10](https://github.com/roninjin10):
> Here is my investigation into this issue that lead to helping produce the minimal example:
> 
> If [using contenthash](https://github.com/AprilArcus/webpack-sri-workers-contenthash-repro/blob/main/webpack.config.js#L15) with a [WebWorker](https://github.com/AprilArcus/webpack-sri-workers-contenthash-repro/blob/main/index.js#L1) and any plugin is calling [Maintemplate.prototype.hook.localVars](https://github.com/AprilArcus/webpack-sri-workers-contenthash-repro/blob/main/minimalplugin.js#L22) such as the [webpack-subresource-integrity plugin](https://github.com/waysact/webpack-subresource-integrity/blob/main/webpack-subresource-integrity/index.ts#L168), the runtime starts requesting for undefined when it tries to load the web worker chunk both observed in the console and from [adding logging in webpacks source](https://github.com/webpack/webpack/blob/main/lib/runtime/GetChunkFilenameRuntimeModule.js#L240) .
> 
> Since this is happening as a sideeffect of calling .tap, I think the issue lies downstream of
> 
> https://github.com/webpack/webpack/blob/c181294865dca01b28e6e316636fef5f2aad4eb6/lib/RuntimePlugin.js#L365
> ```javascript
> mainTemplate.hooks.localVars.isUsed() || 
> ```
> 
> but I'm not sure.
