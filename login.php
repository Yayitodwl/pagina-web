<?php
// Verificación de datos del usuario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];
  
  // Validación de usuario y contraseña (por ejemplo, en una base de datos)
  if ($username == "usuario" && $password == "contraseña") {
    // Si la validación es exitosa, se imprime el mensaje de bienvenida
    echo "Bienvenido de nuevo Sr. " . $username . "!";
  } else {
    // Si la validación falla, se muestra un mensaje de error
    echo "Usuario o contraseña incorrectos";
  }
}
?>
