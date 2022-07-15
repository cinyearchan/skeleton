const Skeleton = require('./skeleton')
class SkeletonPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.done.tap('SkeletonPlugin', async() => {
      this.skeleton = new Skeleton(this.options)
      await this.skeleton.init()
      const skeletonHTML = await this.skeleton.getHTML(this.options.domain)
      
    })
  }
}

exports.SkeletonPlugin = SkeletonPlugin
