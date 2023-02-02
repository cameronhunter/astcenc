module.exports = {
  /**
   * @param {string} [platform] Defaults to `process.platform`
   * @param {string} [arch] Defaults to `process.arch`
   * @returns {string|never}
   */
  executable(platform = process.platform, arch = process.arch) {
    try {
      return require('resolve-bin').sync(`@astcenc/${platform}-${arch}`, { executable: `astcenc-${platform}-${arch}` });
    } catch {
      throw new Error(`Could not find astcenc executable for ${platform}-${arch}`);
    }
  }
};
