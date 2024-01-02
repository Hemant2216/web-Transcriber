/** @type {import('next').NextConfig} */


const nextConfig = {
  
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //     issuer: { and: [/\.(js|ts|md)x?$/] },
  //     type: 'asset/resource',
  //   });
  //   return config;
  // },


      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.FLUENTFFMPEG_COV': false
        })
        )
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          issuer: { and: [/\.(js|ts|md)x?$/] },
          type: 'asset/resource',
        });
     
        return config
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ],
      },
    
}


// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   }
// }

// module.exports = {
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = { fs: false };

//     return config;
//   },
// };

// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.experiments = { topLevelAwait: true, webassembly: true };
//       }
//       return config;
//     },
//   };

// module.exports = {

//   // Can be safely removed in newer versions of Next.js
//   future: {

//     // by default, if you customize webpack config, they switch back to version 4.
//     // Looks like backward compatibility approach.
//     webpack5: true,   
//   },

//   webpack(config) {
//     config.resolve.fallback = {

//       // if you miss it, all the other options in fallback, specified
//       // by next.js will be dropped.
//       ...config.resolve.fallback,  

//       fs: false, // the solution
//     };
    
//     return config;
//   },
// };



module.exports = nextConfig