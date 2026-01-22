# SmartVillage

A cross-platform mobile application with Login and Registration views for iOS, Android, and React Native.

## Project Structure

```
SmartVillage/
├── ios/                          # iOS Native App (SwiftUI)
│   └── SmartVillage/
│       ├── Views/
│       │   ├── LoginView.swift
│       │   └── RegistrationView.swift
│       └── SmartVillageApp.swift
│
├── android/                      # Android Native App (Kotlin)
│   └── app/
│       └── src/
│           ├── main/
│           │   ├── java/com/smartvillage/
│           │   │   ├── LoginActivity.kt
│           │   │   └── RegistrationActivity.kt
│           │   ├── res/
│           │   │   ├── layout/
│           │   │   │   ├── activity_login.xml
│           │   │   │   └── activity_registration.xml
│           │   │   └── drawable/
│           │   │       ├── gradient_background.xml
│           │   │       ├── input_background.xml
│           │   │       └── (icon resources)
│           │   └── AndroidManifest.xml
│
└── react-native/                 # React Native App
    ├── src/
    │   └── screens/
    │       ├── LoginScreen.js
    │       └── RegistrationScreen.js
    ├── App.js
    └── package.json
```

## Features

### All Platforms Include:
- ✅ Beautiful, modern UI with gradient backgrounds
- ✅ Email and password validation
- ✅ Password visibility toggle
- ✅ Form validation with error messages
- ✅ Loading states during authentication
- ✅ Navigation between Login and Registration screens
- ✅ Responsive design

### iOS (SwiftUI)
- Native SwiftUI implementation
- Smooth animations and transitions
- Custom text field styling
- Navigation with NavigationView

### Android (Kotlin)
- Material Design components
- Custom drawable resources
- CardView layouts
- TextInputLayout with error handling

### React Native
- Cross-platform single codebase
- React Navigation for screen management
- KeyboardAvoidingView for better UX
- Consistent styling across platforms

## Getting Started

### iOS
1. Open the project in Xcode
2. Build and run on simulator or device

### Android
1. Open the project in Android Studio
2. Sync Gradle files
3. Run on emulator or device

### React Native
1. Navigate to `react-native` directory
2. Install dependencies: `npm install`
3. Run: `npm start` or `npm run ios` / `npm run android`

## Notes

- All authentication logic is currently simulated with delays
- In production, replace with actual API calls
- Add proper error handling and token management
- Implement navigation to main app screens after successful authentication
