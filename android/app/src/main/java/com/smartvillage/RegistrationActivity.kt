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

class RegistrationActivity : AppCompatActivity() {
    
    private var isPasswordVisible = false
    private var isConfirmPasswordVisible = false
    private lateinit var fullNameEditText: TextInputEditText
    private lateinit var emailEditText: TextInputEditText
    private lateinit var passwordEditText: TextInputEditText
    private lateinit var confirmPasswordEditText: TextInputEditText
    private lateinit var fullNameInputLayout: TextInputLayout
    private lateinit var emailInputLayout: TextInputLayout
    private lateinit var passwordInputLayout: TextInputLayout
    private lateinit var confirmPasswordInputLayout: TextInputLayout
    private lateinit var passwordToggle: ImageButton
    private lateinit var confirmPasswordToggle: ImageButton
    private lateinit var backButton: ImageButton
    private lateinit var registerButton: Button
    private lateinit var registerProgressBar: ProgressBar
    private lateinit var loginLink: TextView
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_registration)
        
        initializeViews()
        setupViews()
    }
    
    private fun initializeViews() {
        fullNameEditText = findViewById(R.id.fullNameEditText)
        emailEditText = findViewById(R.id.emailEditText)
        passwordEditText = findViewById(R.id.passwordEditText)
        confirmPasswordEditText = findViewById(R.id.confirmPasswordEditText)
        fullNameInputLayout = findViewById(R.id.fullNameInputLayout)
        emailInputLayout = findViewById(R.id.emailInputLayout)
        passwordInputLayout = findViewById(R.id.passwordInputLayout)
        confirmPasswordInputLayout = findViewById(R.id.confirmPasswordInputLayout)
        passwordToggle = findViewById(R.id.passwordToggle)
        confirmPasswordToggle = findViewById(R.id.confirmPasswordToggle)
        backButton = findViewById(R.id.backButton)
        registerButton = findViewById(R.id.registerButton)
        registerProgressBar = findViewById(R.id.registerProgressBar)
        loginLink = findViewById(R.id.loginLink)
    }
    
    private fun setupViews() {
        // Back button
        backButton.setOnClickListener {
            finish()
        }
        
        // Password visibility toggle
        passwordToggle.setOnClickListener {
            togglePasswordVisibility()
        }
        
        // Confirm password visibility toggle
        confirmPasswordToggle.setOnClickListener {
            toggleConfirmPasswordVisibility()
        }
        
        // Register button
        registerButton.setOnClickListener {
            handleRegistration()
        }
        
        // Login link
        loginLink.setOnClickListener {
            finish()
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
    
    private fun toggleConfirmPasswordVisibility() {
        isConfirmPasswordVisible = !isConfirmPasswordVisible
        val inputType = if (isConfirmPasswordVisible) {
            InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD
        } else {
            InputType.TYPE_CLASS_TEXT or InputType.TYPE_TEXT_VARIATION_PASSWORD
        }
        confirmPasswordEditText.inputType = inputType
        confirmPasswordEditText.setSelection(confirmPasswordEditText.text?.length ?: 0)
        
        confirmPasswordToggle.setImageResource(
            if (isConfirmPasswordVisible) R.drawable.ic_visibility_off else R.drawable.ic_visibility
        )
    }
    
    private fun handleRegistration() {
        val fullName = fullNameEditText.text?.toString()?.trim() ?: ""
        val email = emailEditText.text?.toString()?.trim() ?: ""
        val password = passwordEditText.text?.toString() ?: ""
        val confirmPassword = confirmPasswordEditText.text?.toString() ?: ""
        
        // Clear previous errors
        fullNameInputLayout.error = null
        emailInputLayout.error = null
        passwordInputLayout.error = null
        confirmPasswordInputLayout.error = null
        
        // Validate full name
        if (fullName.isEmpty()) {
            fullNameInputLayout.error = "Full name is required"
            return
        }
        
        if (fullName.length < 2) {
            fullNameInputLayout.error = "Name must be at least 2 characters"
            return
        }
        
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
        
        // Validate password match
        if (password != confirmPassword) {
            confirmPasswordInputLayout.error = "Passwords do not match"
            return
        }
        
        // Show loading
        registerButton.isEnabled = false
        registerProgressBar.visibility = View.VISIBLE
        
        // Simulate API call
        registerButton.postDelayed({
            registerButton.isEnabled = true
            registerProgressBar.visibility = View.GONE
            Toast.makeText(this, "Registration successful!", Toast.LENGTH_SHORT).show()
            finish()
        }, 1500)
    }
    
    private fun isValidEmail(email: String): Boolean {
        return android.util.Patterns.EMAIL_ADDRESS.matcher(email).matches()
    }
}
