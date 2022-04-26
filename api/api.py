import time
from flask import Flask, request, json

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


# api接口前缀
apiPrefix = '/api/v1/'


@app.route(apiPrefix + 'update', methods=['POST'])
def updateStaff():
    data = request.get_data(as_text=True)
    re = {
        'code': 0,
        'data': data,
        'message': "这是测试呀"
    }
    print("后端数据：", data)
    return json.dumps(re)


if __name__ == '__main__':
    app.run(port="5001")
