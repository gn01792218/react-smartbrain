import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setProfileModalOpen } from '../../app/user'

function Profile(props: any) {
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.user.user)
    function closeProfileModal() {
        dispatch(setProfileModalOpen(false))
    }
    return (
        <div className="w-full h-full fixed left-0 top-0 flex items-center justify-center bg-slate-700/[0.5]">
            <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-blue-500">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
                <div className="w-[20px] h-[20px] absolute right-4 top-3 rounded-full flex justify-center items-center bg-gray-500/50 cursor-pointer text-white hover:text-slate-400 text-lg"
                    onClick={closeProfileModal}
                >&times;</div>
                <div className="flex justify-center -mt-8">
                    <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-sm bold font-sans">{userData.name}</h3>
                    <p className="mt-2 font-sans font-light text-white">Joined in {new Date(userData.joined).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-center pb-3 text-white">
                    <div className="text-center mr-3 border-r pr-3">
                        <h2>{userData.entries}</h2>
                        <span>Ranks</span>
                    </div>
                    <div className="text-center">
                        <h2>42</h2>
                        <span>Friends</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile