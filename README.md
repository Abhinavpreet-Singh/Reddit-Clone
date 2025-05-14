# Reddit Clone - A Social Media Platform 🚀

This Reddit Clone is a modern social media platform built with Next.js, Firebase, and Chakra UI. It's a full-stack social media platform where users can create communities, share posts, and interact with others.


## 🛠️ Tech Stack

- **Frontend:**
  - Next.js 13
  - React 18
  - Chakra UI
  - Recoil (State Management)
  - Framer Motion (Animations)

- **Backend:**
  - Firebase Authentication
  - Firestore Database
  - Firebase Storage

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Download or clone the project**
   ```bash
   # If cloning from repository
   git clone <repository-url>
   cd reddit-clone
   ```

2. **Install dependencies**
   ```bash
   # Using yarn (recommended)
   yarn
   
   # Or using npm with legacy peer deps
   npm install --legacy-peer-deps
   ```

3. **Set up Firebase**
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Create a Firestore Database
   - Get your Firebase configuration

4. **Create .env.local file**
   Create a `.env.local` file in the root directory with your Firebase config:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. **Run the development server**
   ```bash
   # Using yarn
   yarn dev -p 3002
   
   # Or using npm
   npm run dev -- -p 3002
   ```

6. **Open your browser**
   Visit [http://localhost:3002](http://localhost:3002)

## 📱 How to Use

### For Users
1. **Sign Up/Login**
   - Click the "Sign Up" button to create an account
   - Use email/password or Google authentication
   - Login with your credentials

2. **Create a Community**
   - Click "Create Community" in the navigation bar
   - Fill in community details
   - Set privacy settings
   - Add a community image

3. **Create a Post**
   - Click "Create Post" in any community
   - Choose post type (Text, Link, Image)
   - Add title and content
   - Submit your post

4. **Interact with Posts**
   - Upvote/Downvote posts
   - Comment on posts
   - Share posts
   - Save posts

### For Developers
1. **Project Structure**
   ```
   src/
   ├── atoms/          # Recoil state management
   ├── components/     # React components
   ├── firebase/       # Firebase configuration
   ├── hooks/          # Custom React hooks
   ├── pages/          # Next.js pages
   └── styles/         # Global styles
   ```

2. **Key Components**
   - `Header.tsx` - Navigation bar
   - `AuthModal.tsx` - Authentication modal
   - `CreatePost.tsx` - Post creation form
   - `PostItem.tsx` - Individual post display
   - `CommunityHeader.tsx` - Community page header

## 🔧 Customization

### Changing Theme
- Edit `src/chakra/theme.ts` to modify colors, fonts, and other theme properties

### Adding Features
1. **New Authentication Methods**
   - Add providers in Firebase Console
   - Update `src/firebase/authFunctions.ts`

2. **New Post Types**
   - Modify `CreatePost.tsx`
   - Add new post type components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Reddit](https://www.reddit.com/) for inspiration

## 📞 Support

For support, please open an issue in the repository.

## 🎯 Future Improvements

- [ ] Chat System
- [ ] Notifications
- [ ] Post Awards
- [ ] Mobile App
- [ ] Search Functionality
- [ ] Trending Posts
- [ ] Community Rules
- [ ] Moderation Tools

---

A Reddit clone application built with modern web technologies.


