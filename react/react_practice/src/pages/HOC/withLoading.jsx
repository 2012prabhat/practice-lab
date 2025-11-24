export default function withLoading(Component){
    return function EnhancedComponent({loading, ...props}){
        if(loading){
            return <div>Loading.....</div>
        }
        return <Component {...props} />
    } 
}