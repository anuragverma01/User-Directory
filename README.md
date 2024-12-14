
# User Directory App

## Overview
The **User Directory App** is a React Native application that fetches and displays a list of users from the JSONPlaceholder API. Users can view detailed information about each user by tapping on an entry in the list. The app is designed with a clean UI and leverages React Native's modern capabilities.

## Demo
Here’s a short demo of the app in action:  
![User Directory Demo](https://github.com/anuragverma01/User-Directory/blob/main/screens/Assets/screen.gif)

## Features

### Core Features
1. **User List Screen**:
   - Fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
   - Displays a list of users with their names and email addresses.
   - Navigates to a details screen on user selection.

2. **User Details Screen**:
   - Displays detailed information for a selected user:
     - Name
     - Email
     - Address (Street, City, Zip)
     - Company Name
   - Includes a back navigation button to return to the user list.

3. **API Integration**:
   - Data fetching is handled using `fetch` or `axios`.
   - Displays error messages in case of network failures or empty data.
   - Includes a loading spinner while data is being fetched.

4. **Navigation**:
   - Implements stack navigation using [React Navigation](https://reactnavigation.org).

5. **State Management**:
   - Manages state using `useState` and `useEffect` hooks.

6. **UI/UX**:
   - Clean and simple design.
   - Uses `FlatList` for performance optimization.
   - Styled using `StyleSheet` and responsive layouts.

### Bonus Features
- **Search Bar**: Allows users to filter the list by name.
- **Sort Users**: Enables sorting by name or email.
- **User Profile Picture**: Displays a placeholder image for each user.

## How to Run the App

### Prerequisites
1. Node.js and npm installed on your machine.
2. React Native CLI or Expo CLI.
3. A simulator (iOS or Android) or a physical device.

### Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/your-repository-url.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-directory-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   - For Expo:
     ```bash
     npm start
     ```
   - For React Native CLI:
     ```bash
     npx react-native run-android
     ```
     or
     ```bash
     npx react-native run-ios
     ```

## Challenges
- **Error Handling**: Ensuring proper error handling for API failures and empty data responses.
- **Sort Users**: Implementing sorting functionality for name and email while maintaining performance.
- **User Profile Picture**: Dynamically displaying placeholder images for users.
- **Responsive Design**: Designing an adaptive UI for both small and large screens.

