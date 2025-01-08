# Reddit Content Enhancement Tool

This project consists of a Reddit web scraper that feeds content to the Gemini API for grammar improvements and text-to-speech optimization. The system uses a Flask backend and Next.js frontend.

## Prerequisites

- Python 3.x
- Node.js and npm
- Google Cloud Project with Gemini API enabled

## Project Structure

```
project/
├── frontend/         # Next.js frontend
└── server/          # Flask backend
    ├── requirements.txt
    └── .env         # Environment variables
```

## Installation

### 1. Set Up Virtual Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

### 2. Install Python Dependencies

```bash
cd server
pip install -r requirements.txt
```

### 3. Install Node Dependencies

```bash
cd frontend
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `/server` directory and add the following:

```env
GEMINI_API_KEY="Add your key here"
PROMPT="Fix all grammatical mistakes in this and make it more presentable along with using full stops and other punctioations to make the content more TTS friendly"
```

## Running the Application

### Start the Flask Backend

```bash
# From the server directory
flask run
```

### Start the Next.js Frontend

```bash
# From the frontend directory
npm run dev
```

The application should now be running with:

- Backend server at `http://localhost:5000`
- Frontend server at `http://localhost:3000`

## Environment Variables

| Variable         | Description                               |
| ---------------- | ----------------------------------------- |
| `GEMINI_API_KEY` | Your Google Gemini API key                |
| `PROMPT`         | The system prompt for content enhancement |

## Additional Notes

- Ensure both servers are running simultaneously for the application to work properly
- The virtual environment must be activated before running the Flask server
- Make sure to replace the Gemini API key with your actual API key

## Troubleshooting

If you encounter any issues:

1. Verify that all dependencies are properly installed
2. Ensure the virtual environment is activated
3. Check that the `.env` file is properly configured in the server directory
4. Confirm both servers are running on their respective ports
