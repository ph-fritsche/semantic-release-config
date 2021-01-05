const config = {
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
    ],
    analyzeCommits: {
        preset: 'conventionalcommits',
    },
}

if (process.env.NPM_TOKEN) {
    config.plugins.push('@semantic-release/npm')
}

module.exports = config
