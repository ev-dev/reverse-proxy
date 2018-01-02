const proxy = require('redbird')({ port: 80 })

// DEFAULT subdomain running Portfolio
proxy.register('ev-dev.com', 'http://ev-dev.com:8000')
proxy.register('www.ev-dev.com', 'http://ev-dev.com:8000')

proxy.register('examplejs.ev-dev.com', 'http://ev-dev.com:8001')
proxy.register('www.examplejs.ev-dev.com', 'http://ev-dev.com:8001')

proxy.register('typeless.ev-dev.com', 'http://ev-dev.com:8002')
proxy.register('www.typeless.ev-dev.com', 'http://ev-dev.com:8002')

proxy.register('consilience.ev-dev.com', 'http://ev-dev.com:8003')
proxy.register('www.consilience.ev-dev.com', 'http://ev-dev.com:8003')

proxy.register('starter.ev-dev.com', 'http://ev-dev.com:3000')
proxy.register('www.starter.ev-dev.com', 'http://ev-dev.com:300')

proxy.register('testing.ev-dev.com', 'http://ev-dev.com:8005')
proxy.register('www.testing.ev-dev.com', 'http://ev-dev.com:8005')
