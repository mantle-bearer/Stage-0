# HNG12 Stage 0 Task

## Project Description

This project is a public API that returns basic information including the registered email address, current datetime, and GitHub URL of the project's codebase.

## Setup Instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Navigate to the project directory:

   ```sh
   cd your-repo
   ```

3. Deploy the project to Vercel or any similar platform that supports PHP.

## API Documentation

### Endpoint

- GET <your-url>

### Response Format

- 200 OK

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

### Example Usage

```sh
    curl -X GET <your-url>
```

## Backlink

### Step-by-Step Plan

1. **Set Up Project**:

   - Create a new PHP project.
   - Initialize a GitHub repository and push the initial code.

2. **Develop the API**:

   - Create an endpoint that handles GET requests.
   - Return the required JSON response with email, current datetime, and GitHub URL.

3. **Handle CORS**:

   - Ensure the API handles CORS appropriately.

4. **Deploy the API**:

   - Deploy the API to Vercel or a similar platform.

5. **Documentation**:

   - Write a README.md file with project description, setup instructions, and API documentation.

6. **Test the API**:
   - Test the API thoroughly to ensure it meets all requirements.

### Code Implementation

#### 1. Set Up Project

- Create a new directory for the project.
- Initialize a GitHub repository and push the initial code.

#### 2. Develop the API

Create a file `index.php` with the following content:

```php
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$response = [
    "email" => "your-email@example.com",
    "current_datetime" => gmdate("c"),
    "github_url" => "https://github.com/yourusername/your-repo"
];

echo json_encode($response);
?>
```

#### 3. Handle CORS

- CORS is handled by the `Access-Control-Allow-Origin` header in the `index.php` file.

#### 4. Deploy the API

- Create a `vercel.json` file for Vercel deployment:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.php",
      "use": "@vercel/php"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.php"
    }
  ]
}
```

- Deploy the project to Vercel by following their deployment instructions.

#### 5. Documentation

Create a `README.md` file with the following content:

````markdown
# HNG12 Stage 0 Task

## Project Description

This project is a public API that returns basic information including the registered email address, current datetime, and GitHub URL of the project's codebase.

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```
````

2. Navigate to the project directory:
   ```sh
   cd your-repo
   ```
3. Deploy the project to Vercel or any similar platform that supports PHP.

## API Documentation

### Endpoint

- **GET** `<your-url>`

### Response Format

- **200 OK**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Example Usage

```sh
curl -X GET <your-url>
```

## Backlink

- [Hire PHP Developers](https://hng.tech/hire/php-developers)

```

#### 6. Test the API
- Use tools like Postman or curl to test the API endpoint and ensure it meets all requirements.

### Final Steps
- Submit the task through the designated form.
- Follow the instructions in the #track-backend channel to complete grading.



```
