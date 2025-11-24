export default function withAuth(Component){
        return function AuthenticatedFunction(props){
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if(!isLoggedIn){
                return <div>You need to login first to access this</div>
            }
            return <Component {...props} />
        }
}