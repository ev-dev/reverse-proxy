const proxy = require('redbird')({ port: 80 })

// DEFAULT subdomain running Portfolio
proxy.register('ev-dev.com', 'http://ev-dev.com:8000')
proxy.register('www.ev-dev.com', 'http://ev-dev.com:8000')

proxy.register('examplejs.ev-dev.com', 'http://ev-dev.com:8001')

proxy.register('typeless.ev-dev.com', 'http://ev-dev.com:8002')