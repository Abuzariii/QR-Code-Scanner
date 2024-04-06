from flask import Flask, request, jsonify
import joblib

# Initialize Flask app
app = Flask(__name__)

# Load the pre-trained model
svm_model = joblib.load('svm_model.joblib')

@app.route('/detect', methods=['POST'])
def detect():
    if not request.json or 'url' not in request.json:
        return jsonify({'error': 'Request must be JSON and contain a URL field'}), 400
    
    url = request.json['url']

    prediction = svm_model.predict([url])

    label = 'malicious' if prediction[0] == 1 else 'safe'  # Simplified for demonstration

    # Return the prediction
    return jsonify({'url': url, 'prediction': label})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
