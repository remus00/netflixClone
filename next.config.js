/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const path = require("path");

module.exports = nextConfig;

module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            },
            {
                hostname: "i.ytimg.com",
            },
        ],
    },
};
