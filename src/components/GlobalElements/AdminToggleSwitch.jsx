// HOOKS
import { useState } from "react";
import classNames from "classnames";
import { useAuth } from "../../hooks/use-auth";

// API
import putUpdateUser from "../../api/put-update-user";

function AdminToggleSwitch({ user_id, status }) {
  const { auth } = useAuth();
  const [isSelected, setIsSelected] = useState(status);

  const updateStatus = async (id) => {
    event.preventDefault();
    const userData = { is_admin: !status };
    setIsSelected(!isSelected);
    const updatedStatus = await putUpdateUser(auth.token, id, userData);
    if (!updatedStatus) {
      console.log("failed to update admin status");
    }
  };

  return (
    <div
      onClick={() => updateStatus(user_id)}
      className={classNames("flex w-10 h-5 bg-gray-600 rounded-full ", {
        "bg-green-500": isSelected,
      })}
    >
      <span
        className={classNames("flex w-5 h-5 bg-white rounded-full", {
          "ml-5": isSelected,
        })}
      />
    </div>
  );
}

export default AdminToggleSwitch;
