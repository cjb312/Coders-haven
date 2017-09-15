module.exports = {
  apps: [{
    name: 'CodersHaven',
    script: './server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-220-208-55.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/pemkeys/codersHaven.pem',
      ref: 'origin/master',
      repo: 'https://github.com/brm5050/CodersHaven.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
