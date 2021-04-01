from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return {'name':'Greenbits 2'}


if __name__ == '__main__':
    app.run(debug=True)