import localStorage from '@react-native-async-storage/async-storage';

class authComponent {
    async setData(data) {
        // Set the tokens part
        await localStorage.setItem("accessToken", data.accessToken)
        await localStorage.setItem("refreshToken", data.refreshToken)
        // Set some user data
        await localStorage.setItem("user_group", data.userDTO.user_group)
    }
    async setGuestData(){
        await localStorage.setItem("accessToken", "Guest")
        await localStorage.setItem("refreshToken", "Guest")
        // Set some user data
        await localStorage.setItem("user_group", "211-365")
    }
}





export default new authComponent();