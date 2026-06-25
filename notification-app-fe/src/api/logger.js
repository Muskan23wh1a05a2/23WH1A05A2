const Log = async (stack, level, pkg, message) => {
  try {
    const res = await fetch("http://4.224.186.213/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM3doMWEwNWEyQGJ2cml0aHlkZXJhYmFkLmVkdS5pbiIsImV4cCI6MTc4MjM4MjE2MCwiaWF0IjoxNzgyMzgxMjYwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMGZjMzg4OTUtMmY2YS00OTFhLThlNzctZmYzOWM3MzhiMTZlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXVza2FuIiwic3ViIjoiYTZmOWQ3YTktOTg3My00YWFkLWJhNjEtODkzN2UzMzIwMjJiIn0sImVtYWlsIjoiMjN3aDFhMDVhMkBidnJpdGh5ZGVyYWJhZC5lZHUuaW4iLCJuYW1lIjoibXVza2FuIiwicm9sbE5vIjoiMjN3aDFhMDVhMiIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImE2ZjlkN2E5LTk4NzMtNGFhZC1iYTYxLTg5MzdlMzMyMDIyYiIsImNsaWVudFNlY3JldCI6ImZVUXN3Y1ZRZm1LdVB5RHUifQ.wL--vs7DMX8tu5O2xHkuulg4jbOHZUAcwKT7_tuttEs"},
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: pkg,
        message: message
      })
    });

    if (!res.ok) {
      throw new Error("Failed to send log");
    }

    const data = await res.json();
    console.log("Log success:", data);

  } catch (err) {
    console.error("Log error:", err);
  }
};

export default Log;
