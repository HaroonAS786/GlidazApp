import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, WebView } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const PrintView = () => {
    const [pdfUri, setPdfUri] = useState(null);

    const generatePDF = async () => {
        const htmlContent = `
        <html>
          <body>
            <h1>Hello, this is your print view</h1>
            <!-- Add your content here -->
          </body>
        </html>
      `;
        const options = {
            html: htmlContent,
            fileName: 'print-view',
            directory: 'Documents',
        };

        try {
            const pdf = await RNHTMLtoPDF.convert(options);
            setPdfUri(pdf.uri);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Press the button to generate the print view:</Text>
            <TouchableOpacity onPress={generatePDF} style={styles.button}>
                <Text style={styles.buttonText}>Generate PDF</Text>
            </TouchableOpacity>

            {pdfUri && (
                <WebView
                    source={{ uri: pdfUri }}
                    style={styles.pdfView}
                    originWhitelist={['*']}
                    scalesPageToFit={true}
                />
            )}
        </View>
    );
};

export default PrintView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    pdfView: {
        flex: 1,
        width: '100%',
    },
});
