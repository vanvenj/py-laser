# -*- coding:utf-8 -*-
from bottle import route, run, template, static_file, error
import json
import random

@route('/')
def index():
    return template('./main.html')

@route('/init')
def init():
    res = random.randint(0,1)
    print 'return:',res
    return json.dumps({'result':res})

@route('/static/<filename:path>')
def server_static(filename):
    return static_file(filename, root='./static')

@error(404)
def error404(error):
    return 'Nothing here, sorry'

run(host='0.0.0.0', port=8080, debug=True)
