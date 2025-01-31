export default function handler(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    const response = {
      email: "igbokwegoodluck8@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/mantle-bearer/Stage-0",
    };
  
    res.status(200).json(response);
  }
  