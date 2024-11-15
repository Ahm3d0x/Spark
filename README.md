# SPARK AI

SPARK AI is an intelligent chatbot application designed to interact with users, process their queries, and return meaningful responses using a Python backend and an interactive JavaScript frontend. It can be used as a desktop application powered by Electron or run locally in a web browser.

---

## Features

- **Interactive Chatbot**: Communicate with SPARK AI using a simple, user-friendly interface.
- **Python Backend**: Powered by Flask and Bard API for advanced query processing.
- **Desktop and Web Application**: Runs as a standalone desktop app (via Electron) or locally as a web app.
- **Live Connection Status**: Displays internet connectivity and operational status.
- **Dynamic Response Indicators**: Visual progress updates (LED-like animation) during processing.
- **Customizable AI Logic**: Easily integrate new features and adjust AI responses.

---

## About the Creator

SPARK AI was developed by **Ahmed Mohamed Attiya**, a passionate software engineer and a student at **Zagazig University, Faculty of Engineering, Communications Department**.  
Ahmed specializes in programming and electronics, with strong skills in Python, JavaScript, and web development.  
He created SPARK AI to demonstrate the power of AI and its seamless integration with web and desktop technologies.  

**Contact Information**:
- **Email**: [ah2005211@gmail.com](mailto:ah2005211@gmail.com)
- **Location**: Kafr Saqr, Abu Shoqooq, Sharqia, Egypt

---

## Installation

### Prerequisites
- Python 3.8 or higher
- Node.js and npm
- Flask
- Electron

### Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd spark-ai
   ```

2. **Install Python Dependencies**:
   ```bash
   pip install flask bardapi
   ```

3. **Install Node.js Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Flask Server**:
   ```bash
   python app.py
   ```

5. **Run the Electron App**:
   ```bash
   npm start
   ```

---

## Usage

1. Open the application in your browser or as a desktop app.
2. Type a query in the input field and click **Send**.
3. Wait for SPARK AI to process your query.
4. View the AI's response in the chat area.

---

## File Structure

```
spark-ai/
├── app.py                  # Flask backend (Python)
├── data.json               # JSON file for storing AI responses
├── renderer.js             # Frontend logic (JavaScript)
├── index.html              # Main HTML file
├── style.css               # Styling for the application
├── package.json            # Node.js configuration
├── main.js                 # Electron configuration
├── README.md               # Documentation
```

---

## API Endpoints

### POST `/run-python-script`
- **Description**: Sends a query to the Flask server for processing.
- **Request Body**:
  ```json
  {
    "ask": "Your query here"
  }
  ```
- **Response**:
  ```json
  {
    "spark": "Response from AI"
  }
  ```

---

## Dependencies

### Frontend
- HTML, CSS, JavaScript
- Electron (for desktop app)

### Backend
- Python (Flask, Bard API)

---

## Customization

1. **Modify AI Logic**:
   - Edit the `app.py` file to customize how responses are generated.

2. **Styling**:
   - Update `style.css` to change the UI design.

3. **LED Animation**:
   - Modify `renderer.js` to adjust LED progress animations.

---

## Contributing

We welcome contributions to SPARK AI. Feel free to fork the repository and submit pull requests.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgments

SPARK AI was created by **Ahmed Mohamed Attiya**, integrating cutting-edge technology for intelligent communication.  

If you have any questions or suggestions, feel free to reach out at **ah2005211@gmail.com**.  

---