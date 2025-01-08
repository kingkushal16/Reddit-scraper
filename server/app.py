from flask import Flask, request, jsonify
from flask_cors import CORS
from scraper import scrappy  # Ensure scrappy is a function that provides the required data

app = Flask(__name__)
CORS(app)

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.json
    subreddit = data.get("subreddit")
    category = data.get("category")
    
    scraped_data = scrappy(subreddit, category, 10)  
    
    result = []
    for idx, item in enumerate(scraped_data):
        result.append({
            "id": idx,
            "content": item
        })
    
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
