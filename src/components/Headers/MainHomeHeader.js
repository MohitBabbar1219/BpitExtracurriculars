import colors from "../../assets/colors/UiColors";
import {Header, Left, Right, Title} from "native-base";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";


const MainHomeHeader = props => {

    return (<Header
        androidStatusBarColor={colors.statusBar}
        style={styles.header}>
        <Left>
            <TouchableOpacity>
                <Icon color={colors.icons} size={24} name={'ios-menu'} />
            </TouchableOpacity>
        </Left>
        <View style={{justifyContent: 'center'}}>
            <Title>BPIT Extracurriculars</Title>
        </View>
        <Right>
            <TouchableOpacity>
                <Icon color={colors.icons} size={24} name={'md-more'} />
            </TouchableOpacity>
        </Right>
    </Header>);
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.header,
    }
});

export default MainHomeHeader;