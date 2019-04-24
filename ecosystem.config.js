module.exports = {
  apps: [
    {
      name: 'DevOps-demos',
      script: 'server/index.js',

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: '47.96.108.114',
      ref: 'origin/nuxt-pm2',
      repo: 'git@github.com:xg4/DevOps-demos.git',
      path: '/var/www/production',
      'post-deploy':
        'yarn && npm run build && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
}
