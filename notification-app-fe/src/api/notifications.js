// 🔹 Fetch notifications from API
export const fetchNotifications = async (token) => {
  try {
    const res = await fetch("http://4.224.186.213/evaluation-service/notifications", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    return data.notifications;

  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};
const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1
};
export const getTopNotifications = (notifications, n = 5) => {

  if (!notifications || notifications.length === 0) return [];

  const sorted = notifications.sort((a, b) => {
    if (priorityMap[b.Type] !== priorityMap[a.Type]) {
      return priorityMap[b.Type] - priorityMap[a.Type];
    }   
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  return sorted.slice(0, n);
};

export const getPriorityNotifications = async (token, n = 5) => {
  const notifications = await fetchNotifications(token);
  const topNotifications = getTopNotifications(notifications, n);
  return topNotifications;
};