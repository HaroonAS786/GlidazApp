import React from 'react';
import {
    ActivityIndicator,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { themeColors } from '../../../../../../config/colors';

const TicketDownloadDialog = ({ isVisible, onClose, isDownload, handleDownloadTicket }) => {

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.dialogBox}>
                    <Text style={styles.title}>Download Ticket</Text>
                    {isDownload ? <Text style={styles.message}>Downloading....</Text> :
                        <Text style={styles.message}>Do you want to download the ticket?</Text>
                    }
                    <View style={styles.buttonContainer}>
                        {isDownload ? <ActivityIndicator size={'md'} color={themeColors.utilityPrime} /> :
                            <>
                                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                                    <Text style={styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleDownloadTicket} style={styles.downloadButton}>
                                    <Text style={styles.buttonText}>Download</Text>
                                </TouchableOpacity>
                            </>
                        }
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogBox: {
        backgroundColor: 'white',
        width: 300,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'black'
    },
    cancelButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    downloadButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TicketDownloadDialog;
