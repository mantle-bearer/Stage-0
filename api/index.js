export default function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    const response = {
      email: "your-email@example.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/yourusername/your-repo",
    };
  
    res.status(200).json(response);
  }
  