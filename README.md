# WebStash 🧠💻

A simple yet powerful web application that helps you store, organize, and manage useful websites you don't want to forget!

## 🎯 Problem Solved

Ever discovered amazing websites on social media, from friends, or while browsing that you knew you'd forget later? Saving them in random text files or browser bookmarks just wasn't cutting it anymore. **WebStash** solves this problem by providing a centralized place to create, store, search, visit, update, and delete your favorite website links.

## ✨ Features

- **🔗 Store Links**: Save websites with title, description, and URL
- **🔍 Smart Search**: Search through your saved websites by title or description
- **👀 Quick Access**: Easily visit your saved websites with one click
- **🔐 Admin Panel**: Secure admin login for managing all entries
- **✏️ Edit & Delete**: Update or remove saved websites (admin only)
- **📊 Data Export**: Export all your data as SQL queries
- **🛡️ Security**: Rate limiting and encrypted password storage
- **📱 Responsive**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Structure and markup
- **EJS** - Server-side templating
- **CSS3** - Styling and responsive design  
- **JavaScript** - Client-side interactivity

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **SQLite3** - Lightweight database
- **bcrypt** - Password encryption
- **express-session** - Session management
- **express-rate-limit** - API protection

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marouan-boumchahate/webStash.git
   cd webStash
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   SESSION_SECRET_KEY=your-secret-session-key-here
   ADMIN_PASSWORD=your-password
   ```

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
webStash/
├── public/              # Static files (CSS, JS, images)
├── views/               # EJS templates
│   ├── index.ejs       # Main page
│   └── 404.ejs         # Error page
├── db.js               # Database configuration
├── index.js              # Main application file
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🔐 Admin Features

The application includes admin authentication for managing content:

- **Secure Login**: Password-protected admin access
- **Edit Websites**: Update title, description, or URL of any saved website
- **Delete Websites**: Remove websites from the database
- **Data Export**: Generate SQL queries for data backup

## 🌟 Key Learning Outcomes

This project helped me master several important concepts:

- **Clean UI/UX Design** - Created an intuitive and user-friendly interface
- **Backend Security** - Implemented secure authentication and rate limiting
- **Database Efficiency** - Optimized SQLite queries for better performance
- **Problem-Solving** - Broke down complex features into manageable components
- **Debugging Skills** - Mastered practical debugging techniques
- **AI-Assisted Development** - Learned to craft clear, targeted prompts for better guidance
- **Performance Optimization** - Applied debouncing to reduce database load

## 🔄 API Endpoints

### Public Routes
- `GET /` - Main page with all saved websites
- `POST /search` - Search websites by keyword
- `POST /add` - Add a new website
- `POST /api/webs` - API endpoint to add websites programmatically

### Admin Routes (Authentication Required)
- `POST /auth` - Admin login
- `GET /update-web/:id` - Get website details for editing
- `POST /edit/:id` - Update website information
- `GET /confirm-delete/:id` - Confirm deletion
- `POST /delete/:id` - Delete website
- `GET /webstash-data` - Export all data as SQL

## 🛡️ Security Features

- **Rate Limiting**: 100 requests per minute to prevent abuse
- **Password Encryption**: Admin passwords are encrypted using bcrypt
- **Session Management**: Secure session handling with configurable timeouts
- **Input Validation**: Protection against SQL injection and XSS attacks
- **Authentication Middleware**: Protected routes require admin authentication

## 🚧 Future Enhancements

- **User Accounts**: Allow individual users to manage their own website collections
- **Categories/Tags**: Organize websites by categories or tags
- **Import/Export**: Support for importing bookmarks from browsers
- **Favorites**: Mark frequently accessed websites as favorites
- **Sharing**: Share website collections with others
- **Mobile App**: Native mobile application for better user experience

## 👨‍💻 Author

**Marouan Boumchahate**

- LinkedIn: [linkedin.com/in/marouan-boumchahate](https://www.linkedin.com/in/marouan-boumchahate/)
- Portfolio: [marouan.site](https://marouan.site/)
- GitHub: [@marouan-boumchahate](https://github.com/marouan-boumchahate)

## 💭 Feedback

If you have any thoughts, suggestions, or feedback, I'd love to hear them! Feel free to open an issue or reach out directly. This project solves a problem many of us face - forgetting valuable links we stumble upon - and I'm always looking to improve and grow.

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!



