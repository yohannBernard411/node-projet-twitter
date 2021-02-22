module.exports = {
  apps : [{
    name: 'Twitter',
    script: './bin/www',
    instances: 'max',
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
}
