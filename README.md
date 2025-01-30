# 🎳 Bowling Game API & Frontend  

This project is a bowling game implementation with a backend in Flask and a frontend in React (TypeScript). It allows users to play a simplified version of bowling, tracking scores and handling game logic such as strikes and spares.

---

## 📌 Features  
✅ **Bowling Game Mechanics** – Supports 5 frames, strike, spare, and scoring rules.  
✅ **REST API** – Built with Flask to handle game logic and score calculation.  
✅ **Frontend UI** – A React (TypeScript) web application to interact with the game.  
✅ **Real-time Score Updates** – Displays frames and accumulated scores dynamically.  
✅ **CORS Support** – Enables frontend-backend communication.  

---

## 🏗️ Technologies Used  
### Backend:  
- Python  
- Flask  
- Flask-CORS  

### Frontend:  
- React  
- TypeScript  
- TailwindCSS  

### Other Tools:  
- Fetch API for HTTP requests  

---

## 🚀 Installation & Setup  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/MirijaMarc/code_scale_test.git
cd code_scale_test
```

### 2️⃣ Backend Setup  
1. Navigate to the `backend` directory:  
   ```bash
   cd backend
   ```
2. Create a virtual environment (optional but recommended):  
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:  
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask server:  
   ```bash
   python app.py
   ```
   The API will run on `http://localhost:5000`.

---

### 3️⃣ Frontend Setup  
1. Navigate to the `frontend` directory:  
   ```bash
   cd frontend
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the React development server:  
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (or another port depending on Vite).

---

## 🔥 API Endpoints  

### 🎯 **POST /lancer**  
Records a new throw and updates the game state.  

#### **Request Body (JSON)**  
```json
{
  "quilles": 10
}
```

#### **Response Example**  
```json
{
  "score": 30,
  "frames": [[15], [10, 5], [7, 8], [5, 5, 5], [15, 5, 3, 2, 1]],
  "scores_frames": [30, 50, 65, 80, 106]
}
```

---

### 📊 **GET /score**  
Retrieves the current score and frames.  

#### **Response Example**  
```json
{
  "score": 80,
  "frames": [[15], [10, 5], [7, 8], [5, 5, 5], [15, 5, 3]],
  "scores_frames": [30, 50, 65, 80, 106]
}
```

---

## 🎨 Frontend UI  
- Input field to enter the number of pins knocked down.  
- "Lancer" button to submit a throw.  
- Displays current score and frame history.  



---

## 👨‍💻 Author  
RAZAFIMBELO Mirija Marc 
📧 mirijarazafimbelo30@gmail.com  
  


Enjoy the game! 🎳🚀