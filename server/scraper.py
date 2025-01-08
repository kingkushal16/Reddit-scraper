import httpx
import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()
genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
model = genai.GenerativeModel("gemini-1.5-flash")
base_url = 'https://www.reddit.com'

def test_gemini():
    response = model.generate_content("Explain how AI works")
    print(response.text)

def scrappy(subreddit, category, number):
    url = base_url + '/' + subreddit + '/' + category + ".json"
    data = []
    params = {
        'limit': number,
        't': 'day',
        'after': None
    }
    response = httpx.get(url, params=params)
    print("Fetching...")
    if response.status_code != 200:
        raise Exception("Error when fetching")
    
    json_data = response.json()

    for i in json_data['data']['children']:
        first = i['data']['title']
        second = i['data']['selftext']
        final = first + ' ' + second
        if final != " ":
            data.append(final)

    return data  

def genai_helper(data):
    modified_data =[]
    for it in data:
        response = model.generate_content(os.getenv('PROMPT')+it)
        if response is None:
            modified_data.append(it)
        else:
            modified_data.append(response.text)

    return modified_data
