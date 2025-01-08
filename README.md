Reddit Web Scraper with Gemini API Integration

This project is a Reddit web scraper that fetches Reddit posts and uses the Gemini API to improve the grammar and presentation of the content. The processed content is designed to be more readable and TTS (Text-to-Speech) friendly.

Features

Scrapes Reddit posts based on user-defined criteria.

Sends the scraped content to the Gemini API for grammatical corrections and improvements.

Provides an improved, TTS-friendly version of the content.

Prerequisites

Python 3.8 or higher

Node.js 16.x or higher

Git

Setup and Installation

1. Create a Virtual Environment

Navigate to the /server directory and create a virtual environment:

cd server
python3 -m venv .venv
source .venv/bin/activate # On Linux/Mac
.venv\Scripts\activate # On Windows

2. Install Python Packages

Install the required Python packages from requirements.txt:

pip install -r requirements.txt

3. Install Node Packages

Navigate to the /frontend directory and install the required Node packages:

cd ../frontend
npm install

4. Configure Environment Variables

In the /server directory, create a .env file:

cd ../server
touch .env

Add the following environment variables to the .env file:

GEMINI_API_KEY = "Add your key here"
PROMPT = "Fix all grammatical mistakes in this and make it more presentable along with using full stops and other punctuations to make the content more TTS friendly."

5. Run the Servers

Start the Flask Server:

In the /server directory, run:

python app.py

Start the Next.js Server:

In the /frontend directory, run:

npm run dev

Usage

Access the Next.js frontend through the browser at http://localhost:3000.

Enter the required parameters for scraping Reddit posts.

The backend will process the content and use the Gemini API to improve its grammar and presentation.

View or download the improved content through the frontend.

Notes

Ensure that your GEMINI_API_KEY is valid for the Gemini API to work correctly.

Adjust the PROMPT in the .env file for specific improvements or formatting.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Reddit API for scraping Reddit content.

Gemini API for improving content grammar and presentation.
