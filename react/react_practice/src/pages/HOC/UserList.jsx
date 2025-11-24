import withLoading from "./withLoading"
import withAuth from "./withAuth";

function UserList() {
  return (
    <div> UserList is completely Loaded </div>
  )
}

const UserListWithLoader = withAuth(withLoading(UserList));

export default function myUserList(){
    return <UserListWithLoader loading={true} />
}