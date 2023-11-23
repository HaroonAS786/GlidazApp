import React, { useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const OTPInput = () => {

    const [otp, setOTP] = useState('');
    const inputRefs = Array(6).fill(0).map(() => useRef(null));

    const handleOTPChange = (index, value) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP.join(''));
        if (value && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <View style={styles.container}>
            {Array.from({ length: 6 }, (_, index) => (
                <TextInput
                    key={index}
                    ref={inputRefs[index]}
                    style={[styles.input, otp.length === index && styles.activeInput]}
                    keyboardType="numeric"
                    maxLength={1}
                    value={otp[index] || ''}
                    onChangeText={(value) => handleOTPChange(index, value)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: 40,
        height: 40,

        backgroundColor: 'rgba(13, 22, 52, 0.05)',
        borderRadius: 2,
        textAlign: 'center',
        fontSize: 14,
    },
    activeInput: {
        borderColor: 'black',
    },
});

export default OTPInput;
