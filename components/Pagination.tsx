import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  items: string[];
  paginationIndex: number;
};

const Pagination = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.paginationDots,
            {
              backgroundColor:
                props.paginationIndex === index ? Colors.primary : "#ccc",
            },
          ]}
        />
      ))}

      <View style={styles.paginationNumberContainer}>
        <View style={styles.paginationNumberBox}>
          <Text style={styles.paginationText}>
            {props.paginationIndex + 1}/{props.items.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDots: {
    width: 30,
    height: 4,
    margin: 3,
    borderRadius: 5,
  },
  paginationNumberContainer: {
    position: "absolute",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 20,
  },
  paginationNumberBox: {
    backgroundColor: Colors.extraLightGray,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  paginationText: {
    color: Colors.primary,
    fontSize: 12,
  },
});
