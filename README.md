# Public API

## Introduction

Welcome to this Public API project that Retrieves Basic Information about me. This project is a simple public API that provides basic information such as:

- My registered email address.
- The current date and time in **ISO 8601** format.
- The GitHub URL of this current project's repository.

## Features

- Accepts **GET** requests.
- Returns data in **JSON format**.
- Deployed using **Vercel**.
- Supports **CORS** for cross-origin requests.

## API Endpoint

- **Base URL:** `<https://stage-0-theta.vercel.app/>`
- **HTTP Method:** `GET`
- **Response Format:** `application/json`

### Sample Response

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## How to Run Locally

### Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **Vercel CLI**

### Steps to Run Locally

1. **Clone the Repository**

   ```sh
   git clone https://github.com/mantle-bearer/Stage-0.git
   cd Stage-0
   ```

2. **Install Dependencies** (if required)

   ```sh
   npm install
   ```

3. **Run Locally using Vercel**
   ```sh
   vercel dev
   ```
   The API should now be available at `http://localhost:3000/api/index.js`.

## Deployment

To deploy the project to Vercel, run:

```sh
vercel --prod
```

Vercel will provide a public URL for your API.

## Technical Details

- **Language:** JavaScript (Node.js)
- **Framework:** Serverless function
- **Hosting:** Vercel
- **CORS Handling:** Enabled for all origins (`Access-Control-Allow-Origin: *`)

## Additional Resources

- [Node.js Developers Hiring - HNG](https://hng.tech/hire/nodejs-developers)
- [Vercel Documentation](https://vercel.com/docs)

## Submission Checklist

- [ ] API deployed to a publicly accessible URL.
- [ ] JSON response follows the required format.
- [ ] Code hosted on a public GitHub repository.
- [ ] README.md includes setup instructions and API details.

## License

This project is licensed under the **MIT License**.
