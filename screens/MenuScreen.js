import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function MenuScreen(props){
	const [menu.setMenu] = React.userState(); 
	
	React.useEffect(() => {
		fetch('http://44.232.86.238/dining/menu/detailedMenu')
			.then(resp => resp.json())
			.then(data => {
				console.log(data)
				setMenu(data)
			});
	}, [] )
	return <view><Text> JSON.stringify(menu, null, 2) hlel </Text></view>i
}
