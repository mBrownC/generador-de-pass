// Generador de contraseñas
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// Manejo del botón Generar Contraseña
document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generate-btn");
    const passwordInput = document.getElementById("password");

    generateBtn.addEventListener("click", function () {
        const length = 12; // Longitud de la contraseña (personalizable)
        const newPassword = generatePassword(length);
        passwordInput.value = newPassword;
    });
});
