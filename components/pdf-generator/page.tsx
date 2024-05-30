"use client";
import React from "react";
import {
  Page,
  Text,
  Document,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    margin: "10px",
    padding: "10px",
  },
  heading: {
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#E4E8FF",
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  subHeading: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    textAlign: "left",
    marginLeft: 10,
  },
  detailsView: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontWeight: 500,
    color: "black",
    backgroundColor: "white",
    padding: 5,
    marginLeft: 10,
  },

  detailsRow: {
    display: "flex",
    gap: "50px",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
  },
  bookingRow: {
    display: "flex",
    gap: "20px",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
  },

  details: {
    textAlign: "left",
    fontSize: 14,
    width: 384,
  },

  content: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },

  section: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 10,
  },
  image: {
    width: "10px",
    height: "20px",
  },
  subtitle: {
    display: "flex",
    gap: "200px",
    flexDirection: "row",
    backgroundColor: "#E4E8FF",
    borderColor: "white",
    paddingBottom: "15px",
    paddingTop: "15px",
    paddingLeft: "15px",
    marginTop: "15px",
    marginBottom: "10px",
  },
  subtotle: {
    display: "flex",
    gap: "200px",
    flexDirection: "row",
    backgroundColor: "#FFF0E2",
    borderColor: "white",
    paddingBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "15px",
    marginTop: "20px",
  },
  total: {
    display: "flex",
    gap: "200px",
    flexDirection: "row",
    backgroundColor: "#FCD1BF",
    borderColor: "white",
    paddingBottom: "10px",
    paddingTop: "10px",
    paddingLeft: "15px",
  },
  servicesdetailsRow: {
    display: "flex",
    gap: "200px",
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "white",
    marginLeft: "10px",
  },
  specialNotice: {
    textAlign: "left",
    fontSize: 12,
    width: 384,
    fontStyle: "italic",
    marginLeft: "8px",
    marginTop: "20px",
  },
  specialCriteria: {
    textAlign: "left",
    fontSize: 12,
    width: 384,
    fontStyle: "italic",
    marginTop: "5px",
    marginLeft: "15px",
  },
});

const PDFGenerator = () => {
  return (
    <Document>
      <Page size="A4" wrap>
        <View style={styles.container}>
          {/* PDF Heading */}
          <Image
            style={styles.image}
            src="/public/images/admin/loginpage/adminlogo.webp"
          />

          <Text style={styles.heading}>Travala</Text>

          {/* PDF Heading */}
          <View style={styles.content}>
            {/* View section 1 */}
            <View style={styles.section}>
              <Text style={styles.details}> 101 Independence Avenue</Text>
            </View>

            {/* View section 2 */}
            <View style={styles.section}>
              <View style={styles.bookingRow}>
                <Text style={styles.details}>+1 234 56 789</Text>
                <Text style={styles.details}>t.travala@gmail.com</Text>
              </View>
              <View style={styles.bookingRow}>
                <Text style={styles.details}>www.holiday.com/travala</Text>
              </View>
            </View>
          </View>

          {/* Booking details content */}
          <Text style={styles.subHeading}>Booking Details</Text>

          <View style={styles.detailsView}>
            {/* Check In */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Check In</Text>
              <Text style={styles.details}>Monday 11, March, 2024</Text>
            </View>

            {/* Check out */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Check Out</Text>
              <Text style={styles.details}>Monday 15, March, 2024</Text>
            </View>

            {/* Guests */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Guests</Text>
              <Text style={styles.details}>2 Adults, 1 Child</Text>
            </View>

            {/* Rooms */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Rooms</Text>
              <Text style={styles.details}>01</Text>
            </View>

            {/* Room Plan */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Room Plan</Text>
              <Text style={styles.details}>
                President Luxury Double Room View NY City
              </Text>
            </View>
          </View>
          {/* Booking details content */}

          {/* Booked by content */}
          <Text style={styles.subHeading}>Booked By</Text>

          <View style={styles.detailsView}>
            <View style={styles.content}>
              {/* View section 1 */}
              <View style={styles.section}>
                <Text style={styles.details}>adrina sell</Text>
                <Text style={styles.details}>adrina.sell@gmail.com</Text>
                <Text style={styles.details}>+12 4444 88 969</Text>
              </View>

              {/* View section 2 */}
              <View style={styles.section}>
                <View style={styles.bookingRow}>
                  <Text style={styles.details}>Booking #</Text>
                  <Text style={styles.details}>00000256</Text>
                </View>
                <View style={styles.bookingRow}>
                  <Text style={styles.details}>Booking Date</Text>
                  <Text style={styles.details}>02/03/2024</Text>
                </View>
                <View style={styles.bookingRow}>
                  <Text style={styles.details}>Status</Text>
                  <Text style={styles.details}>Draft</Text>
                </View>
              </View>
            </View>
            {/*  */}
            <View style={styles.subtitle}>
              <Text style={styles.details}>Products selected</Text>
              <Text style={styles.details}>Amount</Text>
            </View>
            {/* Check In */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>
                President Luxury Double Room View NY City ( 4 Days )
              </Text>
              <Text style={styles.details}>$ 240.00 </Text>
            </View>

            {/* Check out */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Private Pool</Text>
              <Text style={styles.details}>$ 35.00</Text>
            </View>

            {/* Guests */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Spa</Text>
              <Text style={styles.details}>$ 50.00</Text>
            </View>

            <View style={styles.subtitle}>
              <Text style={styles.details}>Services</Text>
            </View>
            {/* Check In */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Laundry and Dry cleaning</Text>
              <Text style={styles.details}>$ 35.00</Text>
            </View>

            {/* Check out */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Airport pick-up ( 1 day )</Text>
              <Text style={styles.details}>$ 80.00</Text>
            </View>

            <View style={styles.subtitle} break>
              <Text style={styles.details}>Meals</Text>
            </View>
            {/* Check In */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Breakfast (4 days)</Text>
              <Text style={styles.details}>$ 35.00</Text>
            </View>

            {/* Check out */}
            <View style={styles.servicesdetailsRow}>
              <Text style={styles.details}>Dinner (4 days)</Text>
              <Text style={styles.details}>$ 50.00</Text>
            </View>
            <View style={styles.subtotle}>
              <Text style={styles.details}>Tax Rate</Text>
              <Text style={styles.details}>15%</Text>
            </View>
            <View style={styles.total}>
              <Text style={styles.details}>Total</Text>
              <Text style={styles.details}>$158.20</Text>
            </View>
          </View>
          <Text style={styles.specialNotice}>Special Instructions</Text>
          <Text style={styles.specialCriteria}>reffer to these criteria</Text>
          <Text style={styles.specialCriteria}>reffer to these criteria</Text>
          <Text style={styles.specialCriteria}>reffer to these criteria</Text>
          {/* Booked by content */}
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
