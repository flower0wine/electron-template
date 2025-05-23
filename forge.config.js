module.exports = {
    packagerConfig: {
        arch: ['ia32'],
        platform: ['win32'],
        executableName: 'electron-vite',
        asar: true,
        dereferenceSymlinks: true,
        extraResource: ['build'],
    },
    makers: [
    //   {
    //     name: '@electron-forge/maker-snap',
    //     config: {
    //       features: {
    //         audio: true,
    //         mpris: 'com.electron.app',
    //         webgl: true
    //       },
    //       summary: 'Pretty Awesome'
    //     }
    //   },
    //   {
    //     name: '@electron-forge/maker-rpm',
    //   },
    //   {
    //     name: '@electron-forge/maker-dmg',
    //   },
        // {
        //     name: '@electron-forge/maker-deb',
        //     config: {
        //         arch: 'armv7l' // 32 位 ARM
        //     }
        // },
        // {
        //     name: '@electron-forge/maker-deb',
        //     config: {
        //         arch: 'arm64' // 64 位 ARM
        //     }
        // },
        // {
        //     name: '@electron-forge/maker-zip',
        //     platforms: ['linux', 'win32']
        // },
    //   {
    //     name: '@electron-forge/maker-pkg',
    //   },
    //   {
    //     name: '@electron-forge/maker-wix',
    //   },
      {
        name: '@electron-forge/maker-squirrel',
        config: {
            arch: 'ia32'  // Windows 安装包也需指定
        }
      },
    ],
    publishers: [
        {
            name: '@electron-forge/publisher-github',
            config: {
                repository: {
                    owner: 'electron',
                    name: 'fiddle'
                },
                draft: true,
                prerelease: false,
                generateReleaseNotes: true
            }
        }
    ],
  };