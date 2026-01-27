import SwiftUI

struct LoginView: View {
    @State private var email: String = ""
    @State private var password: String = ""
    @State private var showPassword: Bool =  false
    @State private var isLoading: Bool =  false
    @State private var errorMessage: String = ""
    @State private var showError: Bool =  false
    
    var body: some View {
        NavigationView {
            ZStack {
                // Background gradient
                LinearGradient(
                    gradient: Gradient(colors: [Color.blue.opacity(0.6), Color.purple.opacity(0.4)]),
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
                .ignoresSafeArea()
                
                ScrollView {
                    VStack(spacing: 30) {
                        // Logo/Title
                        VStack(spacing: 10) {
                            Image(systemName: "house.fill")
                                .font(.system(size: 80))
                                .foregroundColor(.white)
                            Text("SmartVillage")
                                .font(.largeTitle)
                                .fontWeight(.bold)
                                .foregroundColor(.white)
                            Text("Welcome back")
                                .font(.subheadline)
                                .foregroundColor(.white.opacity(0.8))
                        }
                        .padding(.top, 60)
                        .padding(.bottom, 40)
                        
                        // Login Form
                        VStack(spacing: 20) {
                            // Email Field
                            VStack(alignment: .leading, spacing: 8) {
                                Text("Email")
                                    .font(.headline)
                                    .foregroundColor(.primary)
                                TextField("Enter your email", text: $email)
                                    .textFieldStyle(CustomTextFieldStyle())
                                    .keyboardType(.emailAddress)
                                    .autocapitalization(.none)
                            }
                            
                            // Password Field
                            VStack(alignment: .leading, spacing: 8) {
                                Text("Password")
                                    .font(.headline)
                                    .foregroundColor(.primary)
                                HStack {
                                    if showPassword {
                                        TextField("Enter your password", text: $password)
                                    } else {
                                        SecureField("Enter your password", text: $password)
                                    }
                                    Button(action: {
                                        showPassword.toggle()
                                    }) {
                                        Image(systemName: showPassword ? "eye.slash.fill" : "eye.fill")
                                            .foregroundColor(.gray)
                                    }
                                }
                                .textFieldStyle(CustomTextFieldStyle())
                            }
                            
                            // Forgot Password
                            HStack {
                                Spacer()
                                Button(action: {
                                    // Handle forgot password
                                }) {
                                    Text("Forgot Password?")
                                        .font(.subheadline)
                                        .foregroundColor(.blue)
                                }
                            }
                            
                            // Error Message
                            if showError {
                                Text(errorMessage)
                                    .font(.caption)
                                    .foregroundColor(.red)
                                    .padding(.horizontal)
                            }
                            
                            // Login Button
                            Button(action: {
                                handleLogin()
                            }) {
                                HStack {
                                    if isLoading {
                                        ProgressView()
                                            .progressViewStyle(CircularProgressViewStyle(tint: .white))
                                    } else {
                                        Text("Login")
                                            .fontWeight(.semibold)
                                    }
                                }
                                .frame(maxWidth: .infinity)
                                .padding()
                                .background(Color.blue)
                                .foregroundColor(.white)
                                .cornerRadius(12)
                            }
                            .disabled(isLoading || email.isEmpty || password.isEmpty)
                            .opacity((isLoading || email.isEmpty || password.isEmpty) ? 0.6 : 1.0)
                            
                            // Sign Up Link
                            HStack {
                                Text("Don't have an account?")
                                    .foregroundColor(.secondary)
                                NavigationLink(destination: RegistrationView()) {
                                    Text("Sign Up")
                                        .fontWeight(.semibold)
                                        .foregroundColor(.blue)
                                }
                            }
                            .padding(.top, 10)
                        }
                        .padding(.horizontal, 30)
                        .padding(.vertical, 30)
                        .background(Color(.systemBackground))
                        .cornerRadius(20)
                        .shadow(color: Color.black.opacity(0.1), radius: 10, x: 0, y: 5)
                        .padding(.horizontal, 20)
                    }
                }
            }
            .navigationBarHidden(true)
        }
    }
    
    private func handleLogin() {
        isLoading = true
        showError = false
        
        // Validate email
        guard isValidEmail(email) else {
            errorMessage = "Please enter a valid email address"
            showError = true
            isLoading = false
            return
        }
        
        // Validate password
        guard password.count >= 6 else {
            errorMessage = "Password must be at least 6 characters"
            showError = true
            isLoading = false
            return
        }
        
        // Simulate API call
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5) {
            isLoading = false
            // Handle successful login
            // In a real app, you would navigate to the main screen here
            print("Login successful for: \(email)")
        }
    }
    
    private func isValidEmail(_ email: String) -> Bool {
        let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        let emailPredicate = NSPredicate(format:"SELF MATCHES %@", emailRegex)
        return emailPredicate.evaluate(with: email)
    }
}

struct CustomTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<Self._Label>) -> some View {
        configuration
            .padding()
            .background(Color(.systemGray6))
            .cornerRadius(10)
            .overlay(
                RoundedRectangle(cornerRadius: 10)
                    .stroke(Color(.systemGray4), lineWidth: 1)
            )
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
