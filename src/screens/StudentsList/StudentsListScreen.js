import React from 'react';
import {v4 as uuidv4} from 'uuid';

import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Table, Row} from 'react-native-table-component';

import {NavigationHeader} from '../../components';

import {
  BACKGROUND_COLOR,
  LIGHT_BLUE_COLOR,
  WHITE_COLOR,
  MULI_MEDIUM,
  MULI_REGULAR,
  DARK_FONT_COLOR,
} from '../../assets/styles';

const StudentsListScreen = props => {
  const tableHeaders = [
    'Código',
    <Text style={{...styles.tableHeadersText, textAlign: 'left'}}>
      Nombre estudiante
    </Text>,
    'Institución',
    'Ciudad y País',
    'Fecha de nacimiento',
  ];
  const widthArr = [150, 200, 210, 180, 180];

  const studentsDataFormatted =
    props.studentsList.length > 0
      ? props.studentsList.map(student => {
          const {
            codigo,
            nombres,
            apellidos,
            institucion,
            ciudad,
            pais,
            nacimiento,
          } = student.datos;

          return [
            codigo,
            [
              <Text
                style={{
                  ...styles.tableText,
                  textAlign: 'left',
                  fontWeight: '800',
                }}>
                {`${nombres}\n`}
              </Text>,
              <Text style={{...styles.tableText, textAlign: 'left'}}>
                {apellidos}
              </Text>,
            ],
            institucion,
            `${ciudad}, ${pais}`,
            nacimiento,
          ];
        })
      : [];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <NavigationHeader
          title="Lista de estudiantes"
          navigation={props.navigation}
        />
      </View>
      <View style={styles.list}>
        <View>
          <Table>
            <Row
              data={tableHeaders}
              widthArr={widthArr}
              style={styles.tableHeader}
              textStyle={styles.tableHeadersText}
            />
          </Table>
          {/* https://stackoverflow.com/questions/49373417/react-native-scrollview-height-always-stays-static-and-does-not-change */}
          <View style={styles.tableDataWrapper}>
            <ScrollView>
              <Table>
                {studentsDataFormatted.map(rowData => (
                  <Row
                    key={rowData.toString()}
                    data={rowData}
                    widthArr={widthArr}
                    style={styles.tableRow}
                    textStyle={styles.tableText}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: BACKGROUND_COLOR,
    width: '100%',
    height: '100%',
    paddingHorizontal: 79,
    paddingVertical: 80,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: '25%',
  },
  form: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 71,
  },
  tableHeader: {
    height: 50,
    backgroundColor: LIGHT_BLUE_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 4,
  },
  tableHeadersText: {
    fontFamily: MULI_MEDIUM,
    textAlign: 'center',
    color: WHITE_COLOR,
    fontSize: 14,
    lineHeight: 24,
  },
  tableDataWrapper: {
    height: 410,
  },
  tableText: {
    fontFamily: MULI_REGULAR,
    color: DARK_FONT_COLOR,
    textAlign: 'center',
  },
  tableRow: {
    height: 64,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: WHITE_COLOR,
    marginBottom: 5,
  },
});

export default StudentsListScreen;
