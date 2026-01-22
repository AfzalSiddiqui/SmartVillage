package com.smartvillage

import android.os.Bundle
import android.text.InputType
import android.view.View
import android.widget.Button
import android.widget.ImageButton
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.textfield.TextInputEditText
import com.google.android.material.textfield.TextInputLayout

class LoginActivity : AppCompatActivity() {
    
    private var isPasswordVisible = false
    private lateinit var emailEditText: TextInputEditText
    private lateinit var passwordEditText: TextInputEditText
    private lateinit var emailInputLayout: TextInputLayout
    private lateinit var passwordInputLayout: TextInputLayout
    private lateinit var passwordToggle: ImageButton
    private lateinit var loginButton: Button
    private lateinit var loginProgressBar: ProgressBar
    private lateinit var signUpLink: TextView
    private lateinit var forgotPassword: TextView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)
        
        initializeViews()
        setupViews()
    }
    
    private fun initializeViews() {
        emailEditText = findViewById(R.id.emailEditText)
        passwordEditText = findViewById(R.id.passwordEditText)
        emailInputLayout = findViewById(R.id.emailInputLayout)
        passwordInputLayout = findViewById(R.id.passwordInputLayout)
        passwordToggle = findViewById(R.id.passwordToggle)
        loginButton = findViewById(R.id.loginButton)
        loginProgressBar = findViewById(R.id.loginProgressBar)
        signUpLink = findViewById(R.id.signUpLink)
        forgotPassword = findViewById(R.id.forgotPassword)
    }
    
    private fun setupViews() {
        // Password visibility toggle
        passwordToggle.setOnClickListener {
            togglePasswordVisibility()
        }
        
        // Login button
        loginButton.setOnClickListener {
            handleLogin()
        }
        
        // Sign up link
        signUpLink.setOnClickListener {
            startActivity(android.content.Intent(this, RegistrationActivity::class.java))
        }
        
        // Forgot password
        forgotPassword.setOnClickListener {
            Toast.makeText(this, "Forgot password feature coming soon", Toast.LENGTH_SHORT).show()
        }
    }
    
    private fun togglePasswordVisibility() {
        isPasswordVisible = !isPasswordVisible
        val inputType = if (isPasswordVisible) {
            InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD
        } else {
            InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }
        passwordEditText.inputType = inputType
        passwordEditText.setSelection(passwordEditText.text?.length ?: 0)
        
        passwordToggle.setImageResource(
            if (isPasswordVisible) R.drawable.ic_visibility_off else R.drawable.ic_visibility
        )
    }
    
    private fun handleLogin() {
        val email = emailEditText.text?.toString()?.trim() ?: ""
        val password = passwordEditText.text?.toString() ?: ""
        
        // Clear previous errors
        emailInputLayout.error = null
        passwordInputLayout.error = null
        
        // Validate email
        if (email.isEmpty()) {
            emailInputLayout.error = "Email is required"
            return
        }
        
        if (!isValidEmail(email)) {
            emailInputLayout.error = "Please enter a valid email address"
            return
        }
        
        // Validate password
        if (password.isEmpty()) {
            passwordInputLayout.error = "Password is required"
            return
        }
        
        if (password.length < 6) {
            passwordInputLayout.error = "Password must be at least 6 characters"
            return
        }
        
        // Show loading
        loginButton.isEnabled = false
        loginProgressBar.visibility = View.VISIBLE
        
        // Simulate API call
        loginButton.postDelayed({
            loginButton.isEnabled = true
            loginProgressBar.visibility = View.GONE
            Toast.makeText(this, "Login successful!", Toast.LENGTH_SHORT).show()
            // In a real app, navigate to main activity here
        }, 1500)
    }
    
    private fun isValidEmail(email: String): Boolean {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
    }
}
