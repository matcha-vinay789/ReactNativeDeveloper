import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import TrackClaim from '../components/TrackClaim';
import ClaimForm from '../components/ClaimForm';
import ServiceCard from '../components/ServiceCard';
import theme from '../styles/theme';


const { width } = Dimensions.get('window'); 

const ClaimScreen = () => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.topCardsContainer}>
        <ClaimForm />
        <TrackClaim />
      </View>

      {/*Services Section */}
      <View style={styles.servicesContainer}>
        <Text style={styles.servicesHeader}>Other Services</Text>
        <Text style={styles.servicesHeaderSub}>Lorem Ipsum is simply dummy text of the</Text>

        <View style={styles.servicesRow}>
          {['Useful Documents', 'Tips and Guide', 'Claims History'].map((service, index) => (
            <ServiceCard
              key={index}
              iconName={
                index === 0 ? 'description' : index === 1 ? 'lightbulb' : 'history'
              } 
              text={service}
            />
          ))}
        </View>

        <View style={styles.servicesRow}>
          {['Claims Fraud Report', 'Claim Center Locator', 'FAQs and Support'].map((service, index) => (
            <ServiceCard
              key={index}
              iconName={
                index === 0
                  ? 'report-gmailerrorred'
                  : index === 1
                    ? 'location-pin'
                    : 'help-outline'
              } // Icons based on service
              text={service}
            />
          ))}
        </View>
        <View style={styles.bottomRow}>
          <ServiceCard iconName="edit-road" text="Roadside Assistance" />
          <ServiceCard iconName="personal-injury" text="Accident Assistance" />
          <View style={styles.emptyCardPlaceholder} />
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary, 
  },
  topCardsContainer: {
    marginHorizontal: 16, 
    marginTop: 16, 
    marginBottom: 16, 
  },
  servicesContainer: {
    backgroundColor: 'white', 
    paddingTop: 20, 
    paddingBottom: 20, 
    paddingHorizontal: 16, 
    marginHorizontal: 0, 
  },
  servicesHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'start',
  },
  servicesHeaderSub: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'start',
    fontWeight: '500'
  },
  servicesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 20,

  },
  emptyCardPlaceholder: {
    width: '30%', 
  },
  
});

export default ClaimScreen;
