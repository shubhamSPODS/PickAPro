import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ProgressBarAndroidBase, SafeAreaView } from 'react-native';
import CustomPicker from '../../Components/CustomPicker';
import CustomProgressBar from '../../Assets/CustomProgessBar';
import Icon from '../../Components/Icon';
import { INFO, LOGO } from '../../Components/ImageAssets';
import Typography, { FULL_WIDTH } from '../../Components/Typography';
import { BLACK, LIGHT_GREEN, THEME_ORANGE } from '../../Components/Colors';
import { BOLD, SEMI_BOLD } from '../../Components/AppFonts';
import CustomTextInput from '../../Components/CustomTextInput';
import CommonButton from '../../Components/CommonButton';

const ProviderQuestionary = () => {
    const [current, setCurrent] = useState(1);
    const total = 10;
    const [progress, setProgress] = useState(0);
    const [selecteWork, setSelectedWork] = useState('')
    const [selecteLive, setSelectedLive] = useState('')

    const [workData, setWorkData] = useState([
        {
            id: 0,
            name: 'Laundary service',
        },
        {
            id: 1,
            name: 'Cleaning',
        },
        {
            id: 2,
            name: 'Electrician',
        }
    ])
    const [live, setLive] = useState([
        {
            id: 0,
            name: 'India',
        },
        {
            id: 1,
            name: 'Austrelia',
        },
        {
            id: 2,
            name: 'USA',
        }
    ])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Icon size={100} source={LOGO} style={{ marginLeft: 15 }} />
            <CustomProgressBar currentStep={current} totalSteps={total} />
            <Typography size={20} color={THEME_ORANGE} fontFamily={SEMI_BOLD} style={{ marginLeft: 15, marginVertical: 20 }}>Tell us  about  yourself!</Typography>
            <CustomTextInput placeholder={'Enter name'} label heading={`What's your name?`} />
            <CustomPicker
                data={workData}
                labelText={'What work do you do?'}
                label
                selectedValue={selecteWork?.name}
                onSelect={(e) => {
                    setSelectedWork(e);
                    console.log(e);
                }}
            />

            <CustomPicker
                data={live}
                labelText={'Where do you live?'}
                label
                selectedValue={selecteLive?.name}
                onSelect={(e) => {
                    setSelectedLive(e);
                    console.log(e);
                }}
            />
            <View style={{   position:'absolute',bottom:30,alignSelf:"center"}}>
  <View style={styles.textContainer}>

        <Icon source={INFO} size={20} />
        <Typography size={13} style={styles.otpText}>You will receive an OTP code from Pick-A-Pro
          to verify your mobile.</Typography>
      </View>

      <CommonButton title={'Continue'}/>

      </View>
        </SafeAreaView>
    );
};

export default ProviderQuestionary;


const styles = StyleSheet.create({
     textContainer: {
        flexDirection: "row",
        width: FULL_WIDTH - 60,
        backgroundColor: LIGHT_GREEN,
        padding: 10,
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 15,
        alignItems: "center",
        justifyContent: "center",
     
      },
      otpText:{
        marginLeft: 10
      }
})