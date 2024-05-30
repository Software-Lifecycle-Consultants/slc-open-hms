"use client";
import PDFGenerator from "@/components/pdf-generator/page";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  pdfView: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default function Home() {
  // internal error handling
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div>
          {/* PDF View */}
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#C7923E",
              paddingTop: "25px",
              paddingBottom: "25px",
              fontSize: "30px",
            }}
          >
            PDF View
          </div>
          <div style={styles.pdfView}>
            <PDFViewer width="100%" height="600">
              <PDFGenerator />
            </PDFViewer>
          </div>
        </div>
      ) : null}
    </>
  );
}
