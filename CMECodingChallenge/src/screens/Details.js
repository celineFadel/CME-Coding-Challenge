import React from 'react';
import { Image, ScrollView, Text, StyleSheet } from 'react-native';

export default class FirstPage extends React.Component {
    state = {
    };

    componentWillMount = () => {
       
    };

    render() {
        return(
            <ScrollView style={styles.mainContainer}>
                <Image style={styles.imageContainer} source={this.props.imagePath}/>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.descriptionContainer}>{this.props.description}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        flex: 1,
        // flexDirection: 'column'
    },
    imageContainer: {
        width: '70%',
        height: '100%',
        marginTop: '10%',
        marginLeft: '15%',
        marginRight: '15%',
        borderRadius: 8
    },
    title: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '10%',
    },
    descriptionContainer: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '10%',
    }
});