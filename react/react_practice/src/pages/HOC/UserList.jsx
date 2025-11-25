import withLoading from "./withLoading"
import withAuth from "./withAuth";
import Header from "../../components/Header";

function UserList() {
  return (
    <Header>
      <div> UserList is completely Loaded </div>
    </Header>
  )
}

const UserListWithLoader = withAuth(withLoading(UserList));

export default function myUserList(){
    return <UserListWithLoader loading={false} />
}