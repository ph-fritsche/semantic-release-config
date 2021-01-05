const config = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
    ],
    preset: 'conventionalcommits',
    analyzeCommits: {
    },
}

if (process.env.NPM_TOKEN) {
    config.plugins.push('@semantic-release/npm')
}

module.exports = config
