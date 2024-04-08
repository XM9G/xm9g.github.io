import mysql.connector
import requests
from flask import Flask, jsonify

app = Flask(__name__)

def get_data(idd):
    database = mysql.connector.connect(
        host="sql6.freesqldatabase.com",
        user="sql6687004",
        password="1KsyFrx1Gm",
        database="sql6687004"
    )
    cursor = database.cursor()
    cursor.execute('SELECT id FROM bannedTable WHERE id = %s', (idd,))
    data = cursor.fetchone()
    database.close()
    return data is not None

@app.route('/data/<int:idd>', methods=['GET'])
def fetch_data(idd):
    result = get_data(idd)
    return jsonify({'exists': result})

app.run(debug=True)
