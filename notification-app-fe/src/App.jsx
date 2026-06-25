import { useEffect } from "react";
import { getPriorityNotifications } from "./api/notifications";

function App() {

  useEffect(() => {
    const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM3doMWEwNWEyQGJ2cml0aHlkZXJhYmFkLmVkdS5pbiIsImV4cCI6MTc4MjM4MjE2MCwiaWF0IjoxNzgyMzgxMjYwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMGZjMzg4OTUtMmY2YS00OTFhLThlNzctZmYzOWM3MzhiMTZlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibXVza2FuIiwic3ViIjoiYTZmOWQ3YTktOTg3My00YWFkLWJhNjEtODkzN2UzMzIwMjJiIn0sImVtYWlsIjoiMjN3aDFhMDVhMkBidnJpdGh5ZGVyYWJhZC5lZHUuaW4iLCJuYW1lIjoibXVza2FuIiwicm9sbE5vIjoiMjN3aDFhMDVhMiIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImE2ZjlkN2E5LTk4NzMtNGFhZC1iYTYxLTg5MzdlMzMyMDIyYiIsImNsaWVudFNlY3JldCI6ImZVUXN3Y1ZRZm1LdVB5RHUifQ.wL--vs7DMX8tu5O2xHkuulg4jbOHZUAcwKT7_tuttEs"
    getPriorityNotifications(token, 5).then((data) => {
      console.log("Top Notifications:", data);
    });
  }, []);

  return <h1>Notifications App</h1>;
}

export default App;
