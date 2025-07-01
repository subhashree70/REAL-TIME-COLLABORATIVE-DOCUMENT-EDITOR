from flask import Flask, jsonify

app = Flask(_name_)

@app.route('/ml/predict')
def predict():
    return jsonify({'result': 'Prediction from Python ML service'})

if _name_ == '_main_':
    app.run(port=6000)