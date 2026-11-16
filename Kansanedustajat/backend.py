from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route("/edustajat")
def edustajat():
    with open("edustajat.json", encoding="utf-8") as tiedosto:
        data = json.load(tiedosto)

    return jsonify(data)

app.run(debug=True)