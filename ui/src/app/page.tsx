import { listUserGroups, listUserTasks } from "./actions/user";
import ListUserTasks from "./components/user-task/list";

export default async function Home() {
  const listUserGroupsResponse = await listUserGroups();

  if ("message" in listUserGroupsResponse)
    throw new Error(listUserGroupsResponse.message);

  const listUserTasksResponse = await listUserTasks({ limit: 10 });

  if ("message" in listUserTasksResponse)
    throw new Error(listUserTasksResponse.message);

  return (
    <ListUserTasks
      userGroups={listUserGroupsResponse.groups}
      initialData={listUserTasksResponse}
    />
  );
}
