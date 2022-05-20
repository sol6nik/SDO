import * as React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class SliderCourses extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    time: 'С 01.02.2022',
                    description: 'Управление стратегическими коммуникациями'
                },
                {
                    time: 'С 01.02.2022',
                    description: 'Управление стратегическими коммуникациями'

                },
                {
                    time: 'С 01.02.2022',
                    description: 'Управление стратегическими коммуникациями'

                },
                {
                    time: 'С 01.02.2022',
                    description: 'Управление стратегическими коммуникациями'

                },
                {
                    time: 'С 01.02.2022',
                    description: 'Управление стратегическими коммуникациями'

                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                height: 'auto',
                padding: 20,
                marginRight: 25,
            }}>

                <Image source={{ uri: 'https://goo.su/2ks0v5' }}
                    style={{
                        width: '100%',
                        height: 150,
                        marginBottom: 5,
                        borderRadius: 5
                    }}
                />

                <Text style={{
                    color: '#000',
                    marginBottom: 5
                }}>{item.time}</Text>

                <Text style={{ fontSize: 14, marginBottom: 27 }}>{item.description}</Text>


                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{
                        width: 300,
                        height: 41,
                        backgroundColor: '#90B3E7',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => Alert.alert('Complete course task')}
                    >
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>Домашняя работа</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, marginTop: 20, }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={300}
                        itemWidth={400}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView>
        );
    }
}