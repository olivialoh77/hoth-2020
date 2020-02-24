import React from 'react';
import { Camera } from 'expo';
import { Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    async press() {
        console.log('Button Pressed');
        if (this.camera) {
            console.log('Taking photo');
            let photo = await this.camera.takePictureAsync();
            console.log(photo);
        }
    }

    render() {
        return (
            <Camera
                style={{ flex: 1 }}
                ref={ (ref) => {this.camera = ref} }
            >
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity
                    style={{ flex: 0, backgroundColor: 'red' }}
                    onPress={this.press}
                >
                    <Text>Touch Me</Text>
                </TouchableOpacity>
            </Camera>
        );
    }
}
