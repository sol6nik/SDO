import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import {vw,vh} from 'react-native-expo-viewport-units'
import {logout} from '../../js/authFunctions'

import Chevron_SVG from '../../icons/personal-icons/chevron_icon.svg'
import Info_SVG from '../../icons/personal-icons/info_icon.svg'
import Logout_SVG from '../../icons/personal-icons/logout_icon.svg'
import Profile_SVG from '../../icons/personal-icons/profile_icon.svg'
import Settings_SVG from '../../icons/personal-icons/settings_icon.svg'


export default function PersonalMenu({ navigation: { goBack, navigate } }) {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                    <Chevron_SVG/>
                </TouchableOpacity>

                <View style={styles.image_container}>
                    <Image source={require('../../images/AvatarPerson.png')}/>
                </View>

                <View style={styles.text_container}>
                    <Text style={styles.user_fio}>Главый разраб</Text>
                </View>

                <View style={styles.profileMenu}>
                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Account')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Info_SVG/>
                            <Text style={{ fontWeight: 'bold',paddingLeft:vw(3.84) }}>О пользователе</Text>
                        </View>
                        <Chevron_SVG/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('Sdo')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Profile_SVG/>
                            <Text style={{ fontWeight: 'bold',paddingLeft:vw(3.84) }}>Учетная запись</Text>
                        </View>
                        <Chevron_SVG/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.componentsMenu} onPress={() => navigate('User')}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Settings_SVG/>
                            <Text style={{ fontWeight: 'bold',paddingLeft:vw(3.84) }}>Настройки СДО</Text>
                        </View>
                        <Chevron_SVG/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={[styles.componentsMenu,{marginLeft: vw(5.12),marginTop: 20, width: vw(100-10.25),height: vh(7),backgroundColor: '#fff',borderRadius: 25,paddingHorizontal: vw(3.84),paddingVertical: vh(1.81)}]} onPress={() => navigate('Authorization') }>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Logout_SVG/>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center',paddingLeft:vw(3.84) }}>Выход</Text>
                    </View>
                    <Chevron_SVG/>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0'
    },
    btnBack: {
        width: vh(4.58),
        height: vh(4.58),
        position:'absolute',
        marginLeft: vw(5.12),
        marginTop: vh(7.31),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        transform: [{rotateY: '180deg'}]
    },
    image_container: {
        marginTop: vh(8.45),
        marginLeft: (vw(100)-vw(46.15))/2,
        width: vh(21.73),
        height: vh(21.73),
    },
    text_container:{
        paddingTop:vh(3.74),
    },
    user_fio: {
        fontFamily: 'Gilroy-Regular',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 26,
        lineHeight: 32,
        textAlign: 'center',
    },
    profileMenu: {
        marginTop: '3.62%',
        marginBottom: '1.81%',
        marginLeft: vw(5.12),
        width: vw(89.74),
        height: vh(17.39),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        borderRadius: 25,
        marginHorizontal: vw(3.84),
        marginVertical: vh(1.81)
    },
    componentsMenu: {
        width: vw(82.05),
        height: vh(3.38),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})