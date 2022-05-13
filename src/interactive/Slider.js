import * as React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';


import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    time: '14:30 - 16:00',
                    title: "Введение в проектную деятельность ",
                },
                {
                    time: '14:30 - 16:00',
                    title: "employment",
                },
                {
                    time: '14:30 - 16:00',
                    title: "employment",
                },
                {
                    time: '14:30 - 16:00',
                    title: "employment",
                },
                {
                    time: '14:30 - 16:00',
                    title: "employment",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 10,
                height: 200,
                padding: 20,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        backgroundColor: '#3170B5',
                        color: '#fff',
                        width: 95,
                        textAlign: 'center',
                        borderRadius: 10,
                        marginBottom: 5
                    }}>
                        {item.time}
                    </Text>
                </View>
                <Text style={{ fontSize: 20, marginBottom: 27 }}>{item.title}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{
                        width: 145,
                        height: 41,
                        backgroundColor: '#90B3E7',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => Alert.alert('Home work task')}
                    >
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>Домашняя работа</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: 145,
                        height: 41,
                        backgroundColor: '#F0F0F0',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => Alert.alert('Add task')}
                    >
                        <Text style={{ color: '#000', fontWeight: 'bold' }}>Добавить задачу</Text>
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