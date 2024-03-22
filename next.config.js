// import next from 'next';

/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData:`@import "main.sass"`,
      },
      images:
        {
        remotePatterns:[
          {
         hostname :'cdn.shopify.com',
         protocol: 'https'
        }
      ]
      }
    
};
console.log(nextConfig.sassOptions.includePaths)


module.exports = nextConfig
