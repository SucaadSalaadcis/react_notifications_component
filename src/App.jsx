import React from 'react';
import ReactDOM from 'react-dom';
import { ReactNotifications, Store } from 'react-notifications-component'; // Import notification component and store
import 'react-notifications-component/dist/theme.css'; // Import default notification styles

const App = () => {
  // Function to show a notification
  const showNotification = (type) => {
    Store.addNotification({
      title: `This is a ${type} notification!`, // Notification title
      message: `You clicked the ${type} button.`, // Notification message
      type, // Type of notification (success, danger, info, default, warning)
      insert: 'top', // Position of the notification on the screen
      container: 'top-right', // Container where the notification will appear
      dismiss: {
        duration: 3000, // Duration before the notification auto-dismisses
        onScreen: true, // Keep the notification on screen until dismissed
        pauseOnHover: true, // Pause the auto-dismiss timer on hover
      },
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Initialize the notifications component */}
      <ReactNotifications />
      <h1>Hello, React with react-notifications-component!</h1>
      {/* Buttons to trigger notifications */}
      <button onClick={() => showNotification('success')} style={{ margin: '5px' }}>
        Show Success Notification
      </button>
      <button onClick={() => showNotification('danger')} style={{ margin: '5px' }}>
        Show Danger Notification
      </button>
      <button onClick={() => showNotification('info')} style={{ margin: '5px' }}>
        Show Info Notification
      </button>
      <button onClick={() => showNotification('default')} style={{ margin: '5px' }}>
        Show Default Notification
      </button>
      <button onClick={() => showNotification('warning')} style={{ margin: '5px' }}>
        Show Warning Notification
      </button>
    </div>
  );
};

export default App
