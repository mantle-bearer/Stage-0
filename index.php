<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$response = [
    "email" => "your-email@example.com",
    "current_datetime" => gmdate("c"),
    "github_url" => "https://github.com/yourusername/your-repo"
];

echo json_encode($response);
