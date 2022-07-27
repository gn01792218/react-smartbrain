import { useAppSelector } from '../../app/hooks'
function Rank (){
    const userName = useAppSelector((state) => state.user.user.name)
    const userCount = useAppSelector((state)=>state.user.user.entries)
    return (
        <div className='text-white text-center'>
            <p>{userName}</p>
            <p>{'Your Rank now is'}</p>
            <p>{userCount}</p>
        </div>
    )
}
export default Rank